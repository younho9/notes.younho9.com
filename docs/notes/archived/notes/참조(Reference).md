---
title: 참조(Reference)
category: JavaScript
tags:
  - javascript
  - glossary
aliases:
  - 참조(Reference)
  - Reference
  - reference
  - 참조
related:
  - 객체(Object)
  - 원시-값(Primitive)
  - 참조(Reference)
  - 변성(Mutable)-vs-불변성(Immutable)
  - 얕은-복사(shallow-copy)-vs-깊은-복사(deep-copy)
  - 값(Value)
created: 2022-11-23T00:52:05.381Z
updated: 2022-11-23T02:23:18.780Z
---

[[객체(Object)|객체]]와 [[원시-값(Primitive)|원시 타입]]의 근본적인 차이 중 하나는 객체는 **[[참조(Reference)|참조]]에 의해(by reference)** 저장되고 복사된다는 것이다.

아래 예시를 실행하면 두 개의 **독립된 변수**에 원시 타입인 문자열이 저장된다.

```javascript
let message = 'Hello!';
let phrase = message;

phrase = phrase.toUpperCase();

console.log({
	message,
	phrase,
});
// {message: 'Hello!', phrase: 'HELLO!'}
```

그런데 객체의 동작 방식은 이와 다르다

**변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장된다.**

즉, 동일한 객체에 대한 참조 값을 가진 변수가 하나 더 만들어지는 것이다.

```javascript
let user = {
	name: 'John',
};

let admin = user; // 참조값을 복사함

admin.name = admin.name.toUpperCase();

console.log({
	user,
	admin,
});

// {
// 	admin: {name: 'JOHN'}
// 	user: {name: 'JOHN'}
// }
```

두 변수가 하나의 객체에 대한 참조를 갖고 있기 때문에, 객체의 속성을 수정하면 두 변수가 참조하는 객체가 변하게 된다.

이러한 동작 방식으로 인해 의도하지 않은 객체의 변경이 발생할 수 있기 때문에, 객체가 생성된 이후 그 상태를 변경할 수 없도록 [[변성(Mutable)-vs-불변성(Immutable)|불변성(Immutable)]]을 유지하는 패턴을 사용하기도 한다.

객체의 불변성을 유지하기 위해서는 [[얕은-복사(shallow-copy)-vs-깊은-복사(deep-copy)|객체 복사]]를 사용한다.

## Related

- [[값(Value)]]
- [[객체(Object)]]

## References

- [참조에 의한 객체 복사 (javascript.info)](https://ko.javascript.info/object-copy)

## Tags

#javascript #terms #glossary
