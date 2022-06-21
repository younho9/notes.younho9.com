---
tags:
  - react
  - react-api
publish: true
created: 2022-01-02 16:52
updated: 2022-01-02 16:52
---

# React

- 컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면,
  - React.memo로 감싸서 메모이징(Memoizing)된 컴포넌트 결과를 사용한다.
  - 사용하지 않으면 다시 컴포넌트 내부를 호출
- 메모리에 기록하는 것이기 때문에, 불필요하게 모든 컴포넌트에 사용한다면 메모리 사용량이 증가할 것.
  - 반드시 성능 측정(Profiling)과 동반하여 사용해야한다.

## Related

## References

- [React 최상위 API – React (reactjs.org)](https://ko.reactjs.org/docs/react-api.html#reactmemo)
- [memo()를 하기 전에 — Overreacted](https://overreacted.io/ko/before-you-memo/)
