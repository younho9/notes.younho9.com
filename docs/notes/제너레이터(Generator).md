---
title: 제너레이터(Generator)
category: JavaScript
tags:
  - javascript
aliases:
  - 제너레이터
  - Generator
publish: true
created: 2022-01-01T08:16:00.000Z
updated: 2022-01-01T08:16:00.000Z
---

# {{ $frontmatter.title }}

- 일반 함수는 **0개 혹은 하나의 값만을 반환(return)** 한다.
- 제너레이터는 **여러 개의 값을 필요에 따라 하나 씩 산출(yield)** 할 수 있다.

## 제너레이터 함수

- 제너레이터는 특별한 문법 구조(`function*`)를 가지는 **제너레이터 함수**를 통해 만들 수 있다.
- 제너레이터 함수는 **제너레이터 객체**를 리턴하는데, 이는 [[iterable(반복-가능)|iterable(반복 가능)]]이다.

```js
function* generateSequence() {
	yield 1;
	yield 2;
	return 3;
}

// '제너레이터 함수'는 '제너레이터 객체'를 생성한다.
const generator = generateSequence();

const one = generator.next();
console.log(one);
// => {value: 1, done: false}

const two = generator.next();
console.log(two);
// => {value: 2, done: false}

const three = generator.next();
console.log(three);
// => {value: 3, done: true}
```

## 제너레이터와 [[iterable(반복-가능)|iterable(반복 가능)]]

- **제너레이터 객체**는 이터러블이다.
- 따라서 [[for-of-vs-for-in]] 으로 반복해서 값을 얻을 수 있다.

```js
function* generateSequence() {
	yield 1;
	yield 2;
	return 3; // ... (2)
}

const generator = generateSequence();

for (const value of generator) {
	console.log(value); // 1, 2가 출력됨 ... (1)
}
```

- 이 때, (1)에서 1, 2만 출력되는 이유는, (2)에서 return 문을 사용했기 때문이다.
  - (2)에서 return 문을 사용하면 값이 `{value: 3, done: true}` 로 설정되는데, for ... of 반복문이 `done: true` 일 때 값을 무시하기 때문이다.
  - 모든 값이 출력되길 원한다면 `yield` 로 값을 반환해야 한다.

```js
function* generateSequence() {
	yield 1;
	yield 2;
	yield 3;
}

const generator = generateSequence();

for (const value of generator) {
	console.log(value); // 1, 2, 3
}
```

- 또한, 제너레이터는 이터러블 객체이므로 전개 문법(spread operator) 같은 기능을 사용할 수 있다.

```js
function* generateSequence() {
	yield 1;
	yield 2;
	yield 3;
}

const generator = generateSequence();

const sequence = [0, ...generator];

console.log(sequence); // 0, 1, 2, 3
```

## Related

- [[iterable(반복-가능)|iterable(반복 가능)]]

## References

- [제너레이터 (javascript.info)](https://ko.javascript.info/generators)
- [💡🎁 JavaScript Visualized: Generators and Iterators - DEV Community](https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36)
