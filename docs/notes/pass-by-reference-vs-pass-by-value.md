---
title: Pass by Reference vs Pass by Value
category: Programming
tags:
  - programming
  - vs
aliases:
  - Pass by Reference vs Pass by Value
  - 참조로 전달 vs 값으로 전달
related:
  - 매개변수(parameter)-vs-인자(argument)
  - 값(Value)
  - 원시-값(Primitive)
  - JavaScript-객체(Object)
  - 부수-효과(Side-Effect)
  - 변성(Mutable)-vs-불변성(Immutable)
created: 2022-01-06T04:11:00.000Z
updated: 2022-09-05T05:04:22.169Z
---

# {{ $frontmatter.title }}

![pass-by-reference-vs-pass-by-value-animation](https://blog.penjee.com/wp-content/uploads/2015/02/pass-by-reference-vs-pass-by-value-animation.gif)

함수를 호출할 때, 함수에 전달된 [[매개변수(parameter)-vs-인자(argument)|매개변수(parameter) vs 인자(argument)]]는 매개변수에 복사된다.

```js
function showMessage(from, text) {
	console.log(from); // => 'Ahn'
	console.log(text); // => 'Hello'
}

showMessage('Ann', 'Hello!');
```

JavaScript [[값(Value)]]의 특성에 의해 [[원시-값(Primitive)|원시 값(Primitive)]]은 **'값 그대로'** 복사되지만, [[JavaScript-객체(Object)|JavaScript 객체(Object)]]는 **'참조(reference)'** 가 복사된다.

이를 구분하기 위해 참조로 전달(pass by reference)과 값으로 전달(pass by value)라는 용어를 사용하지만, 기존 변수에 값을 복사하는 원리와 동일하다고 볼 수 있다.

```js
let foo = 1;
let bar = foo;

bar += 1;
console.log(foo); // 1

let objA = {
	foo: 1,
};
let objB = objA;

objB.foo += 1;
console.log(objB.foo); // 2
```

함수에서 참조로 전달된 객체가 변하는 [[부수-효과(Side-Effect)|부수 효과(Side Effect)]]를 막기 위해 전달된 객체를 [[변성(Mutable)-vs-불변성(Immutable)|변성(Mutable) vs 불변성(Immutable)]]하게 통제하는 방법을 사용하기도 한다.

## Related

- [[값(Value)]]
- [[원시-값(Primitive)|원시 값(Primitive)]]
- [[JavaScript-객체(Object)|JavaScript 객체(Object)]]

## References

- [Functions - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations)
- [참조에 의한 객체 복사 (javascript.info)](https://ko.javascript.info/object-copy)
