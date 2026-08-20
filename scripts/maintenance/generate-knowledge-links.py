#!/usr/bin/env python3
"""
生成知识点关联数据 knowledge-links.json
规则：
1. 同学科纵向关联：同科不同年级，基于关键词匹配（严格过滤）
2. 跨学科横向关联：预定义关键概念映射
"""

import json
import re
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent.parent
SUBJECTS_JSON = ROOT / "content" / "subjects.json"
OUTPUT = ROOT / "content" / "knowledge-links.json"


def load_subjects():
    with open(SUBJECTS_JSON, encoding="utf-8") as f:
        return json.load(f)


def grade_order(grade_id: str) -> int:
    map_ = {"7a":0,"7b":1,"8a":2,"8b":3,"9a":4,"9b":5,
             "10a":6,"10b":7,"11a":8,"11b":9,"12a":10,"12b":11}
    return map_.get(grade_id, 99)


# 高频/无意义词（不用作匹配关键词）
STOP_WORDS = {
    # 教学活动词
    "综合","学习","活动","实践","探究","主题","整本","课外","写作",
    "阅读","课文","精读","自读","任务","专题","方案","设计","制作",
    "跨学科","名著","导读","口语","交际","单元","整理","梳理",
    "研读","复习","检测","训练","习题","练习","课题","导学","辅导",
    "答题","规范","技巧","方法","步骤","过程","思路","策略",
    "学写","仿写","扩写","缩写","改写","续写","审题","立意","布局",
    "抓住","表达","观察","描写","记事","抒情","记叙","议论","说明",
    # 通用词
    "和","与","的","及","在","中","是","有","了","第","节","章",
    "其","之","一","二","三","四","五","六","七","八","九","十",
    "基本","认识","常见","关系","现象","类型","原理","分析",
    "发展","影响","特点","变化","应用","作用","过程","性质","结构",
    "初步","简单","了解","理解","掌握","运用","知道","感知","体会",
    # 常见教材词（匹配面太广）
    "中国","世界","地区","生活","社会","自然","环境","文化","科学",
    "知识","规律","定律","功能","定理","公式","概念","理论","模型",
    "实验","测量","验证","探索","调查","观测","计算","推导",
    # 中文语文通用词
    "古诗","诗词","文言","散文","小说","戏剧","文章","段落","语言",
    "阅读","写作","词语","句子","段落","文本","文学","作者","主题",
    # 数学通用词
    "数","式","方程","解","证明","计算","图形","图像",
    # 历史通用词
    "时期","朝代","政策","制度","历史","影响","背景","过程","原因",
    "意义","评价","比较","分析","战争","运动","改革","革命","文明",
    # 政治通用词
    "国家","公民","权利","义务","法律","社会","政治","经济","道德",
    # 地理通用词
    "地区","分布","特征","位置","范围","面积","人口","资源","经济",
}


def extract_keywords(title: str) -> set:
    """提取 3~6 字的有意义中文关键词片段"""
    # 去掉序号、括号、标点
    title = re.sub(r'[（(][^）)]*[）)]', '', title)
    title = re.sub(r'第[一二三四五六七八九十百\d]+[节章]', '', title)
    title = re.sub(r'专题[一二三四五六七八九十百\d]+', '', title)
    title = re.sub(r'^[\d\s·．\.、]+', '', title)
    title = re.sub(r'[，。？！；：""''《》【】\s]', '', title)
    # 去掉"——"等破折号
    title = re.sub(r'——.*', '', title)
    title = title.strip()

    keywords = set()
    chinese_parts = re.findall(r'[\u4e00-\u9fff]+', title)
    for seg in chinese_parts:
        # 整个片段（如果 3-8 字）
        if 3 <= len(seg) <= 8:
            keywords.add(seg)
        # 子串：3-5 字
        for length in [3, 4, 5]:
            for i in range(len(seg) - length + 1):
                sub = seg[i:i+length]
                keywords.add(sub)

    # 过滤停用词和太短/太长
    keywords = {k for k in keywords if len(k) >= 3 and k not in STOP_WORDS}
    return keywords


def get_all_topics(data):
    topics = []
    for subj in data["subjects"]:
        for grade in subj["grades"]:
            for chapter in grade["chapters"]:
                for topic in chapter["topics"]:
                    topics.append({
                        "subject_id": subj["id"],
                        "subject_name": subj["name"],
                        "grade_id": grade["id"],
                        "grade_title": grade["title"],
                        "chapter_title": chapter["title"],
                        "topic_id": topic["id"],
                        "topic_title": topic["title"],
                        "keywords": extract_keywords(topic["title"]),
                    })
    return topics


def same_subject_longitudinal_links(topics):
    """
    同学科纵向关联：
    - 只匹配 初中→高中（年级跨度 >= 2 级）或 初高中综合→对应年级
    - 需要有 3 字以上关键词重叠
    - 每个知识点最多关联 4 个目标
    """
    links = []
    by_subject = defaultdict(list)
    for t in topics:
        by_subject[t["subject_id"]].append(t)

    for subject_id, subj_topics in by_subject.items():
        # 排序：年级从低到高
        subj_topics.sort(key=lambda t: grade_order(t["grade_id"]))

        # 两两比较，只考虑跨学段（初→高中）
        for i, ta in enumerate(subj_topics):
            ga = grade_order(ta["grade_id"])
            kw_a = ta["keywords"]
            if not kw_a:
                continue
            matched = []
            for tb in subj_topics:
                gb = grade_order(tb["grade_id"])
                if tb["topic_id"] == ta["topic_id"]:
                    continue
                # 只要初→高或高→初（跨学段：5→6 跨了初/高）
                if not ((ga < 6 <= gb) or (gb < 6 <= ga)):
                    continue
                kw_b = tb["keywords"]
                overlap = kw_a & kw_b
                overlap = {k for k in overlap if len(k) >= 3}
                if not overlap:
                    continue
                best_kw = max(overlap, key=len)
                grade_diff = abs(ga - gb)
                matched.append((grade_diff, best_kw, tb))

            # 按年级跨度降序，取最相关的 3 个
            matched.sort(key=lambda x: -x[0])
            for _, best_kw, tb in matched[:3]:
                label = f"{ta['topic_title'][:10]} → {tb['topic_title'][:10]}"
                links.append({
                    "from": ta["topic_id"],
                    "to": tb["topic_id"],
                    "label": label,
                    "type": "same_subject",
                    "keyword": best_kw,
                    "subject": subject_id,
                })

    return links


# ──────────────────────────────────────────────
# 跨学科关联规则：手工精选
# (subject_a, keyword_a, subject_b, keyword_b, label, max_pairs)
# ──────────────────────────────────────────────
CROSS_SUBJECT_RULES = [
    # 物理 & 数学
    ("math", "向量", "physics", "力的合成", "向量(数学) → 力的合成与分解(物理)", 2),
    ("math", "函数", "physics", "速度", "函数图像(数学) → 速度-时间图(物理)", 2),
    ("math", "概率", "biology", "遗传的基本", "概率计算(数学) → 遗传比例(生物)", 2),
    ("math", "导数", "physics", "速度变化", "导数(数学) → 加速度(物理)", 2),
    # 物理 & 化学
    ("physics", "分子热运动", "chemistry", "分子结构", "分子热运动(物理) → 分子结构(化学)", 2),
    ("physics", "核裂变", "chemistry", "放射性", "核裂变核聚变(物理) → 放射性元素(化学)", 2),
    ("physics", "电解", "chemistry", "电化学", "电解原理(物理) → 电化学(化学)", 2),
    # 物理 & 地理
    ("geography", "地质灾害", "physics", "波的形成", "地震波(地理) → 机械波(物理)", 2),
    ("geography", "大气受热", "physics", "热传递", "大气受热(地理) → 热传递(物理)", 1),
    # 化学 & 生物
    ("chemistry", "有机化学", "biology", "光合", "有机物合成(化学) → 光合作用(生物)", 2),
    ("chemistry", "酶", "biology", "酶", "酶(化学本质) → 酶的催化(生物)", 2),
    ("chemistry", "无机盐", "biology", "无机盐", "无机盐(化学) → 细胞中的无机盐(生物)", 2),
    ("chemistry", "氧化还原", "biology", "细胞呼吸", "氧化还原(化学) → 细胞呼吸(生物)", 2),
    # 地理 & 生物
    ("geography", "气候", "biology", "生态系统", "气候类型(地理) → 生态系统分布(生物)", 2),
    ("geography", "土壤", "biology", "土壤", "土壤形成(地理) → 土壤生态(生物)", 1),
    ("geography", "水循环", "biology", "物质循环", "水循环(地理) → 物质循环(生物)", 2),
    # 历史 & 物理/化学
    ("history", "工业革命", "physics", "热机", "工业革命(历史) → 热机蒸汽机(物理)", 2),
    ("history", "核武器", "physics", "核裂变", "原子弹历史(历史) → 核裂变(物理)", 1),
    # 政治 & 地理
    ("politics", "可持续发展", "geography", "可持续", "可持续发展(政治) → 可持续发展(地理)", 2),
    ("politics", "生态文明", "geography", "生态保护", "生态文明(政治) → 生态保护(地理)", 2),
]


def cross_subject_links(topics):
    """跨学科关联：基于预定义规则，精确匹配"""
    # 建立索引：(subject_id, keyword_3字) → [topic]
    index = defaultdict(list)
    for t in topics:
        for kw in t["keywords"]:
            index[(t["subject_id"], kw)].append(t)

    links = []
    seen = set()

    for rule in CROSS_SUBJECT_RULES:
        subj_a, kw_a, subj_b, kw_b, label, max_pairs = rule

        topics_a = index.get((subj_a, kw_a), [])
        topics_b = index.get((subj_b, kw_b), [])

        if not topics_a or not topics_b:
            # 尝试 3 字子串
            for t in topics:
                if t["subject_id"] == subj_a:
                    for k in t["keywords"]:
                        if kw_a in k or k in kw_a:
                            topics_a.append(t)
                            break
                if t["subject_id"] == subj_b:
                    for k in t["keywords"]:
                        if kw_b in k or k in kw_b:
                            topics_b.append(t)
                            break

        if not topics_a or not topics_b:
            continue

        paired = 0
        for ta in topics_a:
            for tb in topics_b:
                if paired >= max_pairs:
                    break
                if ta["topic_id"] == tb["topic_id"]:
                    continue
                pair = (min(ta["topic_id"], tb["topic_id"]), max(ta["topic_id"], tb["topic_id"]))
                if pair in seen:
                    continue
                seen.add(pair)
                links.append({
                    "from": ta["topic_id"],
                    "to": tb["topic_id"],
                    "label": label,
                    "type": "cross_subject",
                    "keyword": f"{kw_a}+{kw_b}",
                    "subject": f"{subj_a}→{subj_b}",
                })
                paired += 1

    return links


# ──────────────────────────────────────────────
# 地理同科纵向特殊规则（更精确）
# ──────────────────────────────────────────────
GEO_LONGITUDINAL = [
    # (from_keyword, to_keyword, label)
    ("海洋和陆地的变迁", "构造地貌", "海陆变迁(初中) → 构造地貌(高中)"),
    ("海洋和陆地的变迁", "地质灾害", "板块运动(初中) → 地质灾害(高中)"),
    ("气温和降水", "大气受热", "气温降水(初中) → 大气受热过程(高中)"),
    ("世界主要气候", "气压带和风带", "气候类型(初中) → 气压带风带(高中)"),
    ("水循环", "陆地水体", "水循环初识(初中) → 陆地水体(高中)"),
    ("地球在运动", "地球的自转", "地球运动(初中) → 地球运动地理意义(高中)"),
    ("认识地图", "地理信息", "地图(初中) → 地理信息技术(高中)"),
    ("人口", "人口分布", "人口(初中) → 人口分布(高中)"),
    ("城镇化", "城镇空间", "城镇化(初中) → 城镇空间结构(高中)"),
    ("农业", "农业区位", "农业(初中) → 农业区位因素(高中)"),
    ("工业", "工业区位", "工业(初中) → 工业区位因素(高中)"),
    ("可持续", "走向人地", "可持续发展(初中) → 人地协调(高中)"),
    ("环境污染", "环境问题", "环境污染(初中) → 环境安全(高中)"),
]

PHYS_LONGITUDINAL = [
    ("光的折射", "全反射", "光的折射(初中) → 全反射(高中)"),
    ("光的反射", "光的干涉", "光的反射(初中) → 光的干涉(高中)"),
    ("声音", "波的形成", "声音(初中) → 机械波(高中)"),
    ("速度", "加速度", "速度(初中) → 加速度(高中)"),
    ("功", "动能定理", "功(初中) → 动能定理(高中)"),
    ("机械能", "机械能守恒", "机械能(初中) → 机械能守恒(高中)"),
    ("电路", "欧姆定律", "电路基础(初中) → 欧姆定律(高中)"),
    ("电功率", "焦耳定律", "电功率(初中) → 焦耳定律(高中)"),
    ("磁场", "电磁感应", "磁场(初中) → 电磁感应(高中)"),
    ("内能", "热力学", "内能(初中) → 热力学(高中)"),
    ("原子核", "核裂变", "原子核(初中) → 核裂变(高中)"),
    ("重力", "万有引力", "重力(初中) → 万有引力(高中)"),
    ("牛顿第一", "牛顿第二", "牛顿第一定律(初中) → 牛顿第二定律(高中)"),
    ("圆周运动", "向心加速度", "圆周运动(初中) → 向心加速度(高中)"),
    ("浮力", "阿基米德", "浮力(初中) → 阿基米德原理纵向"),
]

CHEM_LONGITUDINAL = [
    ("物质的变化", "化学反应", "物质变化(初中) → 化学反应速率(高中)"),
    ("原子", "原子结构", "原子(初中) → 原子结构(高中)"),
    ("酸碱盐", "离子平衡", "酸碱盐(初中) → 离子平衡(高中)"),
    ("氧化还原", "电化学", "氧化还原(初中) → 电化学(高中)"),
    ("有机物", "有机化学", "有机物初识(初中) → 有机化学(高中)"),
    ("溶液", "水溶液", "溶液(初中) → 水溶液离子平衡(高中)"),
    ("化学键", "分子结构", "化学键(高中) → 分子结构(高中)"),
    ("金属", "金属的腐蚀", "金属活动性(初中) → 金属防腐(高中)"),
]

BIO_LONGITUDINAL = [
    ("细胞", "细胞的分子", "细胞基础(初中) → 细胞分子组成(高中)"),
    ("遗传", "遗传的基本", "遗传基础(初中) → 遗传定律(高中)"),
    ("进化", "生物的进化", "进化初识(初中) → 进化理论(高中)"),
    ("生态系统", "种群与群落", "生态系统(初中) → 种群群落(高中)"),
    ("光合作用", "光合", "光合作用(初中) → 光合作用机理(高中)"),
    ("呼吸作用", "细胞呼吸", "呼吸作用(初中) → 细胞呼吸(高中)"),
    ("免疫", "免疫调节", "免疫基础(初中) → 免疫调节(高中)"),
    ("神经", "神经调节", "神经系统(初中) → 神经调节(高中)"),
    ("激素", "体液调节", "激素(初中) → 体液调节(高中)"),
    ("基因", "基因工程", "基因基础(初中) → 基因工程(高中)"),
    ("DNA", "重组DNA", "DNA初识(初中) → 基因工程(高中)"),
    ("蛋白质", "蛋白质工程", "蛋白质(初中) → 蛋白质工程(高中)"),
]

HISTORY_LONGITUDINAL = [
    ("秦汉", "魏晋南北朝", "秦汉(七年级) → 魏晋南北朝(纵向)"),
    ("唐朝", "宋朝", "唐代(初中) → 宋代(纵向)"),
    ("明清", "近代化", "明清(初中) → 近代史(高中)"),
    ("工业革命", "第二次工业革命", "第一次工业革命 → 第二次工业革命"),
    ("新文化运动", "五四运动", "新文化运动 → 五四运动"),
    ("辛亥革命", "新民主主义革命", "辛亥革命 → 新民主主义革命"),
]

POLITICS_LONGITUDINAL = [
    ("权利", "公民的权利", "权利基础 → 公民权利(高中)"),
    ("道德", "社会主义核心", "道德规范 → 社会主义核心价值观"),
    ("法律", "法治", "法律基础 → 法治建设(高中)"),
    ("经济", "市场经济", "经济基础 → 社会主义市场经济"),
]

MATH_LONGITUDINAL = [
    ("有理数", "实数", "有理数(七年级) → 实数(高中)"),
    ("一次方程", "一元二次方程", "一次方程 → 一元二次方程"),
    ("函数", "二次函数", "函数初识 → 二次函数"),
    ("三角形", "三角函数", "三角形(初中) → 三角函数(高中)"),
    ("圆", "圆的方程", "圆(初中) → 圆的方程(高中)"),
    ("统计", "概率", "统计初步 → 概率"),
    ("向量", "空间向量", "平面向量 → 空间向量"),
    ("数列", "等差数列", "数列初识 → 等差等比数列"),
]

ENGLISH_LONGITUDINAL = [
    ("重点梳理", "语法与语言运用", "语法重点(初中) → 语法运用(高中)"),
    ("综合练习", "读写与表达", "综合练习(初中) → 读写表达(高中)"),
    ("重点梳理", "词汇与课文", "词汇语法(初中) → 词汇精读(高中)"),
    ("语法填空", "语法与语言运用", "语法填空(高考) → 高中语法单元"),
    ("完形填空", "词汇与课文精读", "完形填空(高考) → 词汇理解"),
    ("阅读理解", "词汇与课文精读", "阅读理解(高考) → 课文精读"),
    ("动词时态", "语法与语言运用", "动词时态(高考专题) → 高中语法"),
    ("非谓语动词", "语法与语言运用", "非谓语(高考专题) → 高中语法"),
    ("从句", "语法与语言运用", "从句(高考专题) → 高中语法"),
    ("书面表达", "读写与表达", "书面表达(高考专题) → 读写训练"),
]


def subject_specific_longitudinal(topics):
    """基于精确手工规则的纵向关联"""
    # 建立 (subject_id, 标题关键词) → topic 的索引
    title_index = defaultdict(list)
    for t in topics:
        title_index[(t["subject_id"], t["topic_title"])].append(t)

    # 更宽松：部分匹配
    def find_topics_by_keyword(subject_id, keyword):
        results = []
        for t in topics:
            if t["subject_id"] != subject_id:
                continue
            if keyword in t["topic_title"]:
                results.append(t)
        return results

    links = []
    seen = set()

    rules_map = [
        ("geography", GEO_LONGITUDINAL),
        ("physics", PHYS_LONGITUDINAL),
        ("chemistry", CHEM_LONGITUDINAL),
        ("biology", BIO_LONGITUDINAL),
        ("history", HISTORY_LONGITUDINAL),
        ("politics", POLITICS_LONGITUDINAL),
        ("math", MATH_LONGITUDINAL),
        ("english", ENGLISH_LONGITUDINAL),
    ]

    for subject_id, rules in rules_map:
        for rule in rules:
            kw_from, kw_to, label = rule
            topics_from = find_topics_by_keyword(subject_id, kw_from)
            topics_to = find_topics_by_keyword(subject_id, kw_to)

            if not topics_from or not topics_to:
                continue

            # 确保不同年级、有年级跨度
            paired = 0
            for ta in topics_from[:6]:
                for tb in topics_to[:6]:
                    if ta["topic_id"] == tb["topic_id"]:
                        continue
                    if ta["grade_id"] == tb["grade_id"]:
                        continue
                    # 同科纵向：低年级 → 高年级
                    if grade_order(ta["grade_id"]) >= grade_order(tb["grade_id"]):
                        continue
                    pair = (ta["topic_id"], tb["topic_id"])
                    if pair in seen:
                        continue
                    seen.add(pair)
                    links.append({
                        "from": ta["topic_id"],
                        "to": tb["topic_id"],
                        "label": label,
                        "type": "same_subject",
                        "keyword": kw_from,
                        "subject": subject_id,
                    })
                    paired += 1
                    if paired >= 2:
                        break
                if paired >= 2:
                    break

    return links


def make_bidirectional(links):
    """把所有 from→to 变成双向"""
    result = list(links)
    seen = set()
    for lk in links:
        seen.add((lk["from"], lk["to"]))

    for lk in links:
        reverse = (lk["to"], lk["from"])
        if reverse not in seen:
            seen.add(reverse)
            result.append({
                **lk,
                "from": lk["to"],
                "to": lk["from"],
            })

    return result


def deduplicate(links):
    seen = set()
    result = []
    for lk in links:
        pair = (lk["from"], lk["to"])
        if pair not in seen:
            seen.add(pair)
            result.append(lk)
    return result


def main():
    data = load_subjects()
    topics = get_all_topics(data)
    topics_map = {t["topic_id"]: t for t in topics}

    print(f"共 {len(topics)} 个知识点")

    # 1. 同科纵向（基于标题关键词）
    links1 = same_subject_longitudinal_links(topics)
    print(f"同科纵向（关键词匹配）：{len(links1)} 条")

    # 2. 精确手工纵向规则
    links2 = subject_specific_longitudinal(topics)
    print(f"精确手工纵向规则：{len(links2)} 条")

    # 3. 跨学科
    links3 = cross_subject_links(topics)
    print(f"跨学科关联：{len(links3)} 条")

    all_links = deduplicate(links1 + links2 + links3)
    print(f"单向去重后：{len(all_links)} 条")

    # 双向
    all_links = make_bidirectional(all_links)
    all_links = deduplicate(all_links)
    print(f"双向后：{len(all_links)} 条")

    # 构建输出：topicId → [related topics]
    output = defaultdict(list)
    seen_pairs = set()

    for lk in all_links:
        from_id = lk["from"]
        to_id = lk["to"]
        pair = (from_id, to_id)
        if pair in seen_pairs:
            continue
        seen_pairs.add(pair)

        to_topic = topics_map.get(to_id)
        if not to_topic:
            continue

        output[from_id].append({
            "toId": to_id,
            "toTitle": to_topic["topic_title"],
            "gradeTitle": to_topic["grade_title"],
            "subjectName": to_topic["subject_name"],
            "subjectId": to_topic["subject_id"],
            "label": lk["label"],
            "type": lk["type"],  # "same_subject" | "cross_subject"
        })

    # 每个知识点最多 6 条关联（优先同科，再跨科）
    final_output = {}
    for topic_id, related in output.items():
        same = [r for r in related if r["type"] == "same_subject"]
        cross = [r for r in related if r["type"] == "cross_subject"]
        combined = same[:4] + cross[:2]
        if combined:
            final_output[topic_id] = combined

    # 统计
    print(f"\n涉及知识点：{len(final_output)}")
    print(f"关联总条数：{sum(len(v) for v in final_output.values())}")

    subject_counts = defaultdict(int)
    for links in final_output.values():
        for lk in links:
            subject_counts[lk["subjectId"]] += 1
    print("\n各学科（目标侧）关联数：")
    for subj, cnt in sorted(subject_counts.items()):
        print(f"  {subj}: {cnt}")

    # 保存
    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(final_output, f, ensure_ascii=False, indent=2)
    print(f"\n已写入：{OUTPUT}")

    # 示例
    print("\n示例关联（前 8 个知识点）：")
    count = 0
    for topic_id, links in final_output.items():
        t = topics_map.get(topic_id)
        if not t:
            continue
        print(f"  [{t['subject_id']} {t['grade_id']}] {t['topic_title'][:20]}")
        for lk in links[:3]:
            print(f"    [{lk['type']}] → [{lk['subjectId']} {lk['gradeTitle']}] {lk['toTitle'][:20]}")
        count += 1
        if count >= 8:
            break


if __name__ == "__main__":
    main()
