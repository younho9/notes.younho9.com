---
title: type vs interface
category: TypeScript
tags:
  - typescript
aliases:
  - type과 interface의 차이점
publish: true
created: 2022-01-01 18:27
updated: 2022-01-01 18:27
---

# {{ $frontmatter.title }}

- 개념적인 차이
  - type alias는 타입에 별칭을 붙이는 것
    - primitive 타입도 별칭을 붙이는게 가능
  - interface는 새 객체 타입을 생성하는 것
- 중요한 차이
  - [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
    - interface는 같은 이름의 타입을 선언하는 경우 병합된다.
    - type은 이미 존재하는 같은 이름의 타입을 다시 선언할 수 없다.
  - Union, Intersect 와 같은 기능은 type 에서만 가능하다.
- 직접 겪은 문제
  - index signature를 가진 타입에 type으로 선언된 객체는 할당 가능하지만, interface으로 선언된 객체는 할당할 수 없었다.
  - type은 확장 불가하지만, interface는 선언이 확장될 수 있기 때문이다.
    - https://github.com/microsoft/TypeScript/issues/15300#issuecomment-332366024

> 휴리스틱으로는, 타입의 기능이 필요해질 때까지 interface를 사용하라.

## Related

## References

- [TypeScript: Documentation - Everyday Types (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
- [type-vs-interface](https://i.stack.imgur.com/6Tjyp.png)
