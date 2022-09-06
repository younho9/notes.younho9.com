---
title: 함수 선언 vs 함수 표현식 vs 화살표 함수
category: JavaScript
tags:
  - javascript
aliases:
  - 함수 선언 vs 함수 표현식 vs 화살표 함수
related:
  - this
  - 매개변수(parameter)-vs-인자(argument)
created: 2022-01-09T01:55:00.000Z
updated: 2022-09-06T14:00:07.610Z
---

<Metadata />

```js
const greet = function (who) {
	return `Hello, ${who}!`;
};

// vs

const greet = (who) => {
	return `Hello, ${who}!`;
};
```

## this

- 일반 함수에서 [[this]]는 동적이다
- 화살표 함수에서 this를 바인딩하지 않는다.
  - 항상 외부 함수의 this 값과 같다. (Lexical Scope)

## 생성자

- 일반 함수는 객체를 생성하는 생성자로 사용할 수 있다.
- 화살표 함수는 생성자로 사용할 수 없다.

## arguments 객체

- 일반 함수는 함수 안에서 arguments 객체를 통해 [[매개변수(parameter)-vs-인자(argument)|매개변수(parameter) vs 인자(argument)]] 정보를 볼 수 있다.
- 화살표 함수는 this와 마찬가지로 arguments 객체가 없다.
  - 외부 함수의 arguments와 같다. (Lexical Scope)

## References

- [5 Differences Between Arrow and Regular Functions (dmitripavlutin.com)](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
- [함수 선언 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function)
- [함수 표현식 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)
- [화살표 함수 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
