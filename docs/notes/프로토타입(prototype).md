---
tags:
  - javascript
aliases:
  - 프로토타입
  - Prototype
publish: true
created: 2021-12-31 20:25
updated: 2021-12-31 20:25
---

# 프로토타입(prototype)

## TL;DR

![animal-rabbit-extends](https://ko.javascript.info/article/class-inheritance/animal-rabbit-extends.svg)

- 현실에 존재하는 것 중 가장 좋은 본보기를 원형(prototype)으로 선택한다.
- 컨텍스트(Context)에 따라 '범주', 즉 '의미'가 달라진다.

```js
function Foo(y) {
	this.y = y;
}

Foo.prototype.x = 10;
Foo.prototype.calculate = function (z) {
	return this.x + this.y + z;
};

const b = new Foo(20);
const c = new Foo(30);

b.calculate(30); // 60
c.calculate(30); // 70

console.log(
	b.__proto__ === Foo.prototype, // true
	c.__proto__ === Foo.prototype, // true

	b.constructor === Foo, // true
	c.constructor === Foo, // true
	Foo.prototype.constructor === Foo, // true

	b.calculate === b.__proto__.calculate, // true
	b.calculate === Foo.prototype.calculate, // true
);
```

![proto](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1590534071/just-javascript-email-images/jj09/proto.png)

```js
let human = {
	teeth: 32,
};

let gwen = {
	// We added this line:
	__proto__: human,
	age: 19,
};
```

![root](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1590534071/just-javascript-email-images/jj09/root1.png)

## 상속

- [[Object.create()|Object.create()를 사용한 고전적인 상속 방법]]
- [[클래스(Class)|Class를 사용한 상속 방법]]

## Related

- [[클래스(Class)]]
- [[프로토타입-객체|프로토타입 객체]]

## References

e- [🎉👨‍👩‍👧‍👧 JavaScript Visualized: Prototypal Inheritance - DEV Community](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)

- [자바스크립트는 왜 프로토타입을 선택했을까. 프로토타입으로 검색하면 으레 나오는 서두처럼 저 또한 자바스크립트를… | by 임성묵 (Sungmook Lim) | Dec, 2021 | Medium](https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42)
- [쉽게 이해하는 자바스크립트 프로토타입 체인 : NHN Cloud Meetup (toast.com)](https://meetup.toast.com/posts/104)
- [프로토타입 상속 (javascript.info)](https://ko.javascript.info/prototype-inheritance)
