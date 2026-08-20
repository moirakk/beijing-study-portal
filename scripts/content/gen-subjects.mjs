/* eslint-disable */
// 生成 content/subjects.json：按 docs/textbook-research.md（东城区 2024/2025 新版教材）校准初一全科结构。
// 运行：node scripts/content/gen-subjects.mjs
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')

// ---------- 辅助 ----------
const t = (id, title, o = {}) => {
  const topic = {
    id,
    title,
    difficulty: o.d ?? 2,
    importance: o.imp ?? '中考高频',
    tags: o.tags ?? ['#基础'],
    prerequisites: o.pre ?? [],
    related: o.rel ?? [],
    materials: o.mat ?? [],
  }
  if (o.cp) topic.contentPath = o.cp
  return topic
}
const ch = (id, title, topics) => ({ id, title, topics })
const g = (id, title, textbook, chapters = []) => ({ id, title, textbook, chapters })

const TITLES = {
  '7a': '初一上', '7b': '初一下', '8a': '初二上', '8b': '初二下',
  '9a': '初三上', '9b': '初三下', '10a': '高一上', '10b': '高一下',
  '11a': '高二上', '11b': '高二下', '12a': '高三上', '12b': '高三下',
}
const empties = (ids, textbook) => ids.map((id) => g(id, TITLES[id], textbook))

// ---------- 数学（人教版 2024 新版：七上 6 章 / 七下 第七至十二章） ----------
const math7a = [
  ch('ch1-rational-numbers', '第一章 有理数', [
    t('math-7a-1-1', '正数和负数', { d: 1, imp: '中考必考' }),
    t('math-7a-1-2', '有理数的概念与分类', { d: 1, imp: '中考必考', pre: ['math-7a-1-1'] }),
    t('math-7a-1-3', '数轴、相反数与绝对值', {
      d: 2, imp: '中考必考', tags: ['#基础', '#易错'],
      pre: ['math-7a-1-2'], rel: ['math-7b-8-3'],
      mat: ['note', 'formula', 'example'],
      cp: 'math/grade7-1/chapter1/rational-numbers',
    }),
    t('math-7a-1-4', '有理数的大小比较', { d: 2, imp: '中考必考', tags: ['#基础', '#易错'], pre: ['math-7a-1-3'] }),
  ]),
  ch('ch2-rational-operations', '第二章 有理数的运算', [
    t('math-7a-2-1', '有理数的加法与减法', {
      d: 2, imp: '中考必考', tags: ['#基础', '#易错', '#需大量练习'],
      pre: ['math-7a-1-3'],
      mat: ['note', 'formula', 'example'],
      cp: 'math/grade7-1/chapter2/rational-add-subtract',
    }),
    t('math-7a-2-2', '有理数的乘法与除法', {
      d: 2, imp: '中考必考', tags: ['#基础', '#需大量练习'],
      pre: ['math-7a-2-1'],
      mat: ['note', 'formula', 'example'],
      cp: 'math/grade7-1/chapter2/rational-multiply-divide',
    }),
    t('math-7a-2-3', '有理数的乘方', { d: 3, tags: ['#易错'], pre: ['math-7a-2-2'] }),
    t('math-7a-2-4', '科学记数法与近似数', { d: 2, pre: ['math-7a-2-3'] }),
  ]),
  ch('ch3-algebraic-expressions', '第三章 代数式', [
    t('math-7a-3-1', '代数式的概念', { d: 2, imp: '中考必考', pre: ['math-7a-2-2'] }),
    t('math-7a-3-2', '列代数式表示数量关系', { d: 2, imp: '中考必考', tags: ['#基础', '#需大量练习'], pre: ['math-7a-3-1'] }),
    t('math-7a-3-3', '代数式的值', { d: 2, imp: '中考必考', pre: ['math-7a-3-2'] }),
  ]),
  ch('ch4-integral-add-sub', '第四章 整式的加减', [
    t('math-7a-4-1', '单项式与多项式（整式）', { d: 2, imp: '中考必考', pre: ['math-7a-3-1'] }),
    t('math-7a-4-2', '合并同类项', { d: 2, imp: '中考必考', tags: ['#基础', '#易错', '#需大量练习'], pre: ['math-7a-4-1'] }),
    t('math-7a-4-3', '去括号', { d: 2, imp: '中考必考', tags: ['#易错', '#需大量练习'], pre: ['math-7a-4-2'] }),
    t('math-7a-4-4', '整式的加减运算', { d: 2, imp: '中考必考', tags: ['#基础', '#需大量练习'], pre: ['math-7a-4-3'], rel: ['math-7a-5-3'] }),
  ]),
  ch('ch5-linear-equations', '第五章 一元一次方程', [
    t('math-7a-5-1', '方程的概念（从算式到方程）', { d: 2, imp: '中考必考', pre: ['math-7a-3-3'] }),
    t('math-7a-5-2', '等式的性质', { d: 2, imp: '中考必考', tags: ['#基础', '#需背诵'], pre: ['math-7a-5-1'] }),
    t('math-7a-5-3', '解一元一次方程（一）：合并同类项与移项', { d: 2, imp: '中考必考', tags: ['#基础', '#需大量练习'], pre: ['math-7a-5-2', 'math-7a-4-2'] }),
    t('math-7a-5-4', '解一元一次方程（二）：去括号与去分母', { d: 3, imp: '中考必考', tags: ['#易错', '#需大量练习'], pre: ['math-7a-5-3'] }),
    t('math-7a-5-5', '实际问题与一元一次方程', { d: 3, tags: ['#提高', '#需大量练习'], pre: ['math-7a-5-4'], rel: ['math-7b-10-4'] }),
  ]),
  ch('ch6-geometry-basics', '第六章 几何图形初步', [
    t('math-7a-6-1', '立体图形与平面图形', { d: 1, imp: '了解即可' }),
    t('math-7a-6-2', '点、线、面、体', { d: 1, imp: '了解即可', pre: ['math-7a-6-1'] }),
    t('math-7a-6-3', '直线、射线、线段', { d: 2, tags: ['#基础', '#需背诵'], pre: ['math-7a-6-2'] }),
    t('math-7a-6-4', '角的概念与度量', { d: 2, tags: ['#基础', '#需背诵'], pre: ['math-7a-6-3'] }),
    t('math-7a-6-5', '角的比较与运算', { d: 3, tags: ['#易错', '#需大量练习'], pre: ['math-7a-6-4'] }),
    t('math-7a-6-6', '余角和补角', { d: 3, tags: ['#易错', '#需背诵'], pre: ['math-7a-6-5'], rel: ['math-7b-7-1'] }),
  ]),
]

const math7b = [
  ch('ch7-intersecting-parallel-lines', '第七章 相交线与平行线', [
    t('math-7b-7-1', '相交线（对顶角、邻补角）', { d: 2, tags: ['#基础', '#需背诵'], pre: ['math-7a-6-6'] }),
    t('math-7b-7-2', '垂线', { d: 2, tags: ['#基础', '#需背诵'], pre: ['math-7b-7-1'] }),
    t('math-7b-7-3', '同位角、内错角、同旁内角', { d: 3, tags: ['#易错'], pre: ['math-7b-7-2'] }),
    t('math-7b-7-4', '平行线的概念与判定', { d: 3, imp: '中考必考', tags: ['#需背诵', '#易错'], pre: ['math-7b-7-3'] }),
    t('math-7b-7-5', '平行线的性质', { d: 3, imp: '中考必考', tags: ['#需背诵', '#易错'], pre: ['math-7b-7-4'] }),
    t('math-7b-7-6', '定义、命题、定理', { d: 2, pre: ['math-7b-7-5'] }),
    t('math-7b-7-7', '平移', { d: 2, pre: ['math-7b-7-5'] }),
  ]),
  ch('ch8-real-numbers', '第八章 实数', [
    t('math-7b-8-1', '平方根', { d: 3, imp: '中考必考', tags: ['#易错', '#需大量练习'], pre: ['math-7a-2-3'] }),
    t('math-7b-8-2', '立方根', { d: 2, pre: ['math-7b-8-1'] }),
    t('math-7b-8-3', '实数及其简单运算', { d: 3, imp: '中考必考', tags: ['#易错'], pre: ['math-7b-8-2'], rel: ['math-7a-1-3'] }),
  ]),
  ch('ch9-coordinate-system', '第九章 平面直角坐标系', [
    t('math-7b-9-1', '用坐标描述平面内点的位置', { d: 2, imp: '中考必考', tags: ['#基础', '#需背诵'], pre: ['math-7a-1-3'] }),
    t('math-7b-9-2', '用坐标表示地理位置', { d: 2, pre: ['math-7b-9-1'] }),
    t('math-7b-9-3', '用坐标表示平移', { d: 3, tags: ['#提高'], pre: ['math-7b-9-1'], rel: ['math-7b-7-7'] }),
  ]),
  ch('ch10-simultaneous-linear-equations', '第十章 二元一次方程组', [
    t('math-7b-10-1', '二元一次方程组的概念', { d: 2, imp: '中考必考', pre: ['math-7a-5-4'] }),
    t('math-7b-10-2', '代入消元法', { d: 3, imp: '中考必考', tags: ['#需大量练习'], pre: ['math-7b-10-1'] }),
    t('math-7b-10-3', '加减消元法', { d: 3, imp: '中考必考', tags: ['#需大量练习', '#易错'], pre: ['math-7b-10-2'] }),
    t('math-7b-10-4', '实际问题与二元一次方程组', { d: 4, tags: ['#提高', '#需大量练习'], pre: ['math-7b-10-3'], rel: ['math-7a-5-5'] }),
    t('math-7b-10-5', '三元一次方程组的解法（选学）', { d: 4, imp: '了解即可', tags: ['#拔高'], pre: ['math-7b-10-3'] }),
  ]),
  ch('ch11-inequalities', '第十一章 不等式与不等式组', [
    t('math-7b-11-1', '不等式及其解集', { d: 2, imp: '中考必考', tags: ['#基础', '#易错'], pre: ['math-7a-5-1'] }),
    t('math-7b-11-2', '不等式的性质', { d: 2, imp: '中考必考', tags: ['#基础', '#易错', '#需背诵'], pre: ['math-7b-11-1'] }),
    t('math-7b-11-3', '一元一次不等式', { d: 3, imp: '中考必考', tags: ['#需大量练习', '#易错'], pre: ['math-7b-11-2', 'math-7a-5-4'] }),
    t('math-7b-11-4', '一元一次不等式组', { d: 3, imp: '中考必考', tags: ['#需大量练习'], pre: ['math-7b-11-3'] }),
  ]),
  ch('ch12-data-statistics', '第十二章 数据的收集、整理与描述', [
    t('math-7b-12-1', '统计调查（全面调查与抽样调查）', { d: 2, tags: ['#基础', '#需背诵'] }),
    t('math-7b-12-2', '扇形图、条形图与折线图', { d: 2, pre: ['math-7b-12-1'] }),
    t('math-7b-12-3', '直方图', { d: 2, pre: ['math-7b-12-2'] }),
    t('math-7b-12-4', '趋势图', { d: 2, pre: ['math-7b-12-2'] }),
  ]),
]

// ---------- 语文（统编版 2024 秋 / 2025 春） ----------
const poem = { imp: '中考必考', tags: ['#需背诵'] }
const wenyan = { imp: '中考必考', tags: ['#需背诵', '#易错'], d: 3 }
const writing = { imp: '中考高频', tags: ['#需大量练习'] }

const chinese7a = [
  ch('u1', '第一单元（四季美景）', [
    t('chinese-7a-1-1', '春（朱自清）'),
    t('chinese-7a-1-2', '济南的冬天（老舍）'),
    t('chinese-7a-1-3', '雨的四季（刘湛秋）', { imp: '了解即可' }),
    t('chinese-7a-1-4', '古代诗歌四首（观沧海／次北固山下／闻王昌龄左迁龙标遥有此寄／天净沙·秋思）', poem),
    t('chinese-7a-1-5', '写作：热爱生活，学会观察', writing),
  ]),
  ch('u2', '第二单元（亲情之爱）', [
    t('chinese-7a-2-1', '秋天的怀念（史铁生）'),
    t('chinese-7a-2-2', '散步（莫怀戚）'),
    t('chinese-7a-2-3', '散文诗二首（金色花／荷叶·母亲）', { imp: '了解即可' }),
    t('chinese-7a-2-4', '《世说新语》二则（咏雪／陈太丘与友期行）', wenyan),
    t('chinese-7a-2-5', '写作：学会记事｜综合性学习：有朋自远方来', writing),
  ]),
  ch('u3', '第三单元（学习生活）', [
    t('chinese-7a-3-1', '从百草园到三味书屋（鲁迅）'),
    t('chinese-7a-3-2', '往事依依（于漪）【新增】'),
    t('chinese-7a-3-3', '再塑生命的人（海伦·凯勒）', { imp: '了解即可' }),
    t('chinese-7a-3-4', '《论语》十二章', wenyan),
    t('chinese-7a-3-5', '写作：如何突出中心｜整本书阅读：《朝花夕拾》', writing),
    t('chinese-7a-3-6', '课外古诗词诵读（峨眉山月歌／江南逢李龟年／行军九日思长安故园／夜上受降城闻笛）', poem),
  ]),
  ch('u4', '第四单元（人生之舟）', [
    t('chinese-7a-4-1', '纪念白求恩（毛泽东）'),
    t('chinese-7a-4-2', '回忆我的母亲（朱德）【新增】'),
    t('chinese-7a-4-3', '梅岭三章（陈毅）【新增】', poem),
    t('chinese-7a-4-4', '诫子书（诸葛亮）', wenyan),
    t('chinese-7a-4-5', '写作：思路要清晰｜综合性学习：少年正是读书时', writing),
  ]),
  ch('u5', '第五单元（人与动物·活动探究）', [
    t('chinese-7a-5-1', '猫（郑振铎）'),
    t('chinese-7a-5-2', '我的白鸽（陈忠实）【新增】'),
    t('chinese-7a-5-3', '大雁归来（利奥波德）'),
    t('chinese-7a-5-4', '狼（蒲松龄）', wenyan),
  ]),
  ch('u6', '第六单元（想象之翼）', [
    t('chinese-7a-6-1', '小圣施威降大圣（吴承恩）【新增】'),
    t('chinese-7a-6-2', '皇帝的新装（安徒生）'),
    t('chinese-7a-6-3', '女娲造人（袁珂）', { imp: '了解即可' }),
    t('chinese-7a-6-4', '寓言四则（赫耳墨斯和雕像者／蚊子和狮子／穿井得一人／杞人忧天）', { d: 3, tags: ['#需背诵'] }),
    t('chinese-7a-6-5', '写作：发挥联想和想象｜整本书阅读：《西游记》', writing),
    t('chinese-7a-6-6', '课外古诗词诵读（秋词（其一）／夜雨寄北／十一月四日风雨大作（其二）／潼关）', poem),
  ]),
]

const chinese7b = [
  ch('u1', '第一单元（杰出人物）', [
    t('chinese-7b-1-1', '邓稼先（杨振宁）'),
    t('chinese-7b-1-2', '说和做——记闻一多先生言行片段（臧克家）'),
    t('chinese-7b-1-3', '列夫·托尔斯泰（茨威格）【新增】', { imp: '了解即可' }),
    t('chinese-7b-1-4', '孙权劝学（《资治通鉴》）', wenyan),
    t('chinese-7b-1-5', '写作：写出人物特点', writing),
  ]),
  ch('u2', '第二单元（家国情怀）', [
    t('chinese-7b-2-1', '黄河颂（光未然）'),
    t('chinese-7b-2-2', '老山界（陆定一）'),
    t('chinese-7b-2-3', '谁是最可爱的人（魏巍）'),
    t('chinese-7b-2-4', '土地的誓言（端木蕻良）', { imp: '了解即可' }),
    t('chinese-7b-2-5', '木兰诗', { ...wenyan }),
    t('chinese-7b-2-6', '写作：学习抒情｜专题学习活动：我的语文生活', writing),
  ]),
  ch('u3', '第三单元（凡人小事）', [
    t('chinese-7b-3-1', '阿长与《山海经》（鲁迅）'),
    t('chinese-7b-3-2', '山地回忆（孙犁）【新增】'),
    t('chinese-7b-3-3', '台阶（李森祥）', { imp: '了解即可' }),
    t('chinese-7b-3-4', '卖油翁（欧阳修）', wenyan),
    t('chinese-7b-3-5', '写作：抓住细节｜整本书阅读：《骆驼祥子》', writing),
    t('chinese-7b-3-6', '课外古诗词诵读（竹里馆／春夜洛城闻笛／逢入京使／晚春）', poem),
  ]),
  ch('u4', '第四单元（中华美德）', [
    t('chinese-7b-4-1', '驿路梨花（彭荆风）'),
    t('chinese-7b-4-2', '青春之光（祝红蕾）【新增】'),
    t('chinese-7b-4-3', '有为有不为（季羡林）【新增】', { imp: '了解即可' }),
    t('chinese-7b-4-4', '短文两篇（陋室铭／爱莲说）', wenyan),
    t('chinese-7b-4-5', '写作：怎样选材｜专题学习活动：孝亲敬老，传承家风', writing),
  ]),
  ch('u5', '第五单元（哲理之思）', [
    t('chinese-7b-5-1', '井冈翠竹（袁鹰）【新增】'),
    t('chinese-7b-5-2', '紫藤萝瀑布（宗璞）'),
    t('chinese-7b-5-3', '外国诗二首（假如生活欺骗了你／未选择的路）', { imp: '了解即可' }),
    t('chinese-7b-5-4', '古代诗歌五首（登幽州台歌／望岳／登飞来峰／游山西村／己亥杂诗（其五））', poem),
    t('chinese-7b-5-5', '写作：语言要简明｜整本书阅读：《钢铁是怎样炼成的》', writing),
  ]),
  ch('u6', '第六单元（科学探索·活动探究）', [
    t('chinese-7b-6-1', '太空一日（杨利伟）'),
    t('chinese-7b-6-2', '"蛟龙"探海（许晨）【新增】'),
    t('chinese-7b-6-3', '带上她的眼睛（刘慈欣）'),
    t('chinese-7b-6-4', '活板（沈括）', wenyan),
    t('chinese-7b-6-5', '课外古诗词诵读（泊秦淮／贾生／过松源晨炊漆公店（其五）／约客）', poem),
  ]),
]

// ---------- 英语（外研版 2024 新版：Starter + Unit 结构） ----------
const engUnit = (gid, n, en, cn) =>
  ch(`u${n}`, `Unit ${n}: ${en}（${cn}）`, [
    t(`english-${gid}-${n}-1`, `Unit ${n} Starting out（${en} · 导入热身）`, { d: 1, imp: '了解即可' }),
    t(`english-${gid}-${n}-2`, `Unit ${n} Understanding ideas（${en} · 主课文理解）`, { imp: '中考必考', tags: ['#基础', '#需背诵'] }),
    t(`english-${gid}-${n}-3`, `Unit ${n} Developing ideas（${en} · 拓展读写与语言运用）`, { tags: ['#基础', '#需大量练习'] }),
    t(`english-${gid}-${n}-4`, `Unit ${n} Presenting ideas（${en} · 综合展示）`, { imp: '了解即可', tags: ['#提高'] }),
    t(`english-${gid}-${n}-5`, `Unit ${n} Reflection（${en} · 单元反思）`, { d: 1, imp: '了解即可' }),
  ])

const english7a = [
  ch('starter', 'Starter: Welcome to junior high!（欢迎来到初中）', [
    t('english-7a-0-1', 'Starter: Welcome to junior high!（初中英语起步）', { d: 1, imp: '了解即可' }),
  ]),
  engUnit('7a', 1, 'A new start', '新的开始'),
  engUnit('7a', 2, 'More than fun', '不只是乐趣'),
  engUnit('7a', 3, 'Family ties', '家庭纽带'),
  engUnit('7a', 4, 'Time to celebrate', '欢庆时刻'),
  engUnit('7a', 5, 'The power of plants', '植物的力量'),
  engUnit('7a', 6, 'Fantastic friends', '了不起的朋友'),
]
const english7b = [
  engUnit('7b', 1, 'The secrets of happiness', '幸福的秘诀'),
  engUnit('7b', 2, 'Go for it!', '勇敢尝试'),
  engUnit('7b', 3, 'Food matters', '食物很重要'),
  engUnit('7b', 4, 'The art of having fun', '娱乐的艺术'),
  engUnit('7b', 5, 'Amazing nature', '奇妙的大自然'),
  engUnit('7b', 6, 'Hitting the road', '踏上旅途'),
]

// ---------- 历史（统编版 2024 秋 21 课 / 2025 春 22 课） ----------
const hist = (id, title, o = {}) => t(id, title, { tags: ['#需背诵'], ...o })
const history7a = [
  ch('u1', '第一单元 史前时期：原始社会与中华文明的起源', [
    hist('history-7a-1-1', '第1课 远古时期的人类活动'),
    hist('history-7a-1-2', '第2课 原始农业与史前社会'),
    hist('history-7a-1-3', '第3课 中华文明的起源'),
  ]),
  ch('u2', '第二单元 夏商周时期：奴隶制王朝的更替和向封建社会的过渡', [
    hist('history-7a-2-1', '第4课 夏商西周王朝的更替'),
    hist('history-7a-2-2', '第5课 动荡变化中的春秋时期'),
    hist('history-7a-2-3', '第6课 战国时期的社会变革', { imp: '中考必考' }),
    hist('history-7a-2-4', '第7课 百家争鸣', { imp: '中考必考', d: 3 }),
    hist('history-7a-2-5', '第8课 夏商周时期的科技与文化'),
  ]),
  ch('u3', '第三单元 秦汉时期：统一多民族封建国家的建立和巩固', [
    hist('history-7a-3-1', '第9课 秦统一中国', { imp: '中考必考', d: 3 }),
    hist('history-7a-3-2', '第10课 秦末农民大起义'),
    hist('history-7a-3-3', '第11课 西汉建立和"文景之治"'),
    hist('history-7a-3-4', '第12课 大一统王朝的巩固', { imp: '中考必考', d: 3 }),
    hist('history-7a-3-5', '第13课 东汉的兴衰'),
    hist('history-7a-3-6', '第14课 丝绸之路的开通与经营西域', { imp: '中考必考', d: 3 }),
    hist('history-7a-3-7', '第15课 秦汉时期的科技与文化'),
  ]),
  ch('u4', '第四单元 三国两晋南北朝时期：政权分立与民族交融', [
    hist('history-7a-4-1', '第16课 三国鼎立'),
    hist('history-7a-4-2', '第17课 西晋的短暂统一和北方各族的内迁'),
    hist('history-7a-4-3', '第18课 东晋南朝政治和江南地区开发'),
    hist('history-7a-4-4', '第19课 北朝政治和北方民族大交融', { d: 3 }),
    hist('history-7a-4-5', '第20课 三国两晋南北朝时期的科技与文化'),
    hist('history-7a-4-6', '第21课 活动课：从考古发现看中华文明的起源', { imp: '了解即可', tags: ['#提高'] }),
  ]),
]
const history7b = [
  ch('u1', '第一单元 隋唐时期：繁荣与开放的时代', [
    hist('history-7b-1-1', '第1课 隋朝统一与灭亡'),
    hist('history-7b-1-2', '第2课 唐朝建立与"贞观之治"', { imp: '中考必考' }),
    hist('history-7b-1-3', '第3课 开元盛世'),
    hist('history-7b-1-4', '第4课 安史之乱与唐朝衰亡'),
    hist('history-7b-1-5', '第5课 隋唐时期的民族交往与交融'),
    hist('history-7b-1-6', '第6课 隋唐时期的中外文化交流', { imp: '中考必考', d: 3 }),
    hist('history-7b-1-7', '第7课 隋唐时期的科技与文化'),
  ]),
  ch('u2', '第二单元 辽宋夏金元时期：民族关系发展和社会变化', [
    hist('history-7b-2-1', '第8课 北宋的政治'),
    hist('history-7b-2-2', '第9课 辽、西夏与北宋并立'),
    hist('history-7b-2-3', '第10课 金与南宋对峙'),
    hist('history-7b-2-4', '第11课 元朝的统一', { imp: '中考必考' }),
    hist('history-7b-2-5', '第12课 宋元时期经济的繁荣', { imp: '中考必考', d: 3 }),
    hist('history-7b-2-6', '第13课 宋元时期的对外交流'),
    hist('history-7b-2-7', '第14课 辽宋夏金元时期的科技与文化', { d: 3 }),
  ]),
  ch('u3', '第三单元 明清时期（至鸦片战争前）：统一多民族封建国家的巩固与发展', [
    hist('history-7b-3-1', '第15课 明朝的统治'),
    hist('history-7b-3-2', '第16课 明朝的对外关系', { imp: '中考必考' }),
    hist('history-7b-3-3', '第17课 明朝的灭亡和清朝的建立'),
    hist('history-7b-3-4', '第18课 统一多民族封建国家的巩固和发展', { imp: '中考必考', d: 3 }),
    hist('history-7b-3-5', '第19课 清朝君主专制的强化'),
    hist('history-7b-3-6', '第20课 明清时期社会经济的发展'),
    hist('history-7b-3-7', '第21课 明清时期的科技与文化', { d: 3 }),
    hist('history-7b-3-8', '第22课 活动课：我国传统节日的起源与传承', { imp: '了解即可', tags: ['#提高'] }),
  ]),
]

// ---------- 道德与法治（统编版 2024 秋 4 单元 13 课 / 2025 春 4 单元 11 课） ----------
const pol = (id, title, o = {}) => t(id, title, { tags: ['#需背诵'], ...o })
const politics7a = [
  ch('u1', '第一单元 少年有梦', [
    pol('politics-7a-1-1', '第一课 开启初中生活（奏响中学序曲／规划初中生活）'),
    pol('politics-7a-1-2', '第二课 正确认识自我（认识自己／做更好的自己）'),
    pol('politics-7a-1-3', '第三课 梦想始于当下（做有梦想的少年／学习成就梦想）'),
  ]),
  ch('u2', '第二单元 成长的时空', [
    pol('politics-7a-2-1', '第四课 幸福和睦的家庭（家的意味／让家更美好）'),
    pol('politics-7a-2-2', '第五课 和谐的师生关系（走近老师／珍惜师生情谊）'),
    pol('politics-7a-2-3', '第六课 友谊之树常青（友谊的真谛／交友的智慧）'),
    pol('politics-7a-2-4', '第七课 在集体中成长（集体生活成就我／共建美好集体）'),
  ]),
  ch('u3', '第三单元 珍爱我们的生命', [
    pol('politics-7a-3-1', '第八课 生命可贵（认识生命／敬畏生命）', { imp: '中考必考' }),
    pol('politics-7a-3-2', '第九课 守护生命安全（增强安全意识／提高防护能力）'),
    pol('politics-7a-3-3', '第十课 保持身心健康（爱护身体／滋养心灵）'),
  ]),
  ch('u4', '第四单元 追求美好人生', [
    pol('politics-7a-4-1', '第十一课 确立人生目标（探问人生目标／树立正确的人生目标）'),
    pol('politics-7a-4-2', '第十二课 端正人生态度（拥有积极的人生态度／正确对待顺境和逆境）'),
    pol('politics-7a-4-3', '第十三课 实现人生价值（在劳动中创造人生价值／在奉献中成就精彩人生）', { imp: '中考必考' }),
  ]),
]
const politics7b = [
  ch('u1', '第一单元 珍惜青春时光', [
    pol('politics-7b-1-1', '第一课 青春正当时（青春的邀约／男生女生／学会自我保护）'),
    pol('politics-7b-1-2', '第二课 做情绪情感的主人（揭开情绪的面纱／学会管理情绪／品味美好情感）', { imp: '中考必考' }),
  ]),
  ch('u2', '第二单元 焕发青春活力', [
    pol('politics-7b-2-1', '第三课 人贵自尊（人须有自尊／做自尊的人）'),
    pol('politics-7b-2-2', '第四课 自信给人力量（人要有自信／做自信的人）'),
    pol('politics-7b-2-3', '第五课 人生当自强（人要自强／做自强不息的中国人）'),
  ]),
  ch('u3', '第三单元 传承中华优秀传统文化', [
    pol('politics-7b-3-1', '第六课 传承核心思想理念（历久弥新的思想理念／做核心思想理念的传承者）'),
    pol('politics-7b-3-2', '第七课 弘扬中华人文精神（影响深远的人文精神／做中华人文精神的弘扬者）'),
    pol('politics-7b-3-3', '第八课 践行中华传统美德（薪火相传的传统美德／做中华传统美德的践行者）'),
  ]),
  ch('u4', '第四单元 生活在法治社会', [
    pol('politics-7b-4-1', '第九课 法律为我们护航（日益完善的法律体系／法律保障生活）', { imp: '中考必考' }),
    pol('politics-7b-4-2', '第十课 走近民法典（认识民法典／保护人身权／保障财产权）【新增】', { imp: '中考必考', d: 3 }),
    pol('politics-7b-4-3', '第十一课 远离违法犯罪（法不可违／犯罪与刑罚／严于律己）', { imp: '中考必考', d: 3 }),
  ]),
]

// ---------- 生物学（人教版 2024 新版：七上/七下各 2 单元 7 章） ----------
const practice = { imp: '了解即可', tags: ['#提高'] }
const biology7a = [
  ch('u1c1', '第一单元·第一章 认识生物', [
    t('biology-7a-1-1', '观察周边环境中的生物', { d: 1 }),
    t('biology-7a-1-2', '生物的特征', { imp: '中考必考', tags: ['#基础', '#需背诵'] }),
  ]),
  ch('u1c2', '第一单元·第二章 认识细胞', [
    t('biology-7a-2-1', '学习使用显微镜', { imp: '中考必考', tags: ['#基础', '#易错'] }),
    t('biology-7a-2-2', '植物细胞', { imp: '中考必考', tags: ['#需背诵'] }),
    t('biology-7a-2-3', '动物细胞', { imp: '中考必考', tags: ['#需背诵'] }),
    t('biology-7a-2-4', '细胞的生活', { d: 3 }),
  ]),
  ch('u1c3', '第一单元·第三章 从细胞到生物体', [
    t('biology-7a-3-1', '细胞通过分裂产生新细胞'),
    t('biology-7a-3-2', '动物体的结构层次', { tags: ['#需背诵'] }),
    t('biology-7a-3-3', '植物体的结构层次', { tags: ['#需背诵'] }),
    t('biology-7a-3-4', '单细胞生物'),
    t('biology-7a-3-5', '综合实践项目：制作细胞模型', practice),
  ]),
  ch('u2c1', '第二单元·第一章 植物的类群', [
    t('biology-7a-4-1', '藻类、苔藓和蕨类'),
    t('biology-7a-4-2', '种子植物', { imp: '中考必考' }),
  ]),
  ch('u2c2', '第二单元·第二章 动物的类群', [
    t('biology-7a-5-1', '无脊椎动物'),
    t('biology-7a-5-2', '脊椎动物——鱼'),
    t('biology-7a-5-3', '脊椎动物——两栖动物和爬行动物'),
    t('biology-7a-5-4', '脊椎动物——鸟和哺乳动物'),
  ]),
  ch('u2c3', '第二单元·第三章 微生物【新增章】', [
    t('biology-7a-6-1', '微生物的分布'),
    t('biology-7a-6-2', '细菌', { d: 3 }),
    t('biology-7a-6-3', '真菌'),
    t('biology-7a-6-4', '病毒', { d: 