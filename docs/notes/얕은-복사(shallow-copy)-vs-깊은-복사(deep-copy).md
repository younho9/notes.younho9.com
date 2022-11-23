---
title: 얕은 복사(shallow copy) vs 깊은 복사(deep copy)
category: JavaScript
tags:
  - javascript
aliases:
  - 얕은 복사(shallow copy) vs 깊은 복사(deep copy)
related:
  - 객체(Object)
  - 참조(Reference)
  - 원시-값(Primitive)
  - 변성(Mutable)-vs-불변성(Immutable)
  - 동일성(equality)
created: 2022-11-23T01:30:42.580Z
updated: 2022-11-23T02:23:18.769Z
---

[[객체(Object)|객체]]는 [[참조(Reference)|참조]]로 전달된다. 따라서 객체가 할당된 변수를 할당하면, 동일한 객체에 대한 참조 값이 하나 더 만들어진다.

```js
let a = {};
let b = a; // 참조에 의한 복사

console.log(a == b); // true, 두 변수는 같은 객체를 참조합니다.
console.log(a === b); // true
```

## 얕은 복사(shallow copy)

하지만 기존 객체와 동일한 객체를 복제하고 싶은 경우가 있다. 이러한 경우에는 새로운 객체를 순회하며 프로퍼티를 복사해야 한다.

```js
let user = {
	name: 'John',
	age: 30,
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣는다.
for (let key in user) {
	clone[key] = user[key];
}
```

[Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 을 사용하는 방법도 있다.

```js
let user = {
	name: 'John',
	age: 30,
};

let clone = {}; // 새로운 빈 객체

Object.assign(clone, user);
```

[구조 분해 할당(Destructuring assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 문법을 사용하는 방법도 있다.

```js
let user = {
	name: 'John',
	age: 30,
};

let clone = {...user}; // 새로운 빈 객체
```

위의 예시처럼 객체의 모든 프로퍼티가 [[원시-값(Primitive)|원시 값]]인 경우에는 객체의 완전한 복사본이 생성되었다고 할 수 있다.

하지만, 객체의 프로퍼티는 다른 객체에 대한 [[참조(Reference)|참조 값]]일 수도 있다. 이러한 경우에는 위와 같은 복사를 수행할 경우 복사한 객체의 프로퍼티가 참조하는 객체는 기존 객체의 프로퍼티가 참조하는 객체와 동일한 객체를 참조한다.

이러한 복사를 얕은 복사(shallow copy)라고 한다.

```js
let user = {
	name: 'John',
	sizes: {
		height: 182,
		width: 50,
	},
};

let copy = {
	...user,
};

copy.sizes.width = 100;

console.log(user.sizes.width); // 100
```

## 깊은 복사(deep copy)

따라서 중첩 객체까지 복사한, 객체의 완전한 복사본을 생성하기 위해서는 기존 객체의 프로퍼티들을 순회하며, **원시 수준까지 프로퍼티를 복사**해야 한다.

JavaScript에는 이러한 깊은 복사를 수행하는 표준 메서드에 대한 지원이 부족했다.

이러한 상황 속에서 깊은 복사를 수행하기 위한 한 가지 방법으로, 객체를 JSON 문자열로 변환하고, JSON 문자열을 다시 객체로 변환하는 방식([직렬화](https://developer.mozilla.org/en-US/docs/Glossary/Serialization))을 관용적으로 사용해왔다.

```js
JSON.parse(JSON.stringify(nestedObject));
```

하지만, 깊은 복사는 성능적인 문제를 야기할 수 있기 때문에, 깊은 복사에 사용되는 표준 알고리즘인 [structured cloning algorithm](https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of-structured-data) 을 사용할 필요가 있다.

2022년 현재에는 위 알고리즘을 사용하여 구현된 [structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) DOM API에 대한 브라우저 지원이 진행되고 있다.

> [structuredClone API | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_structuredclone)

## Related

- [[변성(Mutable)-vs-불변성(Immutable)|변성(Mutable) vs 불변성(Immutable)]]
- [[참조(Reference)]]
- [[동일성(equality)|참조 동일성]]

## References

- [Deep copy - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)
- [structuredClone() - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

## Tags

#javascript
