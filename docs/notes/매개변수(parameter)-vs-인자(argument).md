---
tags:
  - vs
aliases:
  - parameter vs argument
  - 매개변수(parameter) vs 인수(argument)
publish: true
created: 2022-01-06 17:37
updated: 2022-01-06 17:37
---

# 매개변수(parameter) vs 인자(argument)

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
