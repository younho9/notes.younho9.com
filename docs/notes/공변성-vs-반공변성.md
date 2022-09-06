---
title: 공변성 vs 반공변성
category: TypeScript
tags:
  - typescript
aliases:
  - 공변성 vs 반공변성
  - covariant vs contravariant
created: 2022-01-14T00:28:00.000Z
updated: 2022-09-06T02:59:43.945Z
---

# {{ $frontmatter.title }}

```ts
declare let foo: {a: number};
declare let bar: {a: number; b: string};

foo = bar;
bar = foo; // error! 서브타입에 슈퍼타입을 대입할 수 없다.
```

```ts
declare let foo: (a: number) => void;
declare let bar: (a: number, b: string) => void;

foo = bar; // error! a만 인자로 받는 foo에 a, b를 처리하는 bar를 대입할 수 없다.
bar = foo;
```

## References

<!-- @case-police-ignore Seo -->

- [TypeScript 에서의 공변성과 반공변성 (strictFunctionTypes) | by Seo Yeon, Lee | Medium](https://iamssen.medium.com/typescript-%EC%97%90%EC%84%9C%EC%9D%98-%EA%B3%B5%EB%B3%80%EC%84%B1%EA%B3%BC-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1-strictfunctiontypes-a82400e67f2)
