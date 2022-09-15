---
title: TDZ(Temporal Dead Zone)
category: JavaScript
tags:
  - javascript
  - terms
  - glossary
aliases:
  - TDZ(Temporal Dead Zone)
  - TDZ
  - 일시적 사각 지대
related:
  - 실행-컨텍스트(Execution-Context)
  - 호이스팅(hoisting)
created: 2021-12-31T14:48:00.000Z
updated: 2022-09-06T14:00:06.988Z
---

## var 변수의 라이프 사이클

![var-lifecycle.png (1016×229) (poiemaweb.com)](https://poiemaweb.com/img/var-lifecycle.png)

1. 함수가 실행되기 전에 [[실행-컨텍스트(Execution-Context)|실행 컨텍스트(Execution Context)]]를 생성하는 과정에서 선언 단계와 초기화 단계가 함께 일어난다.
   - 변수 객체(Variable Object)에 foo 프로퍼티를 undefined로 초기화한다.
2. 함수가 실행되면서 할당문을 만나면, 할당 단계가 이루어진다.

## let, const 변수의 라이프 사이클

![let-lifecycle.png (931×337) (poiemaweb.com)](https://poiemaweb.com/img/let-lifecycle.png)

1. 함수가 실행되기 전에 [[실행-컨텍스트(Execution-Context)|실행 컨텍스트(Execution Context)]]를 생성하는 과정에서 선언 단계가 일어난다.
2. 선언 단계와 초기화 단계 사이에 "일시적 사각지대"가 존재한다.
   - 초기화 단계 이전에 변수를 참조하면 참조에러가 발생한다.
3. 함수가 실행되면서 변수 선언문을 만나면 초기화 단계가 이루어진다.
4. 변수 할당문을 만나면 할당 단계가 이루어진다.

## Example

```js
function createTDZ(a = b, b) {
	// ReferenceError: Cannot access 'b' before initialization
}

createTDZ(undefined, 1);
```

```js
let a = f(); // 1
const b = 2;
function f() {
	return b;
} // ReferenceError: b is not defined
```

## Related

- [[호이스팅(hoisting)]]

## References

- [let, const | PoiemaWeb](https://poiemaweb.com/es6-block-scope#13-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)
- [Why is there a “temporal dead zone” in ES6? (2ality.com)](https://2ality.com/2015/10/why-tdz.html)
- [JavaScript의 TDZ(Temporal Dead Zone)란 무엇입니까? (freecodecamp.org)](https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/)
