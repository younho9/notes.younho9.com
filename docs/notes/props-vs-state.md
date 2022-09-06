---
title: Props vs State
category: React
tags:
  - react
aliases:
  - Props vs State
  - props와 state의 차이점
  - 속성(props)와 상태(state)의 차이점
  - 속성
  - 상태
  - 속성(props)
  - 상태(state)
related:
  - 매개변수(parameter)-vs-인자(argument)
created: 2022-01-01T11:55:00.000Z
updated: 2022-09-06T14:00:07.082Z
---

<Metadata />

- 두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖고 있다.
  - 둘 다 렌더 업데이트를 트리거한다.
- props는 [[매개변수(parameter)-vs-인자(argument)|매개변수(parameter) vs 인자(argument)]]와 같다.
  - 컴포넌트는 props를 변경할 수 없다. (readonly)
  - props를 변경하기 위해서는 부모 컴포넌트에서 props의 상태를 변경할 수 있는 함수를 props로 넘겨주어야 한다.
- state는 컴포넌트의 메모리와 같다.
  - 컴포넌트가 일부 정보를 추적하고, 상호작용에 대한 응답으로 변경할 수 있다.
  - 함수 내의 지역 변수처럼 컴포넌트 안에서 관리된다.

## References

- [컴포넌트 State – React (reactjs.org)](https://ko.reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)
- [React Fundamentals: Props vs State (kentcdodds.com)](https://kentcdodds.com/blog/props-vs-state)
- [React hooks: not magic, just arrays | by Rudi Yardley | Medium](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
