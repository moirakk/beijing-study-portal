import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent.parent
CURRICULUM_PATH = ROOT / "docs" / "curriculum-9b.md"
SUBJECTS_PATH = ROOT / "content" / "subjects.json"
CONTENT_ROOT = ROOT / "content"
GRADE_ID = "9b"
GRADE_DIR = "grade9-2"


DEFAULT_META = {
    "difficulty": 2,
    "importance": "中考高频",
    "tags": ["#基础"],
    "prerequisites": [],
    "related": [],
    "materials": ["note"],
}


def slugify(text: str) -> str:
    normalized = unicodedata.normalize("NFKD", text)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii").lower()
    ascii_text = re.sub(r"[^a-z0-9]+", "-", ascii_text).strip("-")
    return ascii_text or "item"


def extract_curriculum() -> dict:
    text = CURRICULUM_PATH.read_text(encoding="utf-8")
    match = re.search(r"## 机器可读结构\s+```json\s*(\{.*?\})\s*```", text, re.S)
    if not match:
        raise RuntimeError("未在 curriculum-9b.md 中找到机器可读 JSON 结构")
    return json.loads(match.group(1))


def topic_meta(subject_id: str, chapter_title: str, title: str) -> tuple[int, str, list[str]]:
    if subject_id == "chinese":
        if "写作" in title or "口语交际" in title or "排练" in title or "演出" in title:
            return 2, "中考高频", ["#需大量练习"]
        if "名著导读" in title or "课外古诗词" in title:
            return 2, "中考高频", ["#需背诵"]
        if "综合性学习" in title:
            return 2, "中考高频", ["#提高"]
        if chapter_title in {"第三单元", "第六单元"}:
            return 3, "中考必考", ["#需背诵"]
        return 2, "中考高频", ["#基础"]
    if subject_id == "math":
        if "课题学习" in title:
            return 2, "中考高频", ["#提高"]
        if any(key in title for key in ["反比例函数", "相似三角形", "锐角三角函数", "解直角三角形"]):
            return 3, "中考必考", ["#基础"]
        return 2, "中考高频", ["#基础"]
    if subject_id == "english":
        if "Revision" in chapter_title or "Revision" in title:
            return 1, "了解即可", ["#复习"]
        if "Language in use" in title:
            return 2, "中考高频", ["#语法"]
        return 2, "中考高频", ["#基础"]
    if subject_id == "physics":
        if "电功率" in chapter_title or "焦耳定律" in title or "欧姆" in title:
            return 3, "中考必考", ["#基础"]
        if "电与磁" in chapter_title or "安全用电" in title or "家庭电路" in title:
            return 3, "中考必考", ["#基础"]
        return 2, "中考高频", ["#基础"]
    if subject_id == "chemistry":
        if any(key in chapter_title for key in ["金属", "溶液", "酸和碱", "盐"]):
            return 3, "中考必考", ["#基础"]
        return 2, "中考高频", ["#基础"]
    if subject_id == "history":
        if "活动课" in title:
            return 1, "了解即可", ["#提高"]
        if any(key in title for key in ["明治维新", "第二次工业革命", "十月革命", "罗斯福新政", "第二次世界大战", "冷战", "第一次世界大战"]):
            return 3, "中考必考", ["#需背诵"]
        return 2, "中考高频", ["#基础"]
    if subject_id == "politics":
        if any(key in title for key in ["人类命运共同体", "和平与发展", "中国担当", "互利共赢"]):
            return 3, "中考必考", ["#需背诵"]
        return 2, "中考高频", ["#基础"]
    return DEFAULT_META["difficulty"], DEFAULT_META["importance"], list(DEFAULT_META["tags"])


def build_topic(subject_id: str, chapter_no: int, topic_no: int, chapter_title: str, title: str) -> dict:
    difficulty, importance, tags = topic_meta(subject_id, chapter_title, title)
    return {
        "id": f"{subject_id}-{GRADE_ID}-{chapter_no}-{slugify(title)}",
        "title": title,
        "difficulty": difficulty,
        "importance": importance,
        "tags": tags,
        "prerequisites": [],
        "related": [],
        "materials": ["note"],
        "contentPath": f"{subject_id}/{GRADE_DIR}/ch{chapter_no}/t{topic_no}",
    }


def build_chapters(subject_id: str, chapters: list[dict]) -> list[dict]:
    built = []
    for chapter_no, chapter in enumerate(chapters, start=1):
        built.append(
            {
                "id": f"ch{chapter_no}-{slugify(chapter['title'])}",
                "title": chapter["title"],
                "topics": [
                    build_topic(subject_id, chapter_no, topic_no, chapter["title"], topic_title)
                    for topic_no, topic_title in enumerate(chapter["topics"], start=1)
                ],
            }
        )
    return built


def ensure_note(content_path: str, title: str) -> None:
    note_path = CONTENT_ROOT / content_path / "note.md"
    note_path.parent.mkdir(parents=True, exist_ok=True)
    expected = f"---\nstatus: draft\ndraft: true\n---\n\n# {title}\n"
    if note_path.exists():
        return
    note_path.write_text(expected, encoding="utf-8")


def update_subjects(curriculum: dict) -> dict:
    data = json.loads(SUBJECTS_PATH.read_text(encoding="utf-8"))
    subjects_by_id = {subject["id"]: subject for subject in data["subjects"]}

    for subject_id, subject_curriculum in curriculum["subjects"].items():
        subject = subjects_by_id[subject_id]
        grade = next(item for item in subject["grades"] if item["id"] == GRADE_ID)
        grade["textbook"] = subject_curriculum["textbook"]
        grade["chapters"] = build_chapters(subject_id, subject_curriculum["chapters"])
        for chapter in grade["chapters"]:
            for topic in chapter["topics"]:
                ensure_note(topic["contentPath"], topic["title"])

    SUBJECTS_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return data


def summarize(data: dict) -> dict:
    summary = {}
    total = 0
    for subject in data["subjects"]:
        grade = next((item for item in subject["grades"] if item["id"] == GRADE_ID), None)
        if not grade or not grade["chapters"]:
            continue
        count = sum(len(chapter["topics"]) for chapter in grade["chapters"])
        summary[subject["id"]] = {
            "chapters": len(grade["chapters"]),
            "topics": count,
        }
        total += count
    summary["_total_topics"] = total
    return summary


def main() -> None:
    curriculum = extract_curriculum()
    data = update_subjects(curriculum)
    print(json.dumps(summarize(data), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
