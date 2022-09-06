---
title: for of vs for in
category: JavaScript
tags:
  - javascript
aliases:
  - for of vs for in
  - for-of과 for-in의 차이점
  - for-of
  - for-in
related:
  - iterable(반복-가능)
  - JavaScript-객체(Object)
  - enumerable(열거-가능)
created: 2022-01-01T05:50:00.000Z
updated: 2022-09-06T14:00:07.047Z
---

<Metadata />

- for ... of 은 [[iterable(반복-가능)|iterable(반복 가능)]] 에 대해서 반복하고, 각 개별 **속성 값(property value)** 에 대해 실행되는 루프이다.

```js
for (let propertyValue of iterable) {
	statement;
}
```

- for .. in 은 [[JavaScript-객체(Object)|JavaScript 객체(Object)]]에서 [[enumerable(열거-가능)|enumerable(열거 가능)]] 에 대해서 반복하고, 각 개별 **속성 키(property key)** 에 대해 실행되는 루프이다.

```js
for (let propertyKey in enumerable) {
	statement;
}
```

## Related

- [[iterable(반복-가능)|iterable(반복 가능)]]
- [[enumerable(열거-가능)|enumerable(열거 가능)]]

## References

- [for...of - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)
