#!/usr/bin/env python3
"""
修复全站 note.md 中的断链（wikilink 目标与 subjects.json 中 topic.title 不匹配）。

映射规则基于对 subjects.json 中实际 topic.title 的核对。
"""
import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONTENT_DIR = os.path.join(ROOT, "content")
SUBJECTS_JSON = os.path.join(CONTENT_DIR, "subjects.json")

# 断链目标 -> 正确 topic.title（已逐一核对存在于 subjects.json）
LINK_FIX = {
    # 青春期
    "青春期": "第二节 青春期",
    # 生物
    "生物圈": "第三节 生物圈",
    "光合作用": "第二节 光合作用",
    "呼吸作用": "第三节 呼吸作用",
    "生态系统的结构和功能": "第二节 生态系统的结构和功能",
    "生物与环境的相互作用": "第一节 生物与环境的相互作用",
    "植株的生长": "第二节 植株的生长",
    "食物中的营养物质": "第一节 食物中的营养物质",
    "流动的组织——血液": "第一节 流动的组织——血液",
    "维护生态安全": "第二节 维护生态安全",
    "种子的萌发": "第一节 种子的萌发",
    "发生在肺内的气体交换": "第二节 发生在肺内的气体交换",
    "输送血液的泵——心脏": "第三节 输送血液的泵——心脏",
    "神经调节": "第二节 神经调节",
    "神经系统支配下的运动": "第三节 神经系统支配下的运动",
    "激素调节": "第四节 激素调节",
    "人体对外界环境的感知": "第一节 人体对外界环境的感知",
    "免疫与免疫规划": "第二节 免疫与免疫规划",
    "用药与急救": "第三节 用药与急救",
    "选择健康的生活方式": "第四节与综合实践：选择健康的生活方式",
    "传染病及其预防": "第一节 传染病及其预防",
    "开花和结果": "第三节 开花和结果",
    "水的利用与散失": "第一节 水的利用与散失",
    "消化和吸收": "第二节 消化和吸收",
    "合理营养与食品安全": "第三节 合理营养与食品安全",
    "呼吸道对空气的处理": "第一节 呼吸道对空气的处理",
    "血流的管道——血管": "第二节 血流的管道——血管",
    "分析人类活动对生态环境的影响": "第一节 分析人类活动对生态环境的影响",
    "植物在自然界中的作用": "第四节 植物在自然界中的作用",
    "人体发育第一节": "第一节 人的生殖",
    "呼吸重点梳理": "人体的呼吸·重点梳理",
    "废物排出重点梳理": "人体内废物的排出·重点梳理",
    "废物排出综合练习": "人体内废物的排出·综合练习",
    # 英语 Unit 系列（去掉 Unit N 前缀，映射到实际 topic.title）
    "Unit 1 · 读写与表达": "读写与表达（Developing ideas）",
    "Unit 2 · 读写与表达": "读写与表达（Developing ideas）",
    "Unit 3 · 读写与表达": "读写与表达（Developing ideas）",
    "Unit 4 · 读写与表达": "读写与表达（Developing ideas）",
    "Unit 5 · 读写与表达": "读写与表达（Developing ideas）",
    "Unit 6 · 读写与表达": "读写与表达（Developing ideas）",
    "Unit 1 · 词汇与课文精读": "词汇与课文精读（Understanding ideas）",
    "Unit 2 · 词汇与课文精读": "词汇与课文精读（Understanding ideas）",
    "Unit 3 · 词汇与课文精读": "词汇与课文精读（Understanding ideas）",
    "Unit 4 · 词汇与课文精读": "词汇与课文精读（Understanding ideas）",
    "Unit 5 · 词汇与课文精读": "词汇与课文精读（Understanding ideas）",
    "Unit 6 · 词汇与课文精读": "词汇与课文精读（Understanding ideas）",
    "Unit 1 · 语法与语言运用": "语法与语言运用（Using language）",
    "Unit 2 · 语法与语言运用": "语法与语言运用（Using language）",
    "Unit 3 · 语法与语言运用": "语法与语言运用（Using language）",
    "Unit 4 · 语法与语言运用": "语法与语言运用（Using language）",
    "Unit 5 · 语法与语言运用": "语法与语言运用（Using language）",
    "Unit 6 · 语法与语言运用": "语法与语言运用（Using language）",
    "Unit 1 读写与表达（Developing ideas）": "读写与表达（Developing ideas）",
    "Unit 2 读写与表达（Developing ideas）": "读写与表达（Developing ideas）",
    "Unit 3 读写与表达（Developing ideas）": "读写与表达（Developing ideas）",
    "Unit 4 读写与表达（Developing ideas）": "读写与表达（Developing ideas）",
    "Unit 5 读写与表达（Developing ideas）": "读写与表达（Developing ideas）",
    "Unit 6 读写与表达（Developing ideas）": "读写与表达（Developing ideas）",
    "Unit 1 词汇与课文精读（Understanding ideas）": "词汇与课文精读（Understanding ideas）",
    "Unit 2 词汇与课文精读（Understanding ideas）": "词汇与课文精读（Understanding ideas）",
    "Unit 3 词汇与课文精读（Understanding ideas）": "词汇与课文精读（Understanding ideas）",
    "Unit 4 词汇与课文精读（Understanding ideas）": "词汇与课文精读（Understanding ideas）",
    "Unit 5 词汇与课文精读（Understanding ideas）": "词汇与课文精读（Understanding ideas）",
    "Unit 6 词汇与课文精读（Understanding ideas）": "词汇与课文精读（Understanding ideas）",
    "Unit 1 语法与语言运用（Using language）": "语法与语言运用（Using language）",
    "Unit 2 语法与语言运用（Using language）": "语法与语言运用（Using language）",
    "Unit 3 语法与语言运用（Using language）": "语法与语言运用（Using language）",
    "Unit 4 语法与语言运用（Using language）": "语法与语言运用（Using language）",
    "Unit 5 语法与语言运用（Using language）": "语法与语言运用（Using language）",
    "Unit 6 语法与语言运用（Using language）": "语法与语言运用（Using language）",
    # 政治（去掉 X.Y 前缀）
    "4.1 中国特色社会主义进入新时代": "中国特色社会主义进入新时代",
    "3.2 中国特色社会主义的创立、发展和完善": "中国特色社会主义的创立、发展和完善",
    "2.1 新民主主义革命的胜利": "新民主主义革命的胜利",
    "3.1 伟大的改革开放": "伟大的改革开放",
    "2.2 社会主义制度在中国的确立": "社会主义制度在中国的确立",
    "4.2 实现中华民族伟大复兴的中国梦": "实现中华民族伟大复兴的中国梦",
    "1.2 科学社会主义的理论与实践": "科学社会主义的理论与实践",
    "1.1 原始社会的解体和阶级社会的演进": "原始社会的解体和阶级社会的演进",
    # 语文（斜杠加空格 / 章节号修正 / 引号）
    "9 念奴娇·赤壁怀古/永遇乐·京口北固亭怀古/声声慢": "9 念奴娇·赤壁怀古 / 永遇乐·京口北固亭怀古 / 声声慢",
    "3 念奴娇·赤壁怀古/永遇乐·京口北固亭怀古/声声慢": "9 念奴娇·赤壁怀古 / 永遇乐·京口北固亭怀古 / 声声慢",
    "16 赤壁赋/登泰山记": "16 赤壁赋 / 登泰山记",
    "8 梦游天姥吟留别/登高/琵琶行并序": "8 梦游天姥吟留别 / 登高 / 琵琶行并序",
    "2 梦游天姥吟留别/登高/琵琶行并序": "8 梦游天姥吟留别 / 登高 / 琵琶行并序",
    "10 劝学/师说": "10 劝学 / 师说",
    "6 芣苢/插秧歌": "6 芣苢 / 插秧歌",
    "7 短歌行/归园田居（其一）": "7 短歌行 / 归园田居（其一）",
    "2 立在地球边上放号/红烛/峨日朵雪峰之侧/致云雀": "2 立在地球边上放号 / 红烛 / 峨日朵雪峰之侧 / 致云雀",
    "14 故都的秋/荷塘月色": "14 故都的秋 / 荷塘月色",
    "静女/涉江采芙蓉/虞美人/鹊桥仙": "静女 / 涉江采芙蓉 / 虞美人 / 鹊桥仙",
    "4 喜看稻菽千重浪/心有一团火/探界者锺扬": "4 喜看稻菽千重浪 / 心有一团火 / 探界者钟扬",
    "9 说“木叶”": "9 说木叶",
    "13 短文两篇": "13 短文两篇（谈读书 不求甚解）",
    # 历史
    "第19课 辛亥革命": "第18课 辛亥革命",
    # 历史 12b 专题系列（裸引用展开为完整标题）
    "专题一": "专题一 中国古代政治制度",
    "专题十一": "专题十一 世界现代史（冷战与多极化）",
    "专题十二": "专题十二 中外关联与阶段特征",
    "专题十四": "专题十四 历史小论文（开放性试题）",
    "专题十七 国家制度与社会治理": "专题十七 国家制度与社会治理（选必1整合）",
    # 政治（引号）
    '坚持"两个毫不动摇"': "坚持两个毫不动摇",
    # 地理
    "专题十六 文化交流与传播": "专题十六 文化交流与传播（选必3整合）",
    "专题十五 经济与社会生活": "专题十五 经济与社会生活（选必2整合）",
    # 数学
    "5.6 函数 y=Asin(ωx+φ)": "5.6 函数 y=Asin(wx+phi)",
    "6.4 平面向量的应用（含余弦定理、正弦定理）": "6.4 平面向量的应用",
}

WIKILINK_RE = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]")


def main():
    files = sorted(glob.glob(os.path.join(CONTENT_DIR, "**", "note.md"), recursive=True))
    counter = {"fixed": 0}
    fixed_files = 0
    for f in files:
        text = open(f, encoding="utf-8").read()
        orig = text

        def repl(m):
            target = m.group(1).strip()
            alias = m.group(2)
            if target in LINK_FIX:
                counter["fixed"] += 1
                new_target = LINK_FIX[target]
                if alias:
                    return f"[[{new_target}|{alias}]]"
                return f"[[{new_target}]]"
            return m.group(0)

        new_text = WIKILINK_RE.sub(repl, text)
        if new_text != orig:
            fixed_files += 1
            with open(f, "w", encoding="utf-8") as fh:
                fh.write(new_text)

    print(f"修复断链：{counter['fixed']} 处，涉及 {fixed_files} 个文件")


if __name__ == "__main__":
    main()
