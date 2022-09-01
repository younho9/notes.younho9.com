---
title: 리플로우(Reflow) vs 리페인트(Repaint)
category: Browser
tags:
  - web
  - browser
  - 렌더링
  - vs
aliases:
  - 리플로우와 리페인트
  - 리플로우(Reflow)와 리페인트(Repaint)
  - Reflow vs Repaint
created: 2021-12-30T04:06:00.000Z
updated: 2021-12-30T04:14:00.000Z
---

# {{ $frontmatter.title }}

### 리플로우(Reflow)

![리플로우](https://developers.google.com/web/fundamentals/performance/rendering/images/simplify-paint-complexity-and-reduce-paint-areas/frame.jpg)

- 생성된 DOM 노드의 레이아웃(너비, 높이 등) 변경 시 영향받는 모든 노드(자식, 부모)의 수치를 다시 계산하여 렌더 트리를 재생성하는 작업입니다.
  - [[브라우저-렌더링---3.-레이아웃(Layout)-단계|브라우저 렌더링 - 3. 레이아웃(Layout) 단계]]

### 리페인트(Repaint)

![리페인트](https://developers.google.com/web/fundamentals/performance/rendering/images/simplify-paint-complexity-and-reduce-paint-areas/frame-no-layout.jpg)

- 레이아웃과 상관이 없는 스타일 속성(배경색, 글자색 등) 변경 시에 렌더 트리를 재생성하는 작업입니다.
  - [[브라우저-렌더링---4.-페인트(Paint)-단계|브라우저 렌더링 - 4. 페인트(Paint) 단계]]

### transform과 opacity

![컴포지팅](https://developers.google.com/web/fundamentals/performance/rendering/images/stick-to-compositor-only-properties-and-manage-layer-count/frame-no-layout-paint.jpg?hl=ko)

- 리플로우와 리페인트를 모두 일으키지 않는, 컴포지팅만 일으키는 속성으로는 `transform` 과 `opacity` 뿐이다.

## Demo

- [Why moving elements with translate() is better than pos:abs top/left - Paul Irish](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)
- [브라우저 리플로우 최소화  |  PageSpeed Insights  |  Google Developers](https://developers.google.com/speed/docs/insights/browser-reflow?hl=ko)
