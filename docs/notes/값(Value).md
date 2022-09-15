---
title: 값(Value)
category: JavaScript
tags:
  - javascript
  - terms
  - glossary
aliases:
  - 값(Value)
  - value
  - 값
related:
  - 원시-값(Primitive)
  - JavaScript-객체(Object)
created: 2022-01-06T05:01:00.000Z
updated: 2022-09-06T14:00:07.123Z
---

JavaScript에는 크게 두 가지 유형의 값, [[원시-값(Primitive)|원시 값(Primitive)]]과 [[JavaScript-객체(Object)|JavaScript 객체(Object)]]이 있다.

- 원시 값은 **'값 그대로'** 저장, 할당, 복사된다.
- 객체는 **'참조에 의해(by reference)''** 저장, 할당 복사된다.

## 값과 변수

JavaScript에서 원시 값은 불변한다.

```js
let str = 'yellow';
str[0] = 'h';
console.log(str); // 'yellow'
```

하지만 **값을 변경하는 것**과 **변수에 값을 할당하는 것**을 혼동해선 안된다.

```js
let str = 'yellow';
str = 'hellow';
console.log(str); // 'hellow'
```

![Variables are like wires](https://user-images.githubusercontent.com/29270715/73742788-4c980b80-4775-11ea-8831-c13b9b1792e2.png)

> "변수는 와이어와 같다" - [Just JavaScript](https://justjavascript.com/)

## Related

- [[원시-값(Primitive)|원시 값(Primitive)]]
- [[JavaScript-객체(Object)|JavaScript 객체(Object)]]

## References

- [JavaScript의 타입과 자료구조 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
- [자료형 (javascript.info)](https://ko.javascript.info/types)
- [참조에 의한 객체 복사 (javascript.info)](https://ko.javascript.info/object-copy)
