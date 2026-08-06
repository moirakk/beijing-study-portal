import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SUBJECTS_PATH = ROOT / "content" / "subjects.json"


def slugify(text: str) -> str:
    normalized = unicodedata.normalize("NFKD", text)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii").lower()
    ascii_text = re.sub(r"[^a-z0-9]+", "-", ascii_text).strip("-")
    return ascii_text or "item"


DEFAULT_META = {
    "difficulty": 2,
    "importance": "中考高频",
    "tags": ["#基础"],
    "prerequisites": [],
    "related": [],
    "materials": ["note"],
}


CURRICULUM = {
    "chinese": {
        "textbook": "部编版",
        "chapters": [
            {
                "title": "第一单元",
                "topics": [
                    ("社戏、回延安、安塞腰鼓、灯笼", 2, "中考高频", ["#基础"]),
                    ("写作：学习仿写", 2, "中考高频", ["#需大量练习"]),
                    ("口语交际：应对", 1, "了解即可", ["#提高"]),
                    ("单元综合梳理", 1, "了解即可", ["#基础"]),
                ],
            },
            {
                "title": "第二单元",
                "topics": [
                    ("说明文阅读：大自然的语言", 2, "中考高频", ["#基础"]),
                    ("科学小品文阅读：阿西莫夫短文两篇", 2, "中考高频", ["#基础"]),
                    ("自读课文：大雁归来与时间的脚印", 2, "中考高频", ["#基础"]),
                    ("写作与综合性学习：说明的顺序／倡导低碳生活", 2, "中考高频", ["#需大量练习"]),
                ],
            },
            {
                "title": "第三单元",
                "topics": [
                    ("古文精读：桃花源记、小石潭记、核舟记", 3, "中考必考", ["#需背诵"]),
                    ("《诗经》二首：关雎、蒹葭", 3, "中考必考", ["#需背诵"]),
                    ("写作与综合性学习：学写读后感／古诗苑漫步", 2, "中考高频", ["#需大量练习"]),
                    ("名著导读与课外古诗词诵读", 2, "中考高频", ["#需背诵"]),
                ],
            },
            {
                "title": "第四单元",
                "topics": [
                    ("任务一：学习演讲词", 2, "中考高频", ["#基础"]),
                    ("课文研读：最后一次讲演、应有格物致知精神", 2, "中考高频", ["#基础"]),
                    ("课文研读：我一生中的重要抉择、庆祝奥林匹克运动复兴25周年", 2, "中考高频", ["#基础"]),
                    ("任务二、任务三：撰写演讲稿／举办演讲比赛", 2, "中考高频", ["#需大量练习"]),
                ],
            },
            {
                "title": "第五单元",
                "topics": [
                    ("游记散文精读：壶口瀑布、在长江源头各拉丹冬", 2, "中考高频", ["#基础"]),
                    ("自读课文：登勃朗峰、一滴水经过丽江", 2, "中考高频", ["#基础"]),
                    ("写作：学写游记", 2, "中考高频", ["#需大量练习"]),
                    ("口语交际：即席讲话", 1, "了解即可", ["#提高"]),
                ],
            },
            {
                "title": "第六单元",
                "topics": [
                    ("古文精读：《庄子》二则、《礼记》二则、马说", 3, "中考必考", ["#需背诵"]),
                    ("唐诗三首：石壕吏、茅屋为秋风所破歌、卖炭翁", 3, "中考必考", ["#需背诵"]),
                    ("写作：学写故事", 2, "中考高频", ["#需大量练习"]),
                    ("综合性学习、名著导读与课外古诗词诵读", 2, "中考高频", ["#需背诵"]),
                ],
            },
        ],
    },
    "math": {
        "textbook": "人教版",
        "chapters": [
            {
                "title": "第十六章 二次根式",
                "topics": [
                    ("16.1 二次根式", 2, "中考高频", ["#基础"]),
                    ("16.2 二次根式的乘除", 2, "中考高频", ["#基础"]),
                    ("16.3 二次根式的加减", 2, "中考高频", ["#基础"]),
                ],
            },
            {
                "title": "第十七章 勾股定理",
                "topics": [
                    ("17.1 勾股定理", 2, "中考必考", ["#基础"]),
                    ("17.2 勾股定理的逆定理", 3, "中考必考", ["#基础"]),
                    ("勾股定理综合应用", 3, "中考必考", ["#需大量练习"]),
                ],
            },
            {
                "title": "第十八章 平行四边形",
                "topics": [
                    ("18.1 平行四边形", 2, "中考高频", ["#基础"]),
                    ("18.2 特殊的平行四边形", 3, "中考必考", ["#基础"]),
                    ("平行四边形综合应用", 3, "中考必考", ["#需大量练习"]),
                ],
            },
            {
                "title": "第十九章 一次函数",
                "topics": [
                    ("19.1 函数", 2, "中考高频", ["#基础"]),
                    ("19.2 一次函数", 3, "中考必考", ["#基础"]),
                    ("19.3 课题学习：选择方案", 2, "中考高频", ["#提高"]),
                    ("一次函数综合应用", 3, "中考必考", ["#需大量练习"]),
                ],
            },
            {
                "title": "第二十章 数据的分析",
                "topics": [
                    ("20.1 数据的集中趋势", 2, "中考高频", ["#基础"]),
                    ("20.2 数据的波动程度", 2, "中考高频", ["#基础"]),
                    ("20.3 课题学习：体质健康测试中的数据", 2, "中考高频", ["#提高"]),
                ],
            },
        ],
    },
    "english": {
        "textbook": "外研版",
        "chapters": [
            {"title": "Module 1 Feelings and impressions", "topics": ["Unit 1 It smells delicious", "Unit 2 I feel nervous when I speak Chinese", "Unit 3 Language in use"]},
            {"title": "Module 2 Experiences", "topics": ["Unit 1 I've also entered lots of speaking competitions", "Unit 2 They have seen the Pyramids", "Unit 3 Language in use"]},
            {"title": "Module 3 Journey to space", "topics": ["Unit 1 Has it arrived yet?", "Unit 2 We have not found life on any other planets yet", "Unit 3 Language in use"]},
            {"title": "Module 4 Seeing the doctor", "topics": ["Unit 1 I haven't done much exercise since I got my computer", "Unit 2 We have played football for a year now", "Unit 3 Language in use"]},
            {"title": "Module 5 Cartoons", "topics": ["Unit 1 It's time to watch a cartoon", "Unit 2 Tintin has been popular for over eighty years", "Unit 3 Language in use", "Revision module A"]},
            {"title": "Module 6 Hobbies", "topics": ["Unit 1 Do you collect anything?", "Unit 2 Hobbies can make you grow as a person", "Unit 3 Language in use"]},
            {"title": "Module 7 Summer in Los Angeles", "topics": ["Unit 1 Please write to me and send me some photos!", "Unit 2 Fill out our form and come to learn English in Los Angeles!", "Unit 3 Language in use"]},
            {"title": "Module 8 Time off", "topics": ["Unit 1 I can hardly believe we're in the city centre", "Unit 2 We thought somebody was moving about", "Unit 3 Language in use"]},
            {"title": "Module 9 Friendship", "topics": ["Unit 1 Could I ask if you've mentioned this to her?", "Unit 2 I believe that the world is what you think it is", "Unit 3 Language in use"]},
            {"title": "Module 10 On the radio", "topics": ["Unit 1 I hope that you can join us one day", "Unit 2 It seemed that they were speaking to me in person", "Unit 3 Language in use", "Revision module B"]},
        ],
    },
    "physics": {
        "textbook": "人教版",
        "chapters": [
            {"title": "第七章 力", "topics": ["力", "弹力", "重力"]},
            {"title": "第八章 运动和力", "topics": ["牛顿第一定律", "二力平衡", "摩擦力", "同一直线上二力的合成"]},
            {"title": "第九章 压强", "topics": ["压强", "液体的压强", "大气压强", "跨学科实践：制作简易活塞式抽水机", "流体压强与流速的关系"]},
            {"title": "第十章 浮力", "topics": ["浮力", "阿基米德原理", "物体的浮沉条件及应用", "跨学科实践：制作微型密度计"]},
            {"title": "第十一章 功和机械能", "topics": ["功", "功率", "动能和势能", "机械能及其转化"]},
            {"title": "第十二章 简单机械", "topics": ["杠杆", "跨学科实践：制作简易杆秤", "滑轮", "机械效率"]},
        ],
    },
    "history": {
        "textbook": "部编版",
        "chapters": [
            {"title": "第一单元 中华人民共和国的成立和巩固", "topics": ["第1课 中华人民共和国成立", "第2课 抗美援朝", "第3课 土地改革"]},
            {"title": "第二单元 社会主义制度的建立与社会主义建设的探索", "topics": ["第4课 新中国工业化的起步和人民代表大会制度的确立", "第5课 三大改造", "第6课 艰辛探索与建设成就"]},
            {"title": "第三单元 中国特色社会主义道路", "topics": ["第7课 伟大的历史转折", "第8课 经济体制改革", "第9课 对外开放", "第10课 建设中国特色社会主义", "第11课 为实现中国梦而努力奋斗"]},
            {"title": "第四单元 民族团结与祖国统一", "topics": ["第12课 民族大团结", "第13课 香港和澳门回归祖国", "第14课 海峡两岸的交往"]},
            {"title": "第五单元 国防建设与外交成就", "topics": ["第15课 钢铁长城", "第16课 独立自主的和平外交", "第17课 外交事业的发展"]},
            {"title": "第六单元 科技文化与社会生活", "topics": ["第18课 科技文化成就", "第19课 社会生活的变迁", "第20课 活动课：生活环境的巨大变化"]},
        ],
    },
    "geography": {
        "textbook": "中图北京版",
        "chapters": [
            {"title": "第五章 中国地理区域的划分与地方文化景观", "topics": ["第一节 中国地理区域的划分", "第二节 自然环境与地方文化景观", "主题探究：“一方水土养一方人”情景剧表演"]},
            {"title": "第六章 认识中国的地理分区", "topics": ["第一节 北方地区", "第二节 南方地区", "第三节 青藏地区", "第四节 西北地区", "主题探究：“循着歌声足迹 遇见美丽中国”推介活动"]},
            {"title": "第七章 认识家乡", "topics": ["主题探究：“我为家乡代言”文创产品设计大赛"]},
            {"title": "第八章 建设美丽中国", "topics": ["第一节 践行绿色发展理念", "第二节 谋求人地和谐共生", "主题探究：“我心目中的美丽城市和乡村”社会调查"]},
        ],
    },
    "politics": {
        "textbook": "部编版",
        "chapters": [
            {"title": "第一单元 坚持宪法至上", "topics": ["第一课 维护宪法权威", "第二课 保障宪法实施", "公民权利的保证书／治国安邦的总章程", "坚持依宪治国／加强宪法监督"]},
            {"title": "第二单元 理解权利义务", "topics": ["第三课 公民权利", "第四课 公民义务", "公民基本权利／依法行使权利", "公民基本义务／依法履行义务"]},
            {"title": "第三单元 人民当家作主", "topics": ["第五课 我国基本制度", "第六课 我国国家机构", "基本经济制度／根本政治制度／基本政治制度", "国家权力机关／中华人民共和国主席／国家行政机关／国家监察机关／国家司法机关"]},
            {"title": "第四单元 崇尚法治精神", "topics": ["第七课 尊重自由平等", "第八课 维护公平正义", "自由平等的真谛／自由平等的追求", "公平正义的价值／公平正义的守护"]},
        ],
    },
    "biology": {
        "textbook": "人教版",
        "chapters": [
            {"title": "第一章 生物的生殖和发育", "topics": ["植物的生殖", "昆虫的生殖和发育", "两栖动物的生殖和发育", "鸟的生殖和发育"]},
            {"title": "第二章 生物的遗传与变异", "topics": ["基因控制生物的性状", "基因在亲子代间的传递", "基因的显性和隐性", "人的性别遗传"]},
            {"title": "第三章 生命起源和生物进化", "topics": ["生物的变异", "地球上生命的起源", "生物进化的历程", "生物进化的原因"]},
            {"title": "生命的延续和发展综合", "topics": ["生物多样性的形成及保护", "综合实践：生命延续与进化专题梳理", "单元综合复习"]},
        ],
    },
}


def topic_meta(subject_id: str, title: str):
    if subject_id == "english":
        if "Revision" in title:
            return 1, "了解即可", ["#复习"]
        return 2, "中考高频", ["#基础"]
    if subject_id == "physics":
        if "跨学科实践" in title:
            return 2, "中考高频", ["#提高"]
        return (3, "中考必考", ["#基础"]) if title in {"压强", "浮力", "阿基米德原理", "杠杆", "机械效率", "牛顿第一定律", "二力平衡", "摩擦力"} else (2, "中考高频", ["#基础"])
    if subject_id == "history":
        return 2, "中考高频", ["#基础"] if "活动课" not in title else ["#提高"]
    if subject_id == "geography":
        return (2, "中考高频", ["#提高"]) if "主题探究" in title else (2, "中考高频", ["#基础"])
    if subject_id == "politics":
        return 2, "中考高频", ["#基础"]
    if subject_id == "biology":
        if "综合" in title or "专题" in title:
            return 2, "中考高频", ["#提高"]
        return 2, "中考高频", ["#基础"]
    return 2, "中考高频", ["#基础"]


def build_topic(subject_id: str, chapter_no: int, topic_no: int, title: str, difficulty: int, importance: str, tags: list[str]):
    return {
        "id": f"{subject_id}-8b-{chapter_no}-{slugify(title)}",
        "title": title,
        "difficulty": difficulty,
        "importance": importance,
        "tags": tags,
        "prerequisites": [],
        "related": [],
        "materials": ["note"],
        "contentPath": f"{subject_id}/grade8-2/ch{chapter_no}/t{topic_no}",
    }


def build_chapters(subject_id: str, chapters: list[dict]):
    built = []
    for chapter_no, chapter in enumerate(chapters, start=1):
        chapter_id = f"ch{chapter_no}-{slugify(chapter['title'])}"
        topics = []
        for topic_no, topic in enumerate(chapter["topics"], start=1):
            if isinstance(topic, tuple):
                title, difficulty, importance, tags = topic
            else:
                title = topic
                difficulty, importance, tags = topic_meta(subject_id, title)
            topics.append(build_topic(subject_id, chapter_no, topic_no, title, difficulty, importance, tags))
        built.append({"id": chapter_id, "title": chapter["title"], "topics": topics})
    return built


def update_subjects():
    data = json.loads(SUBJECTS_PATH.read_text())
    for subject in data["subjects"]:
        subject_id = subject["id"]
        if subject_id not in CURRICULUM:
            continue
        grade = next(grade for grade in subject["grades"] if grade["id"] == "8b")
        grade["textbook"] = CURRICULUM[subject_id]["textbook"]
        grade["chapters"] = build_chapters(subject_id, CURRICULUM[subject_id]["chapters"])
    SUBJECTS_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")


def create_note_files():
    data = json.loads(SUBJECTS_PATH.read_text())
    for subject in data["subjects"]:
        subject_id = subject["id"]
        if subject_id not in CURRICULUM:
            continue
        grade = next(grade for grade in subject["grades"] if grade["id"] == "8b")
        for chapter in grade["chapters"]:
            for topic in chapter["topics"]:
                topic_dir = ROOT / "content" / topic["contentPath"]
                topic_dir.mkdir(parents=True, exist_ok=True)
                note_path = topic_dir / "note.md"
                if not note_path.exists():
                    note_path.write_text(f"---\ndraft: true\n---\n\n# {topic['title']}\n")


def print_summary():
    data = json.loads(SUBJECTS_PATH.read_text())
    total = 0
    for subject_id in CURRICULUM:
        subject = next(s for s in data["subjects"] if s["id"] == subject_id)
        grade = next(g for g in subject["grades"] if g["id"] == "8b")
        count = sum(len(ch["topics"]) for ch in grade["chapters"])
        total += count
        print(f"{subject['name']}: {count}")
    print(f"TOTAL: {total}")


if __name__ == "__main__":
    update_subjects()
    create_note_files()
    print_summary()