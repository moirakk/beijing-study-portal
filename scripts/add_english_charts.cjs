#!/usr/bin/env node
/**
 * 为英语缺图笔记批量添加定制 Mermaid 图表
 */
const fs = require('fs');
const path = require('path');

const BASE = '/Users/a1234/.verdent/verdent-projects/beijing-study-portal';
const MISSING_LIST = '/tmp/english_missing.txt';

const files = fs.readFileSync(MISSING_LIST, 'utf8')
  .split('\n').filter(f => f.trim())
  .map(f => path.join(BASE, f.trim()));

// ─────────────────── 图表生成函数库 ───────────────────

function beVerbChart() {
  return `\`\`\`mermaid
flowchart TD
    A["be 动词用法"] --> B["I → am"]
    A --> C["he / she / it / 单数名词 → is"]
    A --> D["you / we / they / 复数名词 → are"]
    B --> E["肯定：I am a student."]
    C --> F["否定：She is not（isn't）my teacher."]
    D --> G["疑问：Are you from Beijing?"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function pronounChart() {
  return `\`\`\`mermaid
flowchart LR
    A["人称代词"] --> B["主格"]
    A --> C["形容词性物主代词"]
    B --> B1["I / you / he / she / it / we / they"]
    C --> C1["my / your / his / her / its / our / their"]
    C1 --> D["后面必须接名词：my book ✓  my ✗"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function nounPluralChart() {
  return `\`\`\`mermaid
flowchart TD
    A["名词复数变化规则"] --> B["规则变化"]
    A --> C["不规则变化"]
    B --> B1["一般加 -s：book→books"]
    B --> B2["s/x/sh/ch 结尾加 -es：class→classes"]
    B --> B3["辅音+y→ies：library→libraries"]
    B --> B4["f/fe→ves：knife→knives"]
    C --> C1["man→men / woman→women"]
    C --> C2["child→children / foot→feet"]
    C --> C3["单复数同形：sheep / fish"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function likeDoing() {
  return `\`\`\`mermaid
flowchart TD
    A["动名词 doing 用法"] --> B["like / love / enjoy / finish + doing"]
    A --> C["动词 -ing 拼写规则"]
    B --> B1["I like swimming. She enjoys painting."]
    C --> C1["直接加 ing：read→reading"]
    C --> C2["去 e 加 ing：dance→dancing"]
    C --> C3["双写辅音加 ing：swim→swimming"]
    A --> D["play 的搭配"]
    D --> D1["play + the + 乐器：play the piano"]
    D --> D2["play + 球类（不加 the）：play football"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function simplePresent() {
  return `\`\`\`mermaid
flowchart TD
    A["一般现在时"] --> B["结构"]
    A --> C["第三人称单数变化"]
    A --> D["三种句式"]
    B --> B1["I/you/we/they + 动词原形"]
    B --> B2["he/she/it + 动词+s/es"]
    C --> C1["直接加 s：like→likes"]
    C --> C2["s/sh/ch/x/o→es：go→goes"]
    C --> C3["辅音+y→ies：study→studies"]
    D --> D1["肯定：She likes music."]
    D --> D2["否定：She doesn't like pop."]
    D --> D3["疑问：Does she like jazz?"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function simplePast() {
  return `\`\`\`mermaid
flowchart TD
    A["一般过去时"] --> B["规则动词（+ed）"]
    A --> C["不规则动词（需背诵）"]
    A --> D["三种句式"]
    B --> B1["直接加 ed：play→played"]
    B --> B2["去 e 加 ed：like→liked"]
    B --> B3["双写加 ed：stop→stopped"]
    B --> B4["辅音+y→ied：study→studied"]
    C --> C1["go→went / have→had / see→saw"]
    C --> C2["come→came / take→took / make→made"]
    D --> D1["肯定：She visited the museum."]
    D --> D2["否定：She didn't visit..."]
    D --> D3["疑问：Did she visit...?"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function presentContinuous() {
  return `\`\`\`mermaid
flowchart TD
    A["现在进行时"] --> B["结构：am/is/are + doing"]
    A --> C["动词 -ing 拼写"]
    A --> D["句式变换"]
    B --> B1["I am reading now."]
    B --> B2["She is watching TV."]
    B --> B3["They are playing football."]
    C --> C1["直接加 ing：read→reading"]
    C --> C2["去 e：make→making"]
    C --> C3["双写：run→running / sit→sitting"]
    D --> D1["否定：am/is/are + not + doing"]
    D --> D2["疑问：Am/Is/Are + 主语 + doing?"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function presentPerfect() {
  return `\`\`\`mermaid
flowchart TD
    A["现在完成时"] --> B["结构：have/has + 过去分词"]
    A --> C["常用副词"]
    A --> D["for / since 用法"]
    B --> B1["I have finished my homework."]
    B --> B2["She has visited Paris."]
    C --> C1["just 刚刚（肯定句）：I have just arrived."]
    C --> C2["already 已经（肯定句）：She has already left."]
    C --> C3["yet 还/已经（否/疑）：Have you done it yet?"]
    D --> D1["for + 时间段：for three years"]
    D --> D2["since + 时间点：since 2020"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function futureWill() {
  return `\`\`\`mermaid
flowchart TD
    A["将来时"] --> B["will + 动词原形"]
    A --> C["be going to + 动词原形"]
    B --> B1["临时决定：I'll help you."]
    B --> B2["预测：It will rain tomorrow."]
    B --> B3["否定：won't = will not"]
    C --> C1["有计划：I'm going to visit Beijing."]
    C --> C2["有迹象预测：Look at the clouds—it's going to rain."]
    B --> D["疑问：Will you come? — Yes, I will."]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function passive() {
  return `\`\`\`mermaid
flowchart LR
    A["被动语态"] --> B["结构：be + 过去分词"]
    B --> C["一般现在时：is/are + pp"]
    B --> D["一般过去时：was/were + pp"]
    B --> E["一般将来时：will be + pp"]
    C --> C1["Books are sold here."]
    D --> D1["The wall was built in 2000."]
    E --> E1["The work will be done tomorrow."]
    A --> F["主动→被动转换步骤"]
    F --> F1["①宾语→新主语 ②be动词匹配时态 ③原动词变过去分词"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style F fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function relativeClause() {
  return `\`\`\`mermaid
flowchart TD
    A["定语从句"] --> B["关系代词选择"]
    A --> C["注意事项"]
    B --> B1["that：修饰人或物，限制性从句通用"]
    B --> B2["which：只修饰物，可替换 that"]
    B --> B3["who/whom：修饰人，who 作主语，whom 作宾语"]
    C --> C1["先行词是 all/the only/序数词→只用 that"]
    C --> C2["非限制性定语从句→用 which/who，不用 that"]
    C --> C3["关系代词在从句中作宾语时可省略"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function adverbialClause() {
  return `\`\`\`mermaid
flowchart TD
    A["状语从句"] --> B["时间状语从句"]
    A --> C["条件状语从句"]
    A --> D["让步状语从句"]
    B --> B1["when / while / as soon as / before / after / since"]
    B --> B2["时态：主将从现（主句将来时→从句用现在时）"]
    C --> C1["if / unless（unless = if...not）"]
    C --> C2["时态：主将从现"]
    D --> D1["although / though / even though"]
    D --> D2["不能与 but 连用（意思重复）"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function conjunctions() {
  return `\`\`\`mermaid
flowchart TD
    A["并列连词"] --> B["and 和"]
    A --> C["but 但是"]
    A --> D["or 或者"]
    A --> E["so 所以"]
    B --> B1["She studied hard and passed the exam."]
    C --> C1["I like coffee, but he prefers tea."]
    D --> D1["You can walk or take the bus."]
    E --> E1["It was raining, so we stayed inside."]
    A --> F["注意：so 不能与 because 连用"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
    style E fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function modalVerbs() {
  return `\`\`\`mermaid
flowchart TD
    A["情态动词"] --> B["can"]
    A --> C["must / have to"]
    A --> D["should"]
    A --> E["may / might"]
    B --> B1["能力：I can swim."]
    B --> B2["许可：Can I go out?"]
    C --> C1["must：主观义务（你自己认为必须）"]
    C --> C2["have to：客观必要（外部原因必须）"]
    C --> C3["否定：mustn't 禁止 ≠ don't have to 不必"]
    D --> D1["建议/应该：You should study harder."]
    E --> E1["may：许可（正式）；might：可能性（较小）"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function frequencyAdverbs() {
  return `\`\`\`mermaid
flowchart LR
    A["频度副词 频率从高→低"] --> B["always 100%"]
    B --> C["usually ~80%"]
    C --> D["often ~60%"]
    D --> E["sometimes ~40%"]
    E --> F["hardly ever ~10%"]
    F --> G["never 0%"]
    A --> H["位置规则"]
    H --> H1["实义动词前：I often play basketball."]
    H --> H2["be动词/助动词后：She is always kind."]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style G fill:#fdba74,stroke:#fb923c
    style H fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function exclamation() {
  return `\`\`\`mermaid
flowchart TD
    A["感叹句结构"] --> B["What 引导"]
    A --> C["How 引导"]
    B --> B1["What + a/an + 形容词 + 可数名词单数 + (主谓)!"]
    B --> B2["What a beautiful city it is!"]
    B --> B3["What + 形容词 + 可数名词复数/不可数名词 + (主谓)!"]
    B --> B4["What good news (it is)!"]
    C --> C1["How + 形容词/副词 + (主谓)!"]
    C --> C2["How fast she runs!"]
    C --> C3["How + 形容词 + a/an + 单数名词 + (主谓)!"]
    C --> C4["How beautiful a city it is!"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function nonFinite() {
  return `\`\`\`mermaid
flowchart TD
    A["非谓语动词"] --> B["不定式 to do"]
    A --> C["动名词 doing"]
    A --> D["过去分词 done"]
    B --> B1["want/decide/plan/hope + to do"]
    B --> B2["too...to... 太…而不能"]
    B --> B3["作目的状语：He went there to study."]
    C --> C1["enjoy/finish/mind/avoid + doing"]
    C --> C2["作主语：Swimming is fun."]
    C --> C3["介词后：be good at doing"]
    D --> D1["被动含义：a broken window"]
    D --> D2["过去完成/被动结构"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function soThat() {
  return `\`\`\`mermaid
flowchart TD
    A["so...that... 结果状语从句"] --> B["结构：so + 形/副 + that 从句"]
    A --> C["such...that... 结构"]
    B --> B1["He was so tired that he fell asleep."]
    B --> B2["She ran so fast that nobody caught her."]
    C --> C1["such + a/an + 形 + 名 + that"]
    C --> C2["It was such a good film that we saw it twice."]
    A --> D["互换规则"]
    D --> D1["so + adj → such + a/an + n"]
    D --> D2["so tired → such a tired person"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function ifCondition() {
  return `\`\`\`mermaid
flowchart TD
    A["if 条件句"] --> B["真实条件句（一般现在→将来）"]
    A --> C["虚拟条件句（过去时形式）"]
    B --> B1["If it rains, I will stay at home."]
    B --> B2["主将从现：从句用一般现在时"]
    B --> B3["unless = if...not：Unless you hurry, you'll be late."]
    C --> C1["If I were you, I would study harder."]
    C --> C2["表示与现在相反的假设"]
    A --> D["unless 注意"]
    D --> D1["Unless 已含否定，不能再加 not"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
\`\`\``;
}

function timeClause() {
  return `\`\`\`mermaid
flowchart TD
    A["时间状语从句"] --> B["常用连词"]
    A --> C["时态规则（主将从现）"]
    B --> B1["when 当…时"]
    B --> B2["while 在…期间（强调过程）"]
    B --> B3["as soon as 一…就…"]
    B --> B4["before / after / since / until"]
    C --> C1["主句（将来时）+ 从句（现在时）"]
    C --> C2["As soon as I arrive, I will call you."]
    C --> C3["Since 引导的从句：用一般过去时"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function fewLittle() {
  return `\`\`\`mermaid
flowchart TD
    A["few / little 用法"] --> B["few 修饰可数名词复数"]
    A --> C["little 修饰不可数名词"]
    B --> B1["few：几乎没有（否定意味）：few friends"]
    B --> B2["a few：有几个（肯定意味）：a few friends"]
    C --> C1["little：几乎没有：little time"]
    C --> C2["a little：有一些：a little water"]
    A --> D["对比 many/much"]
    D --> D1["many + 可数复数：many books"]
    D --> D2["much + 不可数：much money"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function vocabMindmap(title, categories) {
  const cat = categories.slice(0, 5);
  const safeTitle = title.replace(/"/g, "'").replace(/\(/g, "（").replace(/\)/g, "）");
  let mm = `\`\`\`mermaid\nmindmap\n  root(("${safeTitle}"))\n`;
  for (const c of cat) {
    mm += `    ${c.label}\n`;
    for (const item of c.items.slice(0, 4)) {
      mm += `      ${item}\n`;
    }
  }
  mm += '```';
  return mm;
}

function listeningStrategy() {
  return `\`\`\`mermaid
flowchart TD
    A["听力解题三步法"] --> B["听前预测"]
    A --> C["听中抓点"]
    A --> D["听后推断"]
    B --> B1["快速浏览题干与选项"]
    B --> B2["预测话题与问题类型"]
    C --> C1["抓关键词：时间/数字/地点/人物"]
    C --> C2["注意转折词：but / however / actually"]
    C --> C3["留意同义替换，答案非原词"]
    D --> D1["结合语境与常识判断"]
    D --> D2["语气/反问→推断说话人态度"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function clozeStrategy(type) {
  return `\`\`\`mermaid
flowchart TD
    A["完形填空解题策略（${type}）"] --> B["通读全文，把握主旨"]
    B --> C["逐题精做"]
    C --> D["复读验证"]
    A --> E["${type === '记叙文' ? '记叙文要素' : '说明文要素'}"]
    E --> E1["${type === '记叙文' ? '时间/地点/人物/事件/结果' : '观点/论据/数据/结论'}"]
    E --> E2["情感线索：${type === '记叙文' ? '注意心理描写变化' : '注意逻辑关系词'}"]
    C --> C1["利用上下文语境排除干扰"]
    C --> C2["固定搭配与词义辨析"]
    D --> D1["代入原文，检验语义是否连贯"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function readingStrategy(type) {
  const strategies = {
    '细节理解': ['定位关键词', '回文比对', '注意数字/时间/地点', '警惕同义替换'],
    '主旨大意': ['抓首段末段', '各段首句串联', '选项需能概括全文', '排除过宽/过窄'],
    '推理判断': ['基于文意推断', '不凭主观臆测', '注意转折与语气', '选"最可能"选项'],
    '词义猜测': ['上下文线索法', '构词法（前/后缀）', '对比/解释信号词', '代入验证'],
  };
  const steps = strategies[type] || strategies['细节理解'];
  return `\`\`\`mermaid
flowchart TD
    A["阅读理解：${type}"] --> B["解题步骤"]
    A --> C["核心策略"]
    B --> B1["① 读题干，明确问题类型"]
    B --> B2["② 回文定位关键信息"]
    B --> B3["③ 对比选项，排除干扰"]
    B --> B4["④ 选最符合文意的答案"]
    C --> C1["${steps[0]}"]
    C --> C2["${steps[1]}"]
    C --> C3["${steps[2]}"]
    C --> C4["${steps[3]}"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function sevenChoiceFive() {
  return `\`\`\`mermaid
flowchart TD
    A["七选五解题策略"] --> B["整体理解文章结构"]
    B --> C["分析空格位置"]
    C --> D["利用逻辑与衔接词"]
    D --> E["代入验证"]
    A --> F["空格位置规律"]
    F --> F1["段首空格→引出该段主题"]
    F --> F2["段中空格→补充细节/举例"]
    F --> F3["段末空格→总结/过渡"]
    D --> D1["besides / furthermore / however / therefore"]
    D --> D2["代词前指：it/they/this 指代上文名词"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function grammarFill(type) {
  const map = {
    '动词时态语态': {
      steps: ['判断时态（when/for/since等时间词）', '判断语态（主动/被动）', '判断主谓一致', '填入正确形式'],
      tips: ['since/for → 现在完成时', 'yesterday/last → 一般过去时', 'will/tomorrow → 将来时']
    },
    '非谓语动词': {
      steps: ['判断与逻辑主语关系（主动/被动）', '判断时间（同步/先后）', 'want/hope→to do，enjoy→doing', '分析句子缺什么成分'],
      tips: ['主动进行→doing', '被动/完成→done', '目的→to do', '介词后→doing']
    },
    '从句与连词': {
      steps: ['判断从句类型（名词/定语/状语）', '选正确连接词', '注意从句时态', '检查句子完整性'],
      tips: ['that引名词从句', 'which/who引定语从句', 'when/if/although引状语从句']
    }
  };
  const info = map[type] || map['动词时态语态'];
  return `\`\`\`mermaid
flowchart TD
    A["语法填空：${type}"] --> B["解题步骤"]
    A --> C["高频判断依据"]
    B --> B1["① ${info.steps[0]}"]
    B --> B2["② ${info.steps[1]}"]
    B --> B3["③ ${info.steps[2]}"]
    B --> B4["④ ${info.steps[3]}"]
    C --> C1["${info.tips[0]}"]
    C --> C2["${info.tips[1]}"]
    C --> C3["${info.tips[2]}"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function errorCorrection() {
  return `\`\`\`mermaid
flowchart TD
    A["短文改错解题策略"] --> B["通读全文，把握大意"]
    B --> C["逐句检查，标记可疑处"]
    C --> D["判断错误类型"]
    D --> E["改正并再通读"]
    D --> F["常见错误类型"]
    F --> F1["主谓一致（单复数）"]
    F --> F2["时态错误（与语境不符）"]
    F --> F3["冠词多/少/用错（a/an/the）"]
    F --> F4["代词格错（he→him）"]
    F --> F5["介词错误（in/on/at）"]
    F --> F6["词形错误（adj/adv混用）"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style D fill:#fed7aa,stroke:#fb923c
    style F fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function writingStrategy(type) {
  if (type === '应用文') {
    return `\`\`\`mermaid
flowchart TD
    A["应用文写作框架"] --> B["格式规范"]
    A --> C["内容要点"]
    A --> D["语言表达"]
    B --> B1["书信：Dear...→正文→Best wishes/Yours,+署名"]
    B --> B2["通知/海报：标题居中，要素完整"]
    B --> B3["日记：日期+星期+天气+正文"]
    C --> C1["紧扣题目所有要点，不遗漏"]
    C --> C2["逻辑清晰，分段合理"]
    D --> D1["首句点明写信目的"]
    D --> D2["过渡词：Firstly / In addition / Finally"]
    D --> D3["结尾：期待/希望/感谢句式"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
  }
  return `\`\`\`mermaid
flowchart TD
    A["读后续写策略"] --> B["读原文（精读）"]
    B --> C["分析情节与人物"]
    C --> D["续写构思"]
    D --> E["动笔撰写"]
    C --> C1["梳理：时间/地点/人物/事件/情感"]
    C --> C2["预测：情节走向/结局合理性"]
    D --> D1["续写段落首句照应给定段落"]
    D --> D2["保持人物性格一致"]
    D --> D3["丰富细节：动作/心理/对话"]
    E --> E1["每段 80-100 词，逻辑自然"]
    style A fill:#f97316,color:#fff,stroke:#ea580c
    style B fill:#fed7aa,stroke:#fb923c
    style C fill:#fed7aa,stroke:#fb923c
    style D fill:#fdba74,stroke:#fb923c
\`\`\``;
}

function vocabGrammarBase() {
  return `\`\`\`mermaid
mindmap
  root(("词汇与语法基础"))
    词义辨析
      同义词辨析
      近义词辨析
      易混淆词
    词形变化
      动词变化（时态/非谓语）
      名词单复数
      形容词副词级别
    固定搭配
      动词短语
      介词搭配
      名词搭配
    高频语法
      时态综合
      从句类型
      句式变换
\`\`\``;
}

// ─────────────────── 内容分析 ───────────────────

function extractTags(content) {
  const m = content.match(/标签[：:]\s*(.+)/);
  return m ? m[1] : '';
}

function extractTitle(content) {
  const m = content.match(/^# (.+)$/m);
  return m ? m[1] : '';
}

function chooseChart(content, filePath) {
  const title = extractTitle(content);
  const tags = extractTags(content);
  const combined = title + ' ' + tags + ' ' + content.slice(0, 800);

  // grade12-2 专题
  if (filePath.includes('grade12-2')) {
    if (combined.includes('听力')) return listeningStrategy();
    if (combined.includes('完形') && combined.includes('记叙')) return clozeStrategy('记叙文');
    if (combined.includes('完形')) return clozeStrategy('说明文');
    if (combined.includes('细节理解')) return readingStrategy('细节理解');
    if (combined.includes('主旨大意')) return readingStrategy('主旨大意');
    if (combined.includes('推理判断')) return readingStrategy('推理判断');
    if (combined.includes('词义猜测')) return readingStrategy('词义猜测');
    if (combined.includes('七选五')) return sevenChoiceFive();
    if (combined.includes('时态') && combined.includes('语态')) return grammarFill('动词时态语态');
    if (combined.includes('非谓语')) return grammarFill('非谓语动词');
    if (combined.includes('从句') && combined.includes('连词')) return grammarFill('从句与连词');
    if (combined.includes('短文改错')) return errorCorrection();
    if (combined.includes('应用文')) return writingStrategy('应用文');
    if (combined.includes('读后续写')) return writingStrategy('读后续写');
    if (combined.includes('词汇') && combined.includes('语法基础')) return vocabGrammarBase();
  }

  // 语法判断
  if (combined.match(/be\s*动词|am.{0,5}is.{0,5}are/)) return beVerbChart();
  if (combined.match(/人称代词|物主代词/)) return pronounChart();
  if (combined.match(/名词.*复数|复数.*变化/)) return nounPluralChart();
  if (combined.match(/动名词|like\s*doing|enjoy.*doing/)) return likeDoing();
  if (combined.match(/频度副词|always.*usually|never.*sometimes/)) return frequencyAdverbs();
  if (combined.match(/感叹句|What.*a.*How.*adj/)) return exclamation();
  if (combined.match(/一般现在时/)) return simplePresent();
  if (combined.match(/一般过去时|过去时.*不规则/)) return simplePast();
  if (combined.match(/现在进行时/)) return presentContinuous();
  if (combined.match(/现在完成时|just.*already.*yet|have.*has.*过去分词/)) return presentPerfect();
  if (combined.match(/将来时|will.*be going to/)) return futureWill();
  if (combined.match(/被动语态|be.*过去分词/)) return passive();
  if (combined.match(/定语从句|that.*which.*who/)) return relativeClause();
  if (combined.match(/并列连词|and.*but.*or.*so/)) return conjunctions();
  if (combined.match(/情态动词|must.*should.*can/)) return modalVerbs();
  if (combined.match(/so.*that|such.*that/)) return soThat();
  if (combined.match(/时间状语从句|when.*while.*as soon as/)) return timeClause();
  if (combined.match(/条件.*状语从句|if.*unless/)) return ifCondition();
  if (combined.match(/让步状语从句|although.*though/)) return adverbialClause();
  if (combined.match(/非谓语动词/)) return nonFinite();
  if (combined.match(/few.*little|a few.*a little/)) return fewLittle();

  // 默认：根据话题生成词汇导图
  return generateTopicMindmap(title, content);
}

function generateTopicMindmap(title, content) {
  const safeTitle = title.replace(/"/g, "'").replace(/[()（）]/g, '').slice(0, 30);
  
  // 提取词汇分组
  const sections = [];
  const sectionMatches = content.matchAll(/## [二三四五六]、(.+)\n([\s\S]+?)(?=\n## |\n---|\n相关|$)/g);
  for (const m of sectionMatches) {
    sections.push(m[1].trim());
    if (sections.length >= 4) break;
  }

  // 根据标签和内容提取核心词汇
  let cat1 = '核心词汇', cat2 = '重点短语', cat3 = '句型结构', cat4 = '语法要点';
  
  // 从内容提取一些具体词汇用于展示
  const vocabMatches = content.match(/\|\s*(\w+)\s*\|/g);
  const vocabs = vocabMatches ? [...new Set(vocabMatches.map(m => m.replace(/\|/g, '').trim()))].slice(0, 8) : [];
  
  const phraseMatches = content.match(/\*\*(.{3,15})\*\*/g);
  const phrases = phraseMatches ? [...new Set(phraseMatches.map(m => m.replace(/\*\*/g, '').trim()))].slice(0, 6) : [];

  if (sections.length >= 2) cat1 = sections[0], cat2 = sections[1];
  if (sections.length >= 4) cat3 = sections[2], cat4 = sections[3];

  const v1 = vocabs[0] || 'vocabulary';
  const v2 = vocabs[1] || 'grammar';
  const v3 = vocabs[2] || 'phrases';
  const v4 = vocabs[3] || 'sentences';
  const v5 = vocabs[4] || 'reading';
  const v6 = vocabs[5] || 'writing';
  const p1 = phrases[0] || 'key phrase 1';
  const p2 = phrases[1] || 'key phrase 2';
  const p3 = phrases[2] || 'key phrase 3';

  return `\`\`\`mermaid
mindmap
  root(("${safeTitle}"))
    ${cat1}
      ${v1}
      ${v2}
      ${v3}
    ${cat2}
      ${p1}
      ${p2}
      ${p3}
    ${cat3}
      ${v4}
      ${v5}
    ${cat4}
      ${v6}
      考点总结
\`\`\``;
}

// ─────────────────── 插入位置 ───────────────────

function insertChart(content, chart) {
  // 优先插入到 ## 三、语法 / ## 四 / ## 三 等章节末、## 六/七 前
  // 找最后一个 ## 二 到 ## 五 的结束位置，在 ## 六 / ## 七 前插入

  // 找"## 六" 或 "## 七" 或 "## 考点" 或 "## 易错点"
  const insertBeforePattern = /\n## [六七八]、/;
  const match = insertBeforePattern.exec(content);
  if (match) {
    const pos = match.index;
    return content.slice(0, pos) + '\n\n## 结构图示\n\n' + chart + '\n' + content.slice(pos);
  }

  // 如果是grade12-2格式，找"## 典型例题"前
  const beforeExamplePattern = /\n## 典型例题/;
  const m2 = beforeExamplePattern.exec(content);
  if (m2) {
    const pos = m2.index;
    return content.slice(0, pos) + '\n\n## 结构图示\n\n' + chart + '\n' + content.slice(pos);
  }

  // 找"## 五" 前
  const beforeFivePattern = /\n## 五、/;
  const m3 = beforeFivePattern.exec(content);
  if (m3) {
    const pos = m3.index;
    return content.slice(0, pos) + '\n\n## 结构图示\n\n' + chart + '\n' + content.slice(pos);
  }

  // 找"## 易错点"
  const beforeErrors = /\n## 易错点/;
  const m4 = beforeErrors.exec(content);
  if (m4) {
    const pos = m4.index;
    return content.slice(0, pos) + '\n\n## 结构图示\n\n' + chart + '\n' + content.slice(pos);
  }

  // fallback：追加到末尾
  return content + '\n\n## 结构图示\n\n' + chart + '\n';
}

// ─────────────────── 主流程 ───────────────────

let processed = 0, skipped = 0, errors = 0;

for (const filePath of files) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`NOT FOUND: ${filePath}`);
      errors++;
      continue;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('mermaid') || content.includes('mindmap')) {
      skipped++;
      continue;
    }
    const chart = chooseChart(content, filePath);
    const newContent = insertChart(content, chart);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`OK: ${filePath.replace(BASE + '/', '')}`);
    processed++;
  } catch (e) {
    console.error(`ERROR: ${filePath} - ${e.message}`);
    errors++;
  }
}

console.log(`\n完成: processed=${processed}, skipped=${skipped}, errors=${errors}`);
