---
title: 동일성(equality)
category: JavaScript
tags:
  - javascript
aliases:
  - 동일성(equality)
  - 참조 동일성
  - 비교
related:
  - 형-변환(Type-conversion)
  - pass-by-reference-vs-pass-by-value
created: 2022-01-02T08:32:00.000Z
updated: 2022-11-23T02:23:18.771Z
---

JavaScript의 동일성 비교에는 여러 가지 방법이 있다.

- `==` (동등 연산자) : 추상 비교(Abstract equality) 또는 느슨한 비교(Loose equality) 또는 동등 비교
  - 두 가지를 비교할 때 [[형-변환(Type-conversion)|형 변환(Type conversion)]]이 발생한다.
- `===` (엄격 동등 연산자) : 엄격 비교(Strict equality) 또는 일치 비교
  - 동등 비교와 비슷하지만 형 변환을 하지 않는다.
- `Object.is` : 등가 비교(Same value equality)
  - 엄격 동등 비교와 두 가지 케이스를 제외하고 동일하다.

|               | `Object.is` | `===` |
| ------------- | ----------- | ----- |
| `NaN === NaN` | true        | false |
| `-0 === 0`    | false       | true  |

## 참조 동일성

객체 비교 시 동등 연산자(`==`)와 일치 연산자(`===`)는 동일하게 동작한다. 비교 시 피연산자인 두 객체가 동일한 참조를 가르키는 경우에 `true`를 반환한다.

두 변수가 같은 객체를 참조하는 예시

```js
let a = {};
let b = a; // 참조에 의한 복사

console.log(a == b); // true, 두 변수는 같은 객체를 참조합니다.
console.log(a === b); // true
```

두 변수가 독립된 객체를 참조하는 예시

```js
let a = {};
let b = {}; // 독립된 두 객체

console.log(a == b); // false
console.log(a === b); // false
```

## Related

- [[pass-by-reference-vs-pass-by-value|pass by reference vs pass by value]]

## References

- [JS Comparison Table (dorey.github.io)](https://dorey.github.io/JavaScript-Equality-Table/)
- [동치 비교 및 동일성 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [비교 연산자 (javascript.info)](https://ko.javascript.info/comparison)
