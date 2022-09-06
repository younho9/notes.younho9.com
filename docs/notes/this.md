---
title: this
category: JavaScript
tags:
  - javascript
aliases:
  - this
created: 2021-12-31T08:30:00.000Z
updated: 2022-09-06T14:00:07.092Z
---

<Metadata />

## 일반 함수

- this는 함수의 선언 위치와 상관 없이, 어떻게 호출(call) 되는지에 따라 달라진다.

## 화살표 함수

- 화살표 함수는 this를 바인딩하지 않는다.
  - 함수가 선언되는 시점에 둘러싸는 범위의 이름에 대한 참조이다.

## 명시적 바인딩

- [Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  - call과 달리 두 번째 인자로 인수 배열을 받는다.
- [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
  - apply와 달리 두 번째 인자부터 인수 목록으로 받는다.
- [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
  - this와 인자 목록을 바인드한 함수를 리턴한다.

## Examples

```js
var someValue = 'hello';

function outerFunc() {
	console.log(this.someValue);
	this.innerFunc();
}

const obj = {
	someValue: 'world',
	outerFunc,
	innerFunc: function () {
		console.log("innerFunc's this : ", this);
	},
};

obj.outerFunc();
// => 'world'
// => innerFunc's this : { someValue: 'world', outerFunc: f, innerFunc: f}

outerFunc();
// => 'hello'
// => Uncaught TypeError: this.innerFunc is not a function
```

## References

- [자바스크립트는 왜 프로토타입을 선택했을까. 프로토타입으로 검색하면 으레 나오는 서두처럼 저 또한 자바스크립트를… | by 임성묵 (Sungmook Lim) | Dec, 2021 | Medium](https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42)
- [자바스크립트 this 알아보기 - YouTube](https://www.youtube.com/watch?v=fllhA9yGSYE)
