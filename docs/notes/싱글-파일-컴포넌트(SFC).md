---
title: 싱글 파일 컴포넌트(SFC)
category: Vue
tags:
  - vue
aliases:
  - 싱글 파일 컴포넌트(SFC)
  - Vue SFC
  - Single File Component(SFC)
  - SFC
related:
  - 관심사의-분리(Separation-of-Concerns)
created: 2022-08-09T06:25:00.000Z
updated: 2022-09-06T14:00:07.305Z
---

<Metadata />

## 작동 방식

- Vue SFC는 프레임워크 파일 형식이며, [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc)를 통해 표준 JavaScript와 CSS로 미리 컴파일 되어있어야 합니다.
- 컴파일된 SFC는 표준 JavaScript(ES) 모듈입니다.
  - 즉, 적절한 빌드 설정으로 SFC를 모듈처럼 가져올 수 있습니다.

## [[관심사의-분리(Separation-of-Concerns)|관심사의 분리]]에 관하여

- 일부 개발자는 전통적인 웹 개발 시, 본래 사용 목적에 따라 파일 타입이 분리되었던 HTML / CSS / JS를 SFC가 다시 한 곳에 혼합한다는 우려를 가질 수 있다.
  - 이 우려에 대한 대답은 **"관심사항의 분리가 파일 유형의 분리와 동일한 것이 아니다는 관점으로 바라보는 것이 중요하다"** 입니다.
  - 엔지니어링 원칙의 궁극적인 목표는 코드베이스의 유지 관리 가능성을 개선하는 것입니다.
  - 프론트엔드 앱의 사용 목적이 점점 더 복잡해짐에 따라 파일 유형으로만 분리하게 될 경우, 위 목표를 달성하는 데 도움이 되지 않습니다.
  - 현대적인 UI 개발에서 코드베이스를 서로 얽혀 있는 세 개의 거대한 계층으로 나누는 대신 컴포넌트로 나누고 유연하게 결합하여 구성하는 것이 훨씬 더 합리적이라는 것을 발견했습니다.
    - 컴포넌트의 템플릿, 로직, 스타일은 본질적으로 **"동일한 사용 목적"** 으로 결합되어 있으며, 실제로 컴포넌트가 더 응집력 있고 유지 관리가 용이해 집니다.
  - SFC가 마음에 들지 않는다면 별도의 파일로 분리하여 [Src Imports](https://vuejs.org/api/sfc-spec.html#src-imports) 방식으로 사용할 수 있습니다.
