---
title: JavaScript 객체(Object)
category: JavaScript
tags:
  - javascript
aliases:
  - 객체
  - Object
publish: true
created: 2022-01-01T02:13:00.000Z
updated: 2022-09-05T03:06:17.886Z
related:
  - Object.create()
  - 프로토타입-객체
  - 정수-프로퍼티
  - for-of-vs-for-in
  - enumerable(열거-가능)
  - 프로토타입(prototype)
---

# {{ $frontmatter.title }}

![Object Properties](https://user-images.githubusercontent.com/29270715/77065184-e86d9600-6a08-11ea-9a7a-4d699597e1ef.png)

- 객체는 [문자형으로 된 **키(Key)**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors#%EC%86%8D%EC%84%B1_%EC%9D%B4%EB%A6%84) 와 모든 자료형을 사용할 수 있는 **값(value)** 쌍으로 구성된 여러 **프로퍼티(property)** 의 집합이다.
- 프로퍼티의 값으로 함수가 될 수 있는데, 이 경우 **메서드(method)** 라고 불린다.

## 생성 방법

1. 객체 리터럴 방식
2. 생성자 함수 방식
3. [[Object.create()]]
   - 인자로 받은 객체를 프로토타입으로 하는 새로운 객체를 리턴한다.
   - constructor를 호출하지 않기 때문에 자체 속성을 갖지 않고, 상속을 위한 prototype에 있는 속성들만 갖고 있다.
   - 프로토타입 기반 상속에 주로 쓰인다.

```js
// 1. 객체 리터럴 방식
const foo = {
	name: 'foo',
	gender: 'male',
};

// 2. 생성자 함수 방식
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

const me = new Person('Lee', 'male');
const you = new Person('Kim', 'female');

// 3. Object.create()
function Employee(name, gender) {
	Person.call(this, name, gender);
}

Employee.prototype = Object.create(Person.prototype);
```

### 객체 리터럴 방식 vs 생성자 함수 방식

- 아래의 예제에서 두 방법은 차이가 없다.

```js
let object = new Object();
let literalObject = {};
```

- 하지만, Object가 아닌 다른 생성자 함수나 클래스를 사용해서 생성할 때, 차이가 발생한다.

```js
const foo = {
	name: 'foo',
	gender: 'male',
};

// 생성자 함수 방식
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

const me = new Person('Lee', 'male');
```

- 객체 리터럴 방식의 경우, 생성된 객체의 [[프로토타입-객체|프로토타입 객체]]는 Object.prototype 이다.
- 생성자 함수 방식의 경우, 생성된 객체의 [[프로토타입-객체|프로토타입 객체]]는 Person.prototype 이다.
  - Person.prototype의 [[프로토타입-객체|프로토타입 객체]]는 Object.prototype 이다.

## 객체 속성 정렬 방식

> 객체 속성은 순서가 보장되는가?

- [[정수-프로퍼티|정수 프로퍼티]]는 **자동으로 정렬**되고, 그 외에 프로퍼티는 객체에 **추가한 순서대로 정렬**된다.
- Object.keys, [[for-of-vs-for-in]] 등으로 열거할 때, 객체 속성의 순서를 확인할 수 있다.

## 객체의 프로퍼티 플래그

- 객체의 프로퍼티는 **값(value)** 뿐만 아니라, **플래그(flag)** 라 불리는 특별한 속성 세 가지를 갖는다.
  - writable : true 이면 값을 수정할 수 있다. 그렇지 않으면, 읽기만 가능하다.
  - [[enumerable(열거-가능)|enumerable(열거 가능)]] : true 이면 [[for-of-vs-for-in]] 루프에서 열거할 수 있다. 그렇지 않으면, 열거할 수 없다.
  - configurable : true 이면 프로퍼티 삭제나 플래그 수정이 가능하다. 그렇지 않으면, **영구히** 프로퍼티 삭제와 플래그 수정이 불가능하다.

### 관련 메서드

- [Object.defineProperty](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) : 객체에 새로운 속성을 정의하거나 수정하고 그 객체를 반환한다.
- [Object.defineProperties](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) : 객체에 하나 또는 그 이상의 새로운 속성을 정의하거나 수정하고 그 객체를 반환한다.
- [Object.getOwnPropertyDescriptor](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) : 주어진 객체 자신의 속성에 대한 속성 설명자(descriptor)를 반환한다.
- [Object.getOwnPropertyDescriptors](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) : 주어진 객체 자신의 모든 속성들의 설명자(descriptor)들을 반환한다.
- [Object.preventExtensions(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) : 객체에 새로운 프로퍼티를 추가할 수 없게 한다.
- [Object.seal(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) : 새로운 프로퍼티 추가나 기존 프로퍼티 삭제를 막아준다. 프로퍼티 전체에 configurable: false를 설정하는 것과 동일한 효과이다.
- [Object.freeze(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) : 새로운 프로퍼티 추가나 기존 프로퍼티 삭제, 수정을 막아준다. 프로퍼티 전체에 configurable: false, writable: false를 설정하는 것과 동일한 효과이다.
- [Object.isExtensible(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) : 새로운 프로퍼티를 추가하는 게 불가능한 경우 false를, 그렇지 않은 경우 true를 반환한다.
- [Object.isSealed(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) : 프로퍼티 추가, 삭제가 불가능하고 모든 프로퍼티가 configurable: false이면 true를 반환한다.
- [Object.isFrozen(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen) : 프로퍼티 추가, 삭제, 변경이 불가능하고 모든 프로퍼티가 configurable: false, writable: false이면 true를 반환한다.

> 프로퍼티 추가와 관련된 extensible은 프로퍼티마다 가지는 것이 아니라 객체가 가져야 할 것이다.
>
> 따라서, 프로퍼티 플래그로 존재하지 않고, 객체의 [내부 속성으로 존재](https://2ality.com/2019/11/object-property-attributes.html#internal-slots)한다.

## Related

- [[프로토타입(prototype)]]
- [[프로토타입-객체|프로토타입 객체]]

## References

- [Object - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [프로퍼티 플래그와 설명자 (javascript.info)](https://ko.javascript.info/property-descriptors)
