---
tags:
  - react
publish: true
created: 2022-01-01 21:24
updated: 2022-01-01 21:24
---

- 애플리케이션에서 여러 컴포넌트에 전달해줘야 하는 props의 경우(ex. 선호 언어, UI 테마) 일일이 전달해주는 것이 번거로울 수 있다.
- Context API를 이용하면 **트리 단계마다 명시적으로 props를 넘겨주지 않아도** 이러한 값을 공유하도록 할 수 있다.
- 여러 레벨이 있는 많은 컴포넌트에서 사용 중인 데이터, 변경 되었을 때 널리 "방송"하는 것이 context이다.

## 고려해야할 점

- Context API를 사용하면 컴포넌트를 재사용하기가 어려워진다.
- 여러 레벨에 걸쳐 props를 넘기는 걸 대체하는 데에 context보다 컴포넌트 합성이 더 간단한 해결책일 수 있다.
- [Context로 인한 rerender](https://github.com/facebook/react/issues/15156#issuecomment-474590693)

## Example

- https://codesandbox.io/s/dawn-voice-dt54j

## Related

- [[Context API vs Redux]]

## References

- [Context – React (reactjs.org)](https://ko.reactjs.org/docs/context.html)