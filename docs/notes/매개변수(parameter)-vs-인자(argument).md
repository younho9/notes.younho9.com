---
title: 매개변수(parameter) vs 인자(argument)
category: Glossary
tags:
  - glossary
  - vs
  - terms
aliases:
  - 매개변수(parameter) vs 인자(argument)
  - parameter vs argument
  - 매개변수(parameter) vs 인수(argument)
related:
  - 값(Value)
created: 2022-01-06T08:37:00.000Z
updated: 2022-09-05T05:04:22.237Z
---

# {{ $frontmatter.title }}

- 매개변수(parameter)는 함수 선언에 속한 변수를 말한다.
- 인자(argument)는 매개변수를 통해 함수에 전달된 실제 값을 말한다.

```js
const sum = function (a, b) {
	return a + b;
};

sum(1, 2);
```

-> `a` 와 `b`는 함수의 매개변수(parameter)이고, `1`, `2` 는 인자(argument)이다.

> 매개변수는 변수, 인자는 값

## Related

- [[값(Value)|값(Value)과 변수(variable)]]

## References

- [argument vs parameter - HTML DOM (thisthat.dev)](https://thisthat.dev/argument-vs-parameter/)
