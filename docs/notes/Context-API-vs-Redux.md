---
title: Context API vs Redux
category: React
tags:
  - react
  - redux
  - vs
aliases:
  - Context API vs Redux
  - Context API와 Redux의 차이점
related:
  - useState-vs-useReducer
  - Context-API
created: 2022-01-05T12:24:00.000Z
updated: 2022-09-06T14:00:06.553Z
---

- 정확히는 Context API는 상태를 관리하는 도구가 아니기 때문에 [[useState-vs-useReducer|useState vs useReducer]]와 Context API를 조합하여 사용한다고 할 수 있다.
- 다음과 같은 공통점이 있다.
  - 저장된 값
  - reducer 함수
  - dispatch 함수
- Redux와의 가장 큰 차이는, Context는 새 상태 값으로 변경하면, 변경된 상태 값에 영향을 받지 않더라도 해당 컨텍스트를 구독하는 모든 컴포넌트가 재렌더링 된다는 것이다. Redux는 저장소 상태의 특정 부분을 구독할 수 있고, 해당 값이 변경될 때만 다시 렌더링할 수 있다.

## 사용 사례 요약

- [[Context-API|Context API]]
  - 소품 드릴 없이 중첩된 구성 요소에 값 전달
- [[useState-vs-useReducer|useState vs useReducer]]
  - 리듀서 기능을 사용하여 다소 복잡한 React 컴포넌트 상태 관리
- Context API + useReducer
  - 리듀서 기능을 사용하여 다소 복잡한 React 구성 요소 상태 관리 및 prop-drilling 없이 해당 상태 값을 중첩 구성 요소로 전달
- Redux
  - 감속기 기능을 사용하여 중간에서 고도로 복잡한 상태 관리
  - 시간이 지남에 따라 상태가 언제, 왜, 어떻게 변경되었는지에 대한 추적성
  - UI 레이어와 완전히 분리된 상태 관리 로직을 작성하려는 경우
  - 서로 다른 UI 레이어 간에 상태 관리 로직 공유
  - 작업이 디스패치될 때 추가 로직을 추가하기 위해 Redux 미들웨어의 기능을 사용합니다.
  - Redux 상태의 일부를 유지할 수 있음
  - 개발자가 재생할 수 있는 버그 보고서 활성화
  - 개발 중 로직 및 UI의 더 빠른 디버깅
- Redux + React-Redux
  - Redux의 모든 사용 사례와 React 구성 요소의 Redux 저장소와 상호 작용

## References

- [Blogged Answers: Why React Context is Not a "State Management" Tool (and Why It Doesn't Replace Redux) · Mark's Dev Blog (isquaredsoftware.com)](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/)
