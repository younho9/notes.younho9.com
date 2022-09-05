---
title: 의존성 주입(Dependency Injection)
category: Glossary
tags:
  - glossary
  - terms
aliases:
  - 의존성 주입(Dependency Injection)
  - DI
  - Dependency Injection
created: 2022-01-10T09:48:00.000Z
updated: 2022-09-05T05:04:22.297Z
---

# {{ $frontmatter.title }}

- 개체가 **의존하는 다른 개체들을 주입 받는 기술**이다.

  - 자동차가 엔진을 사용하는 경우
    - 자동차에서 엔진을 만들어서 사용하면,
      - 자동차를 테스트할 때, 엔진을 바꿀 수 없다.
      - 엔진이 변경되면, 자동차의 테스트에도 영향을 준다.
    - 엔진을 만들어서 자동차에 넣으면,
      - 엔진의 인터페이스를 정의한다.
      - 엔진의 인터페이스를 만족하는 실제 엔진을 만들어 엔진을 테스트한다.
      - 엔진의 인터페이스를 만족하는 테스트용 엔진을 탑재하여 자동차를 테스트한다.

- 프로그래머 대신 의존성을 주입해주는 프로그램(Dependency Injector)을 사용한다.
- new를 직접하지 않고 IOC 컨테이너가 하는 것이 핵심이다.

## Related

## References

- [Dependency injection 과 inversify, 그리고 적용해보기 (slides.com)](https://slides.com/woongjae/inversify)
- [Vue.js + TypeScript 앱에서 IoC 컨테이너 사용하기 | Aliencube](https://blog.aliencube.org/ko/2017/03/21/using-ioc-container-in-vuejs-typescript-app/)
