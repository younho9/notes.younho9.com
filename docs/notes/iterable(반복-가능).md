---
title: iterable(반복 가능)
category: JavaScript
tags:
  - javascript
aliases:
  - iterable(반복 가능)
  - iterable
  - 이터러블
  - 반복 가능
  - 반복 가능한 객체
related:
  - 제너레이터(Generator)
  - for-of-vs-for-in
  - enumerable(열거-가능)
created: 2022-01-01T05:46:00.000Z
updated: 2022-09-05T05:04:22.147Z
---

# {{ $frontmatter.title }}

- [반복 프로토콜(iteration protocols)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols) 을 구현한 객체
  - 내장 iterable에는 Array, Map, Set, String, TypedArray, arguments 객체, [[제너레이터(Generator)|Generator 객체]] 등이 있다.
  - 객체에 직접 반복 프로토콜을 구현하여 iterable로 만들 수 있다.
- [[for-of-vs-for-in]] , 전개 구문(spread operator), 구조 분해 할당(destructuring assignment), yield 등은 iterable과 함께 사용되는 구문과 표현이다.

## 반복 프로토콜

### iterable 프로토콜

| propertyKey         | propertyValue                   |
| ------------------- | ------------------------------- |
| `[Symbol.iterator]` | iterator protocol을 따르는 함수 |

### iterator 프로토콜

- 값들의 순서(sequence)를 만드는 표준 방법
- 객체가 `next()` 메서드를 가지고 있고, 아래의 규칙에 따라 구현되었다면, 그 객체는 iterator이다.
  - 만약 규칙에 따라 잘 정의되지 않았다면, 런타임 에러나 예상치 못한 결과가 나타날 수 있다.

#### `next()` 의 반환 객체

- `done` (boolean)
  - iterator가 마지막 반복 작업을 마쳤을 경우 true.
    - 만약 iterator에 return 값이 있다면, value의 값으로 지정된다.
  - iterator에 작업이 남아있을 경우 false. `done` 프로퍼티가 없는 것과 동일하다.
- `value`
  - Iterator로부터 반환되는 모든 자바스크립트 값.
  - `done`이 true인 경우 생략될 수 있다.

### Example

```js
const iterator = "hello world"[Symbol.iterator]()

iterator.next();
// {value: 'h', done: false}

iterator.next();
// {value: 'e', done: false}

iterator.next();
// {value: 'l', done: false}

...

iterator.next();
// {value: 'd', done: false}

iterator.next();
// {value: undefined, done: true}

iterator.next();
// {value: undefined, done: true}
```

#### [[제너레이터(Generator)|Generator]]와 함께 사용된 iterator

```js
function* idMaker() {
	let index = 0;

	while (true) {
		yield index++;
	}
}

const gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
```

## Related

- [[enumerable(열거-가능)|enumerable(열거 가능)]]
- [[for-of-vs-for-in]]

## References

- [Iteration protocols - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
