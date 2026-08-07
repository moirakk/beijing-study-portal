---
title: 第3节 广播、电视和移动通信
date: 2026-08-07
---

# 第3节 广播、电视和移动通信

## 核心概念表

| 项目 | 内容 |
|---|---|
| 无线电广播 | 声音信号加载到高频电磁波上发射；收音机接收、解调、还原成声音 |
| 电视 | 图像信号 + 声音信号共同加载到电磁波上传输 |
| 移动电话 | 既是无线电发射台又是无线电接收台，依靠基站转接 |
| 微波通信 | 频率高、容量大；需中继站（微波大致直线传播） |

## 知识梳理

1. **无线电广播发射**：话筒把声音变成电信号→**调制器**把音频电信号加载到高频载波上→天线发射电磁波。
2. **接收**：收音机天线接收电磁波→调谐（选台）→**解调**取出音频信号→扬声器还原成声音。
3. **电视**：摄像机把图像变成电信号，与声音信号一起发射；电视机接收后由显像装置还原图像、扬声器还原声音。
4. **移动电话（手机）**：体积小、功率小，靠**基站**转接信号；无绳电话是主机与手机间的小型无线通信。
5. **音频、视频、射频**：音频（20 Hz~20 kHz）、视频信号频率较高，射频（高频载波）用于发射。

## 广播信号发射与接收流程图

<svg viewBox="0 0 430 130" width="430" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ba" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <rect x="12" y="45" width="58" height="34" rx="5" fill="#dcfce7" stroke="#16a34a"/><text x="41" y="66" text-anchor="middle" font-size="11">话筒</text>
  <line x1="70" y1="62" x2="94" y2="62" stroke="#334155" stroke-width="2" marker-end="url(#ba)"/>
  <rect x="96" y="45" width="62" height="34" rx="5" fill="#dbeafe" stroke="#2563eb"/><text x="127" y="66" text-anchor="middle" font-size="11">调制器</text>
  <line x1="158" y1="62" x2="182" y2="62" stroke="#334155" stroke-width="2" marker-end="url(#ba)"/>
  <rect x="184" y="45" width="62" height="34" rx="5" fill="#fde68a" stroke="#ca8a04"/><text x="215" y="66" text-anchor="middle" font-size="11">发射天线</text>
  <path d="M252 55 q6 7 0 14 M262 50 q9 12 0 24" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <rect x="276" y="45" width="62" height="34" rx="5" fill="#fde68a" stroke="#ca8a04"/><text x="307" y="66" text-anchor="middle" font-size="11">接收/调谐</text>
  <line x1="338" y1="62" x2="362" y2="62" stroke="#334155" stroke-width="2" marker-end="url(#ba)"/>
  <rect x="364" y="45" width="58" height="34" rx="5" fill="#dcfce7" stroke="#16a34a"/><text x="393" y="66" text-anchor="middle" font-size="11">解调→扬声器</text>
  <text x="215" y="115" text-anchor="middle" font-size="11" fill="#64748b">发射：调制加载高频载波；接收：调谐选台后解调还原</text>
</svg>

## 易错点

- 手机之间不能直接远距离通话，必须依靠**基站和交换网络**转接。
- 微波大致沿直线传播且穿透电离层，远距离传输需每隔约 50 km 建中继站，或利用卫星做"太空中继站"。
- "调制"是把信号装上载波，"解调"是从载波取下信号，二者过程相反。

## 背记要点

1. 广播流程：声音→电信号→调制→发射；接收→调谐→解调→声音。
2. 电视比广播多传输图像信号。
3. 手机既能发射又能接收，靠基站转接；微波通信需中继站。

## 自测题

1. 无线电广播中"调制"和"解调"分别指什么？
2. 为什么山区手机信号常常不好？

## 相关知识点

[[第2节 电磁波的海洋]] [[第4节 越来越宽的信息之路]] [[第1节 现代顺风耳——电话]]
