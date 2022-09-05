---
title: var vs let vs const
category: JavaScript
tags:
  - javascript
aliases:
  - var vs let vs const
  - 'var, let, const의 차이점'
related:
  - 스코프(Scope)
  - 호이스팅(hoisting)
  - TDZ(Temporal-Dead-Zone)
created: 2021-12-31T12:51:00.000Z
updated: 2022-09-05T05:04:22.186Z
---

# {{ $frontmatter.title }}

- var는 [[스코프(Scope)|함수 스코프]]이고 let, const는 [[스코프(Scope)|블록 스코프]]이다.

```js
if (true) {
	var foo = true;
	let bar = true; // 또는 const
}

console.log(foo); // true
console.log(bar); // bar is not defined
```

- 키워드 없이 변수를 선언하는 것은 호출 시점에 전역 객체에 프로퍼티를 할당하는 것으로 어떤 스코프에서 선언하든 [[스코프(Scope)|전역 스코프]]가 된다.

```js
function fn() {
	foo = 123; // window.foo = 123과 동일하다.
	var bar = 123;
}

fn();

console.log(foo); // 123
console.log(bar); // bar is not defined
```

- var는 재선언을 허용하지만 let, const는 재선언을 허용하지 않는다.

```js
let foo;
let foo; // SyntaxError: 'user' has already been declared

var bar;
var bar;
```

- var, let, const는 모두 [[호이스팅(hoisting)|호이스팅]]되지만, var와 달리 let, const는 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.
  - 이는 let, const 변수에는 [[TDZ(Temporal-Dead-Zone)|TDZ(Temporal Dead Zone)]]이라는 라이프사이클 단계가 었기 때문이다.

```js
var phrase = 'bye';

function sayHi() {
	console.log(phrase); // undefined

	phrase = 'Hello';

	console.log(phrase); // Hello

	var phrase;
}

sayHi();
```

```js
var phrase = 'bye';

function sayHi() {
	console.log(phrase); // ReferenceError: Cannot access 'phrase' before initialization
	// 호이스팅되지 않았다면 전역 변수를 참조했을 것이다.

	phrase = 'Hello';

	console.log(phrase);

	let phrase;
}

sayHi();
```

## Related

- [[스코프(Scope)]]
- [[호이스팅(hoisting)]]

## References
