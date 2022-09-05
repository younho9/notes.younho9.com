---
title: FP vs FCP vs FMP vs LCP
category: Web
tags:
  - web
  - performance
  - lighthouse
aliases:
  - >-
    FP(First Paint) vs FCP(First Contentful Paint) vs FMP(First Meaningful
    Paint) vs LCP(Largest Contentful Paint)
  - >-
    First Paint vs First Contentful Paint vs First Meaningful Paint vs Largest
    Contentful Paint
publish: true
created: 2022-01-08T06:47:00.000Z
updated: 2022-09-05T03:06:17.867Z
related:
  - TTFB(Time-To-First-Byte)
  - CSR-vs-SSR-vs-SSG
---

# {{ $frontmatter.title }}

## FCP(First Contentful Paint)

- 브라우저가 **처음으로 DOM의 일부분을 렌더링한 시점**을 측정한다.

## FMP(First Meaningful Paint)

- 페이지의 **주요 콘텐츠가 사용자에게 표시되는 시점**을 측정한다.
  - [Above-The-Fold](https://en.wikipedia.org/wiki/Above_the_fold) 콘텐츠
- 브라우저마다 세부 구현이 달라 비권장된다.

## LCP(Largest Contentful Paint)

- 뷰포트에서 **가장 큰 요소가 스크린에 렌더링되는 시점**을 측정한다.

## LCP 최적화

- [[TTFB(Time-To-First-Byte)|TTFB(Time To First Byte)]]을 개선한다.
  - 서버 최적화
  - CDN으로 라우팅
  - asset 캐시
  - 페이지 캐시
- 렌더링 차단 JavaScript 및 CSS

## Related

- [[CSR-vs-SSR-vs-SSG|CSR vs SSR vs SSG]]

## References

- [First Meaningful Paint (web.dev)](https://web.dev/first-meaningful-paint/)
- [First Contentful Paint (web.dev)](https://web.dev/first-contentful-paint/)
- [Largest Contentful Paint (web.dev)](https://web.dev/lighthouse-largest-contentful-paint/)
