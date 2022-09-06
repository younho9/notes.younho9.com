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
updated: 2022-09-06T14:00:06.817Z
---

<Metadata />

- 두 API 스타일 모두 일반적인 사용 사례를 완벽하게 다룰 수 있다.
  - 사실, Options API는 Composition API 위에 구현된다.
  - Vue에 대한 기본 개념과 지식은 두 스타일과 상관없이 동일하다.
- Options API는 일반적으로 [[객체지향-프로그래밍|OOP]] 언어 배경을 가진 사용자를 위한 클래스 기반 모델과 더 잘 맞는 **"컴포넌트 인스턴스(`this`)"의 개념**을 중심으로 한다.
- Composition API는 함수 범위에서 직접 반응형 변수를 선언하고 복잡성을 처리하기 위해 **여러 함수의 상태를 함께 구성**하는데 중점을 둔다.

## 권장사항

- 제품용(Production)으로 사용하는 경우
  - 빌드 도구를 사용하지 않거나 주로 복잡성이 낮은 시나리오에서 사용할 계획이라면, Options API를 사용하세요.
  - 규모가 있는 앱의 전체를 구축하려는 경우 Composition API + SFC를 사용하세요.

## References

- [API Styles | Vue.js (vuejs.org)](https://vuejs.org/guide/introduction.html#api-styles)
- [Composition API FAQ | Vue.js (vuejs.org)](https://vuejs.org/guide/extras/composition-api-faq.html#composition-api-faq)
