---
title: React vs Vue
category: Thoughts
tags:
  - thoughts
  - thought
  - react
  - vue
  - interview
aliases:
  - React vs Vue
  - Vue vs React
related:
  - v-model
  - React.memo
  - React-Hooks
created: 2022-01-02T07:29:00.000Z
updated: 2022-09-06T14:00:06.940Z
---

<Metadata />

- 두 프레임워크 모두 웹 애플리케이션을 제작하기에 충분히 성숙한, 훌륭한 프레임워크이다.
- 생태계 관점
  - Vue는 어느 기업에도 의존하지 않는다.
  - React는 Meta(구: Facebook)의 주도로 빠르게 발전한다.
- 진입 장벽 or 러닝 커브 관점
  - React
    - 특히 Hooks와 관련된 "멘탈 모델"을 확립하는 것이 중요하다.
    - 또한, React는 UI를 만드는 부분만 담당하기 때문에 전역 상태 관리, 라우팅, 데이터 페칭, Scoped CSS 등에 서드 파티 라이브러리를 사용해야 한다.
      - 서드 파티 라이브러리가 많기 때문에 이를 학습하는 비용이 있을 수 있다.
    - 신규 기능이 Vue에 비해 빠르게 추가된다.
  - Vue
    - 라이프사이클, 디렉티브, 믹스인 등 활용할 수 있는 다양한 옵션들이 많이 존재한다.
    - Vue에서는 자체 Scoped CSS 기능이 있고, 공식적으로 관리하는 라우터, 상태 관리 등의 라이브러리가 존재한다.
      - 일관되게 사용할 수 있다.
      - 더 적은 수의 라이브러리에 의존할 수 있다.
- 데이터 바인딩
  - React
    - 데이터(props, state)가 바뀌면 View를 새로 렌더링하는 방식
  - Vue
    - 인스턴스의 데이터가 변경되었을 때, 데이터를 업데이트해서 렌더링
      - [[v-model]]
  - 느낌
    - React는 상태 변경마다 컴포넌트를 렌더링하기 때문에, 함수의 의존성(props)에 따라 최적화해주는 작업들이 조금 번거로울 수 있다.
      - useEffect, useCallback, [[React.memo]]
    - [[React-Hooks|React Hooks]] 멘탈 모델을 확립하는 것
      - React Hooks에 대해 잘못 이해하고 사용할 수 있다.
      - 멘탈 모델을 확립하면 라이프사이클에 의존하지 않고 개발할 수 있어서 편하다.
      - Hooks를 통해 컴포넌트 사이에서 상태 로직을 재사용할 수 있다.
