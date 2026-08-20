import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent.parent
CURRICULUM_PATH = ROOT / "docs" / "curriculum-12b.md"
SUBJECTS_PATH = ROOT / "content" / "subjects.json"
CONTENT_ROOT = ROOT / "content"
GRADE_ID = "12b"
GRADE_DIR = "grade12-2"


DEFAULT_META = {
    "difficulty": 3,
    "importance": "高考高频",
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
        raise RuntimeError("未在 curriculum-12b.md 中找到机器可读 JSON 结构")
    return json.loads(match.group(1))


def topic_meta(subject_id: str, chapter_title: str, title: str) -> tuple[int, str, list[str]]:
    if subject_id == "chinese":
        if any(key in title for key in ["作文", "审题", "立意", "结构", "素材"]):
            return 4, "高考必考", ["#需大量练习"]
        if any(key in title for key in ["默写", "文言", "诗歌", "断句", "翻译"]):
            return 4, "高考必考", ["#需背诵"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "math":
        if any(key in title for key in ["导数", "圆锥曲线", "数列", "概率", "统计", "立体几何"]):
            return 5, "高考必考", ["#需大量练习"]
        return 4, "高考必考", ["#基础"]
    if subject_id == "english":
        if any(key in title for key in ["写作", "续写", "改错", "语法填空"]):
            return 4, "高考必考", ["#需大量练习"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "physics":
        if any(key in title for key in ["电磁", "动量", "力学综合", "实验", "计算"]):
            return 5, "高考必考", ["#需大量练习"]
        return 4, "高考必考", ["#基础"]
    if subject_id == "chemistry":
        if any(key in title for key in ["工艺流程", "实验", "有机", "推断", "合成", "电化学"]):
            return 4, "高考必考", ["#需大量练习"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "biology":
        if any(key in title for key in ["遗传", "实验", "信息题", "系谱", "计算"]):
            return 4, "高考必考", ["#需大量练习"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "history":
        if any(key in title for key in ["小论文", "史料", "阶段特征", "中外关联"]):
            return 4, "高考必考", ["#需背诵"]
        return 3, "高考高频", ["#需背诵"]
    if subject_id == "geography":
        if any(key in title for key in ["综合题", "区位", "区域", "图表", "判读"]):
            return 4, "高考必考", ["#需大量练习"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "politics":
        if any(key in title for key in ["主观题", "选择题", "时政", "答题"]):
            return 4, "高考必考", ["#需大量练习"]
        if any(key in title for key in ["法律", "逻辑", "思维"]):
            return 4, "高考必考", ["#需背诵"]
        return 3, "高考必考", ["#需背诵"]
    return DEFAULT_META["difficulty"], DEFAULT_META["importance"], list(DEFAULT_META["tags"])


def build_topic(subject_id: str, chapter_no: int, topic_no: int, chapter_title: str, title: str) -> dict:
    difficulty, importance, tags = topic_meta(subject_id, chapter_title, title)
    return {
        "id": f"{subject_id}-{GRADE_ID}-{chapter_no}-{slugify(title)}-{topic_no}",
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
