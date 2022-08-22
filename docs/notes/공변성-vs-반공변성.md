---
title: 공변성 vs 반공변성
category: TypeScript
tags:
  - typescript
aliases:
  - covariant vs contravariant
publish: true
created: 2022-01-14T09:28:00.000+09:00
updated: 2022-08-22T11:43:11.110+09:00
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

## Related

## References

<!-- @case-police-ignore Seo -->

- [TypeScript 에서의 공변성과 반공변성 (strictFunctionTypes) | by Seo Yeon, Lee | Medium](https://iamssen.medium.com/typescript-%EC%97%90%EC%84%9C%EC%9D%98-%EA%B3%B5%EB%B3%80%EC%84%B1%EA%B3%BC-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1-strictfunctiontypes-a82400e67f2)
