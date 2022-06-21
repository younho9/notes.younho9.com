---
tags:
  - javascript
  - terms
  - glossary
aliases:
  - enumerable
  - 열거 가능
publish: true
created: 2022-01-01 14:32
updated: 2022-01-01 14:32
---

# enumerable(열거 가능)

- [[JavaScript-객체(Object)|JavaScript 객체(Object)]] 중 `enumerable` 이 true로 설정된 속성을 열거 가능한 속성(enumerable property)라고 한다.
- 열거 가능 속성은 [[for-...-of-vs-for-...-in|for ... of vs for ... in]]로 열거할 수 있다.
  - [[프로토타입(prototype)|프로토타입 체인]]을 통해 상속된 속성이 열거 가능일 경우에도 열거된다.
  - 자체 속성만 반복하고 싶은 경우, hasOwnProperty를 사용할 수 있다.

```js
var triangle = {
	a: 1,
	b: 2,
	c: 3,
};

function ColoredTriangle() {
	this.color = 'red';
}

ColoredTriangle.prototype = triangle;

function show_own_props(obj, objName) {
	var result = '';

	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			result += objName + '.' + prop + ' = ' + obj[prop] + '\n';
		}
	}

	return result;
}

o = new ColoredTriangle();
console.log(show_own_props(o, 'o'));
/* 
o.color = red 
*/
```

## Related

- [[iterable(반복-가능)|iterable(반복 가능)]]

## References

- [Enumerability and ownership of properties - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [Object.prototype.propertyIsEnumerable() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
