---
title: will-change
category: CSS
tags:
  - css
created: 2021-12-30T04:06:00.000Z
updated: 2021-12-30T04:16:00.000Z
---

# {{ $frontmatter.title }}

> 새 레이어를 생성하는 가장 좋은 방법은 `will-change` CSS 속성을 사용하는 것입니다. - [페인트 복잡성 단순화 및 페인트 영역 줄이기  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas?hl=ko#:~:text=%EC%83%88%20%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC%20%EC%83%9D%EC%84%B1%ED%95%98%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EC%A2%8B%EC%9D%80%20%EB%B0%A9%EB%B2%95%EC%9D%80%20will%2Dchange%20CSS%20%EC%86%8D%EC%84%B1%EC%9D%84%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EA%B2%83%EC%9E%85%EB%8B%88%EB%8B%A4)

- 요소에 예상되는 변화의 종류에 관한 힌트를 브라우저에게 제공한다.
  - 실제 요소가 변화되기 전에 적절하게 최적화할 수 있다.
  - 새 컴포지터(Compositor) 레이어를 강제로 생성한다고 표현한다. - [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- [[리플로우(Reflow)-vs-리페인트(Repaint)|리플로우(Reflow) vs 리페인트(Repaint)]]를 일으키지 않는 속성(transfroms, opacity)을 변경하는 요소가 자체 컴포지터 레이어에 있어야 한다.
- 이전 브라우저나 will-change를 지원하지 않는 브라우저의 경우에는 translateZ를 사용한다.

```css
.component {
	will-change: transform;
}
```

## Related

- [[하드웨어-가속|하드웨어 가속]]

## References

- [페인트 복잡성 단순화 및 페인트 영역 줄이기  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas?hl=ko)
- [컴포지터(compositor) 전용 속성 고수 및 레이어 수 관리  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count?hl=ko)
- [will-change - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/CSS/will-change)
- [Dev.Opera — Everything You Need to Know About the CSS will-change Property](https://dev.opera.com/articles/css-will-change-property/)
- [카카오웹툰은 하드웨어 가속과 IntersectionObserver를 어떻게 사용했을까? | 카카오엔터테인먼트 FE 기술블로그 (kakaoent.com)](https://fe-developers.kakaoent.com/2021/211202-gpu-intersection-observer/)
