#!/usr/bin/env python3
import difflib
import json
import re
import shutil
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple


ROOT = Path("/Users/a1234/.verdent/verdent-projects/beijing-study-portal")
SUBJECTS_PATH = ROOT / "content" / "subjects.json"
CHINESE_ORPHAN_BASE = ROOT / "content" / "chinese" / "grade7-1"
UNMATCHED_BASE = ROOT / "content" / "_unmatched" / "chinese-7a-orphans"

ACCEPT_THRESHOLD = 0.78
MAYBE_THRESHOLD = 0.62
MAYBE_GAP = 0.08


@dataclass
class TopicRef:
    chapter_id: str
    chapter_title: str
    topic_id: str
    topic_title: str
    topic_obj: Dict
    n_title: str
    n_id: str


@dataclass
class OrphanRef:
    path: Path
    slug: str
    title: str
    n_title: str


@dataclass
class MatchRef:
    orphan: OrphanRef
    topic: TopicRef
    score: float
    delta: float


def normalize(text: str) -> str:
    cleaned = (text or "").strip().lower()
    cleaned = re.sub(
        r"[`~!@#$%^&*()_+\-=\[\]{}\\|;:\"',.<>/?·！￥…（）—【】、；：‘’“”，。《》？\s]+",
        "",
        cleaned,
    )
    return cleaned


def sequence_ratio(left: str, right: str) -> float:
    return difflib.SequenceMatcher(None, left, right).ratio()


def extract_frontmatter_title(note_path: Path) -> Optional[str]:
    try:
        text = note_path.read_text(encoding="utf-8")
    except Exception:
        return None
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return None
    for line in lines[1:80]:
        if line.strip() == "---":
            break
        if line.lower().startswith("title:"):
            return line.split(":", 1)[1].strip().strip("\"'")
    return None


def safe_move(src: Path, dst: Path) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    if src.resolve() == dst.resolve():
        return
    if dst.exists():
        raise RuntimeError(f"destination exists: {dst}")
    try:
        subprocess.run(
            ["git", "mv", str(src), str(dst)],
            check=True,
            cwd=str(ROOT),
            capture_output=True,
            text=True,
        )
    except subprocess.CalledProcessError:
        shutil.move(str(src), str(dst))


def merge_or_move_dir(src: Path, dst: Path) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    if src.resolve() == dst.resolve():
        return
    if not dst.exists():
        safe_move(src, dst)
        return
    for child in src.iterdir():
        target = dst / child.name
        if child.is_dir():
            if target.exists() and target.is_dir():
                shutil.copytree(str(child), str(target), dirs_exist_ok=True)
                shutil.rmtree(str(child))
            else:
                shutil.move(str(child), str(target))
        else:
            if target.exists():
                target.unlink()
            shutil.move(str(child), str(target))
    if src.exists():
        src.rmdir()


def gather_chinese_7a_topics(subjects: List[Dict]) -> Tuple[Dict, Dict, List[TopicRef]]:
    chinese = next(subject for subject in subjects if subject.get("id") == "chinese")
    grade7a = next(grade for grade in chinese.get("grades", []) if grade.get("id") == "7a")
    topics: List[TopicRef] = []
    for chapter in grade7a.get("chapters", []):
        for topic in chapter.get("topics", []):
            topic_id = topic.get("id", "")
            topic_title = topic.get("title", "")
            topics.append(
                TopicRef(
                    chapter_id=chapter.get("id", ""),
                    chapter_title=chapter.get("title", ""),
                    topic_id=topic_id,
                    topic_title=topic_title,
                    topic_obj=topic,
                    n_title=normalize(topic_title),
                    n_id=normalize(topic_id),
                )
            )
    return chinese, grade7a, topics


def gather_orphans() -> List[OrphanRef]:
    orphans: List[OrphanRef] = []
    containers: List[Path] = []
    if CHINESE_ORPHAN_BASE.exists():
        containers.extend(
            sorted([path for path in CHINESE_ORPHAN_BASE.iterdir() if path.is_dir() and path.name.startswith("unit")])
        )
    if UNMATCHED_BASE.exists():
        containers.append(UNMATCHED_BASE)

    for container in containers:
        for topic_dir in sorted([path for path in container.iterdir() if path.is_dir()]):
            note_path = topic_dir / "note.md"
            if not note_path.exists():
                continue
            title = extract_frontmatter_title(note_path) or topic_dir.name
            orphans.append(
                OrphanRef(
                    path=topic_dir,
                    slug=topic_dir.name,
                    title=title,
                    n_title=normalize(title),
                )
            )
    return orphans


def map_orphans(orphans: List[OrphanRef], topics: List[TopicRef]) -> Tuple[List[MatchRef], List[MatchRef]]:
    used_ids = set()
    accepted: List[MatchRef] = []
    pending: List[MatchRef] = []
    for orphan in orphans:
        candidates: List[Tuple[float, TopicRef]] = []
        for topic in topics:
            if topic.topic_id in used_ids:
                continue
            ratio = sequence_ratio(orphan.n_title, topic.n_title)
            ratio_id = sequence_ratio(orphan.n_title, topic.n_id)
            contained = 1.0 if (orphan.n_title in topic.n_title or topic.n_title in orphan.n_title) else 0.0
            contained_id = 1.0 if (orphan.n_title in topic.n_id or topic.n_id in orphan.n_title) else 0.0
            score = max(ratio, ratio_id, 0.95 * contained, 0.95 * contained_id)
            candidates.append((score, topic))
        candidates.sort(key=lambda item: item[0], reverse=True)
        best_score, best_topic = candidates[0]
        second_score = candidates[1][0] if len(candidates) > 1 else 0.0
        delta = best_score - second_score
        confident = (best_score >= ACCEPT_THRESHOLD) or (
            best_score >= MAYBE_THRESHOLD and delta >= MAYBE_GAP
        )
        match = MatchRef(orphan=orphan, topic=best_topic, score=best_score, delta=delta)
        if confident:
            used_ids.add(best_topic.topic_id)
            accepted.append(match)
        else:
            pending.append(match)
    return accepted, pending


def apply_recovered_mapping(accepted: List[MatchRef]) -> None:
    by_topic_id = {item.topic.topic_id: item for item in accepted}
    _, grade7a, _ = gather_chinese_7a_topics(subjects_data["subjects"])
    for chapter in grade7a.get("chapters", []):
        chapter_id = chapter.get("id", "")
        for topic in chapter.get("topics", []):
            topic_id = topic.get("id", "")
            if topic_id not in by_topic_id:
                continue
            match = by_topic_id[topic_id]
            new_rel = f"chinese/grade7-1/{chapter_id}/{topic_id}"
            destination = ROOT / "content" / new_rel
            source = match.orphan.path
            if source.exists():
                merge_or_move_dir(source, destination)
            topic["contentPath"] = new_rel
            materials = list(topic.get("materials") or [])
            if "note" not in materials:
                materials.insert(0, "note")
            topic["materials"] = materials


def move_pending_to_unmatched(pending: List[MatchRef]) -> None:
    UNMATCHED_BASE.mkdir(parents=True, exist_ok=True)
    for item in pending:
        src = item.orphan.path
        if not src.exists():
            continue
        candidate = UNMATCHED_BASE / src.name
        index = 1
        while candidate.exists():
            candidate = UNMATCHED_BASE / f"{src.name}-{index}"
            index += 1
        safe_move(src, candidate)


def note_skeleton(
    topic_title: str,
    subject_id: str,
    semester: str,
    chapter_title: str,
    textbook: str,
) -> str:
    tags = [subject_id, chapter_title]
    cleaned_tags = [tag.replace("\"", "") for tag in tags]
    tags_fmt = "[" + ", ".join(f"\"{tag}\"" for tag in cleaned_tags) + "]"
    return (
        "---\n"
        f"title: {topic_title}\n"
        f"subject: {subject_id}\n"
        "grade: 7\n"
        f"semester: {semester}\n"
        f"chapter: {chapter_title}\n"
        f"tags: {tags_fmt}\n"
        "status: draft\n"
        "---\n\n"
        f"# {topic_title}\n\n"
        "## 教材定位\n"
        f"教材版本：{textbook}；第{chapter_title}；知识点：{topic_title}\n\n"
        "## 核心要点\n"
        "> 待补充\n\n"
        "## 需要记住\n"
        "> 待补充\n\n"
        "## 易错点\n"
        "> 待补充\n\n"
        "## 我的笔记\n"
        "> 待补充\n"
    )


def scaffold_missing_for_all_subjects() -> int:
    created = 0
    for subject in subjects_data.get("subjects", []):
        subject_id = subject.get("id", "")
        for grade in subject.get("grades", []):
            grade_id = grade.get("id", "")
            if grade_id not in ("7a", "7b"):
                continue
            semester = "1" if grade_id.endswith("a") else "2"
            semester_digit = "1" if grade_id.endswith("a") else "2"
            textbook = grade.get("textbook", "")
            for chapter in grade.get("chapters", []):
                chapter_id = chapter.get("id", "")
                chapter_title = chapter.get("title", "")
                for topic in chapter.get("topics", []):
                    topic_id = topic.get("id", "")
                    topic_title = topic.get("title", "")
                    if not topic_id:
                        continue
                    content_path = topic.get("contentPath")
                    if not content_path:
                        content_path = f"{subject_id}/grade7-{semester_digit}/{chapter_id}/{topic_id}"
                        topic["contentPath"] = content_path
                    note_path = ROOT / "content" / content_path / "note.md"
                    if not note_path.exists():
                        note_path.parent.mkdir(parents=True, exist_ok=True)
                        note_path.write_text(
                            note_skeleton(
                                topic_title=topic_title,
                                subject_id=subject_id,
                                semester=semester,
                                chapter_title=chapter_title,
                                textbook=textbook,
                            ),
                            encoding="utf-8",
                        )
                        created += 1
                    materials = list(topic.get("materials") or [])
                    if "note" not in materials:
                        materials.insert(0, "note")
                    topic["materials"] = materials
    return created


def validate_coverage() -> Dict[str, int]:
    all_ids: List[str] = []
    with_path = 0
    missing_note = 0
    missing_target = 0
    for subject in subjects_data.get("subjects", []):
        for grade in subject.get("grades", []):
            for chapter in grade.get("chapters", []):
                for topic in chapter.get("topics", []):
                    topic_id = topic.get("id", "")
                    all_ids.append(topic_id)
                    content_path = topic.get("contentPath")
                    if content_path:
                        with_path += 1
                        dir_path = ROOT / "content" / content_path
                        note_path = dir_path / "note.md"
                        if not dir_path.exists():
                            missing_target += 1
                        if not note_path.exists():
                            missing_note += 1
    return {
        "total_topics": len(all_ids),
        "with_content_path": with_path,
        "duplicate_ids": len(all_ids) - len(set(all_ids)),
        "missing_target_dirs": missing_target,
        "missing_note_files": missing_note,
    }


subjects_data = json.loads(SUBJECTS_PATH.read_text(encoding="utf-8"))
_, _, chinese_7a_topics = gather_chinese_7a_topics(subjects_data["subjects"])
orphans_before = gather_orphans()
accepted_matches, pending_matches = map_orphans(orphans_before, chinese_7a_topics)
apply_recovered_mapping(accepted_matches)
move_pending_to_unmatched(pending_matches)
created_skeleton = scaffold_missing_for_all_subjects()
SUBJECTS_PATH.write_text(json.dumps(subjects_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
coverage = validate_coverage()

print(f"A_total_orphans {len(orphans_before)}")
print(f"A_mapped {len(accepted_matches)}")
print(f"A_pending {len(pending_matches)}")
print(f"A_unmatched {len(pending_matches)}")
print(f"B_skeleton_created {created_skeleton}")
print(f"CHECK_total_topics {coverage['total_topics']}")
print(f"CHECK_with_contentPath {coverage['with_content_path']}")
print(f"CHECK_dup_ids {coverage['duplicate_ids']}")
print(f"CHECK_missing_target_dirs {coverage['missing_target_dirs']}")
print(f"CHECK_missing_note_files {coverage['missing_note_files']}")

for item in accepted_matches:
    print(f"MAP {item.orphan.slug} -> {item.topic.topic_id} {item.score:.4f}")
for item in pending_matches:
    print(f"PENDING {item.orphan.slug} -> {item.topic.topic_id} {item.score:.4f}")