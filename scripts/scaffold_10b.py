import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
CURRICULUM_PATH = ROOT / "docs" / "curriculum-10b.md"
SUBJECTS_PATH = ROOT / "content" / "subjects.json"
CONTENT_ROOT = ROOT / "content"
GRADE_ID = "10b"
GRADE_DIR = "grade10-2"


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
        raise RuntimeError("未在 curriculum-10b.md 中找到机器可读 JSON 结构")
    return json.loads(match.group(1))


def topic_meta(subject_id: str, chapter_title: str, title: str) -> tuple[int, str, list[str]]:
    if subject_id == "chinese":
        if "信息时代" in chapter_title or "整本书" in chapter_title:
            return 2, "了解即可", ["#提高"]
        if "古诗词诵读" in chapter_title:
            return 3, "高考必考", ["#需背诵"]
        if any(key in title for key in ["侍坐", "谏太宗十思疏", "答司马谏议书", "阿房宫赋", "六国论", "烛之武", "鸿门宴", "谏逐客书"]):
            return 4, "高考必考", ["#需背诵"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "math":
        if any(key in title for key in ["平面向量的运算", "基本定理及坐标表示", "平面向量的应用", "空间直线、平面的平行", "空间直线、平面的垂直", "随机事件与概率"]):
            return 4, "高考必考", ["#基础"]
        if "三角表示" in title:
            return 2, "了解即可", ["#提高"]
        if "统计案例" in title:
            return 3, "高考高频", ["#需大量练习"]
        return 3, "高考必考", ["#基础"]
    if subject_id == "english":
        if "语法" in title:
            return 3, "高考高频", ["#需大量练习"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "physics":
        if "实验" in title:
            return 3, "高考高频", ["#需大量练习"]
        if any(key in title for key in ["抛体运动的规律", "向心力", "万有引力定律", "宇宙航行", "动能和动能定理", "机械能守恒定律"]):
            return 4, "高考必考", ["#基础"]
        if "相对论" in title:
            return 2, "了解即可", ["#提高"]
        return 3, "高考必考", ["#基础"]
    if subject_id == "chemistry":
        if "实验活动" in title:
            return 3, "高考高频", ["#需大量练习"]
        if any(key in title for key in ["硫及其化合物", "氮及其化合物", "化学反应与能量变化", "速率与限度", "乙烯", "乙醇与乙酸"]):
            return 4, "高考必考", ["#基础"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "biology":
        if any(key in title for key in ["豌豆杂交", "减数分裂", "伴性遗传", "DNA的结构", "DNA的复制", "蛋白质的合成", "基因突变", "种群基因组成"]):
            return 4, "高考必考", ["#基础"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "history":
        if any(key in title for key in ["辛亥革命", "五四运动", "全面抗战", "抗日战争的胜利", "人民解放战争", "中华人民共和国成立", "道路的开辟"]):
            return 4, "高考必考", ["#需背诵"]
        return 3, "高考高频", ["#需背诵"]
    if subject_id == "geography":
        if any(key in title for key in ["人口迁移", "城镇化", "农业区位", "工业区位", "可持续发展"]):
            return 4, "高考必考", ["#基础"]
        return 3, "高考高频", ["#基础"]
    if subject_id == "politics":
        if "综合探究" in title:
            return 2, "了解即可", ["#提高"]
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
