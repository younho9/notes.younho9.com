---
title: Options API vs Composition API
category: Vue
tags:
  - vue
aliases:
  - Options API vs Composition API
related:
  - 객체지향-프로그래밍
created: 2022-08-09T06:40:00.000Z
updated: 2022-11-30T10:37:00.393Z
---

- 두 API 스타일 모두 일반적인 사용 사례를 완벽하게 다룰 수 있다.
  - 사실, Options API는 Composition API 위에 구현된다.
  - Vue에 대한 기본 개념과 지식은 두 스타일과 상관없이 동일하다.
- Options API는 일반적으로 [[객체지향-프로그래밍|OOP]] 언어 배경을 가진 사용자를 위한 클래스 기반 모델과 더 잘 맞는 **"컴포넌트 인스턴스(`this`)"의 개념**을 중심으로 한다.
- Composition API는 함수 범위에서 직접 반응형 변수를 선언하고 복잡성을 처리하기 위해 **여러 함수의 상태를 함께 구성**하는데 중점을 둔다.

- Vue 표준 컴포넌트 작성 방식의 변화
  - [클래스 API](https://github.com/vuejs/rfcs/blob/class-api/active-rfcs/0000-class-api.md)
    - `class App extends Vue {}` 형태의 모든 API
  - [컴포지션 API](https://v3-docs.vuejs-korea.org/guide/extras/composition-api-faq.html)
    - 컴포지션 API는 옵션을 선언하는 대신 `import`한 함수를 사용하여 Vue 컴포넌트를 작성할 수 있는 API 세트
- Vue 생태계에서 [클래스 API 방식에 대한 제안을 철회](https://github.com/vuejs/rfcs/pull/17#issuecomment-494242121)하고, 향후 컴포지션 API 방식을 활용하여 발전할 것을 발표
  - 해당 방식을 채택한 Vue 3가 2022년 2월 7일 Vue의 기본 버전이 됨.
    - [Vue 3 as the New Default | The Vue Point (vuejs.org)](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html)
  - 클래스 API 방식은 Vue에서 공식적으로 권장하는 컴포넌트 작성 방식이 아님
    - 이는 Vue의 공식 문서, Vue 생태계가 제공하는 기본 툴링의 옵션에서 제거됨을 의미.
      - 클래스 API 방식을 유지할 경우, Vue 생태계의 컴포넌트 작성 방법에 대한 파편화가 발생
      - 이는 신규 입사자의 학습 곡선을 높일 수 있음.
    - Vue 생태계가 컴포지션 API 기반으로 발전하고 있어, Vue 커뮤니티 라이브러리의 지원을 받을 수 없음
    - Vue 생태계에서 제공하는 개발 환경 지원을 받기 더 어려워짐
      - 실제로 Vue IDE 플러그인에서 클래스 API 방식에 대한 TypeScript 지원에 이슈가 발생하지만 메인테이너는 공식적으로 권장하는 방식이 아닌 방식에 대해 지원하려고 하지 않음,
    - 또한 클래스 API를 활용하는 플러그인들(ex. vue-class-component)은 공식적인 플러그인이 아니라 서드파티 라이브러리로, 메인테이너의 유지관리 문제와 파편화가 발생.
      - [Deprecate vue-class-component · Issue #569 · vuejs/vue-class-component (github.com)](https://github.com/vuejs/vue-class-component/issues/569)
  - 기존 클래스 API 방식은 사용했던 이유는 크게 2가지
    - 더 나은 TypeScript 지원
    - OOP 언어 배경을 가진 사용자를 위한 클래스 기반 모델 제공
  - 하지만 컴포지션 API는 다음의 장점이 있음
    - 더 나은 타입 추론
      - TypeScript는 보다 강력한 코드를 작성하고, 보다 자신 있게 변경하고, IDE 지원을 통해 뛰어난 개발 경험을 제공
      - 그러나 2013년에 구상된 Vue의 옵션 API는 유형 추론을 염두에 두지 않고 설계되었습니다. 유형 추론이 옵션 API와 함께 작동하도록 하기 위해 일부 [터무니없이 복잡한 유형 구조](https://github.com/vuejs/core/blob/44b95276f5c086e1d88fa3c686a5f39eb5bb7821/packages/runtime-core/src/componentPublicInstance.ts#L132-L165)를 구현해야 했음. 이 모든 노력에도 불구하고 옵션 API에 대한 유형 추론은 여전히 믹스인 및 의존성 주입에 대해 분해될 수 있음.
      - 이로 인해 TS와 함께 Vue를 사용하려는 많은 개발자가 `vue-class-component`로 구동되는 클래스 API에 의존하게 됨. 그러나 클래스 기반 API는 2019년 Vue 3가 개발될 때 2단계 제안에 불과했던 언어 기능인 ES 데코레이터에 크게 의존함 .
      - Vue는 불안정한 제안에 공식 API를 기반으로 하는 것은 너무 위험하다고 느꼈고, 그 이후로 데코레이터 제안은 또 다른 완전한 점검을 거쳤지만 현재 시점에서 아직 3단계에 도달하지 않았음. 또한 클래스 기반 API는 옵션 API와 유사한 로직 재사용 및 구성 제한이 있음.
      - 이에 비해 컴포지션 API는 기본적으로 유형 친화적인 일반 변수와 함수를 주로 사용함. 컴포지션 API로 작성된 코드는 수동 유형 힌트가 거의 필요 없이 전체 유형 추론을 사용할 수 있음.
    - 더 나은 로직 재사용성
      - 기존 여러 컴포넌트에서 공통되는 로직을 재사용하기 위해서는 mixin, extend를 통해 베이스 컴포넌트를 상속하는 방식을 사용해야 함.
      - 하지만 상속의 방식은 두 가지 이상의 공통 로직을 재사용(합성)하는데에 어려움이 있음.
        - [합성 (Composition) vs 상속 (Inheritance) – React (reactjs.org)](https://ko.reactjs.org/docs/composition-vs-inheritance.html)
      - composition api는 공통 로직을 컴포저블 함수의 형태로 분리하여 깔끔하고 효율적인 로직 재사용을 제공함.
    - 보다 유연한 코드 구성
      - 기존 컴포넌트 작성 방식은 하나의 논리적 문제를 처리하는 코드를 파일의 다른 부분으로 분할되게 만듬.
      - 컴포지션 API는 특정 논리적 문제를 하나의 파일, 하나의 함수로 분리하여 구성할 수 있음.

## 권장사항

- 제품용(Production)으로 사용하는 경우
  - 빌드 도구를 사용하지 않거나 주로 복잡성이 낮은 시나리오에서 사용할 계획이라면, Options API를 사용하세요.
  - 규모가 있는 앱의 전체를 구축하려는 경우 Composition API + SFC를 사용하세요.

## References

- [API Styles | Vue.js (vuejs.org)](https://vuejs.org/guide/introduction.html#api-styles)
- [Composition API FAQ | Vue.js (vuejs.org)](https://vuejs.org/guide/extras/composition-api-faq.html#composition-api-faq)

#vue
