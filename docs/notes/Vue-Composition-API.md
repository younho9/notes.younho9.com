---
title: Vue Composition API
category: Vue
tags:
  - vue
aliases:
  - Vue Composition API
related:
  - Options-API-vs-Composition-API
created: 2022-07-13T00:33:00.000Z
updated: 2022-09-06T14:00:07.002Z
---

- 컴포지션 API는 options를 선언하는 것 대신 함수를 import 하여 Vue 컴포넌트를 작성할 수 있도록 하는 API 세트로 아래의 API들을 포함한다.
  - Reactive API : `ref()`, `reactive()`
  - Lifecycle Hooks : `onMounted()`, `onUnmounted()`
  - Dependency Injection : `provide()`, `inject()`
- 왜 컴포지션 API 인가?

  - **더 나은 로직 재사용성**
    - [Composables](https://vuejs.org/guide/reusability/composables.html) 함수의 형태로 깔끔하고 효율적인 로직 재사용이 가능하다.
    - Options API의 기본 로직 재사용 매커니즘인 [믹스인의 모든 단점](https://vuejs.org/guide/reusability/composables.html#comparisons-with-other-techniques)을 해결한다.
    - [VueUse](https://vueuse.org/)와 같은 Composables 유틸리티 프로젝트가 있다.
  - **보다 유연한 코드 구성**

    - ![composition-api-after.e3f2c350.png (1200×1201) (vuejs.org)](https://vuejs.org/assets/composition-api-after.e3f2c350.png)
    - 동일한 논리적 문제와 관련된 코드를 이제 함께 그룹화할 수 있음.

  - **더 나은 타입 추론**
    - Options API는 타입 추론을 염두에 두지 않고 설계됨. ([그로 인해 터무니 없이 복잡한 타입을 구현해야 했음.](https://github.com/vuejs/core/blob/44b95276f5c086e1d88fa3c686a5f39eb5bb7821/packages/runtime-core/src/componentPublicInstance.ts#L132-L165))
    - TypeScript와 함께 사용하려는 많은 개발자가 [`vue-class-component`](https://class-component.vuejs.org/) 를 사용하게 됨.
      - 그러나 클래스 기반 API는 2019년 Vue3가 개발될 때 2단계 제안에 불과했던 ES 데코레이터 기능에 크게 의존함.
        - 2022년 3단계에 도달함
      - 클래스 기반 API는 Options API와 유사한 로직 재사용 및 구성 제한이 있다.
  - **더 작은 프로덕션 번들 및 더 적은 오버헤드**

## Related

- [[Options-API-vs-Composition-API|Options API vs Composition API]]

## References

- [Composition API FAQ | Vue.js (vuejs.org)](https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api)
