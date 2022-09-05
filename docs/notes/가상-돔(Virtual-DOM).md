---
title: 가상 돔(Virtual DOM)
category: React
tags:
  - react
aliases:
  - 가상 돔
  - Virtual DOM
publish: true
created: 2022-01-02T04:10:00.000Z
updated: 2022-09-05T03:06:17.976Z
related:
  - Fiber
  - 리액트(React)
  - DOM(Document-Object-Model)
  - 재조정(Reconciliation)
---

# {{ $frontmatter.title }}

- UI의 가상적인 표현, UI를 나타내는 객체
  - React Element와 연관된다.
  - React는 컴포넌트 트리에 대한 추가 정보를 포함하기 위해 [[Fiber]]라는 내부 객체를 사용한다.
- [[리액트(React)]]는 이 가상 돔을 **메모리에 저장**하고, ReactDOM과 같은 라이브러리에 의해 **[[DOM(Document-Object-Model)|DOM(Document Object Model)]]과 동기화** 한다.
  - 이 과정을 [[재조정(Reconciliation)]]이라고 한다.

## Related

## References

- [Virtual DOM과 Internals – React (reactjs.org)](https://ko.reactjs.org/docs/faq-internals.html#gatsby-focus-wrapper)
- [엘리먼트 렌더링 – React (reactjs.org)](https://ko.reactjs.org/docs/rendering-elements.html)
