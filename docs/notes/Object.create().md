---
tags:
  - javascript
aliases:
  - Object.create
publish: true
created: 2022-01-01 12:11
updated: 2022-01-01 12:11
---

## Object.create()를 사용한 고전적인 상속 방법

```js
// Shape - 상위클래스
function Shape() {
	this.x = 0;
	this.y = 0;
}

// 상위클래스 메서드
Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.');
};

// Rectangle - 하위클래스
function Rectangle() {
	Shape.call(this); // super 생성자 호출.
}

// 하위클래스는 상위클래스를 확장
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Shape moved.
```

- 인자로 받은 객체를 프로토타입으로 상속하는 새로운 객체를 생성한다.
- new 와의 차이는 constructor를 호출하지 않는다.

## Object.create()를 사용하는 이유

```js
function Shape() {
	this.x = 0;
	this.y = 0;
}


Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.');
};

function Rectangle() {
	Shape.call(this); // super 생성자 호출.
}

function Triangle() {
	Shape.call(this); // super 생성자 호출.
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Triangle.prototype = Shape.prototype;
Triangle.prototype.constructor = Triangle;

console.log(Rectangle.prototype === Shape.prototype) // false
console.log(Triangle.prototype === Shape.prototype) // true

Rectangle.prototype.move = ... // move 함수 재정의해도 Shape.prototype.move는 변하지 않음.
Triangle.prototype.move = ... // move 함수를 재정의하면 Shape.prototype.move가 변함.
```


## Related

- [[클래스(Class)]]

## References

- [Object.create() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)