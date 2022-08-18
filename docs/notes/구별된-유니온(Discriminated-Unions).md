---
title: 구별된 유니온(Discriminated Unions)
category: TypeScript
tags:
  - typescript
aliases:
  - 서로소 유니온
publish: true
created: 2022-01-09 10:15
updated: 2022-01-09 10:15
---

# {{ $frontmatter.title }}

- 타입스크립트에서 template literal member를 Union을 구분하는데 사용할 수 있다.

```ts
type Shape =
	| {kind: 'circle'; radius: number}
	| {kind: 'square'; x: number}
	| {kind: 'triangle'; x: number; y: number};

function area(s: Shape) {
	if (s.kind === 'circle') {
		return Math.PI * s.radius * s.radius;
	} else if (s.kind === 'square') {
		return s.x * s.x;
	} else {
		return (s.x * s.y) / 2;
	}
}
```

## Related

## References

- [TypeScript: Documentation - TypeScript for Functional Programmers (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions)
