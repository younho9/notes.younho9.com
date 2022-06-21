---
tags:
  - javascript
aliases:
  - 호이스팅
  - hoisting
publish: true
created: 2021-12-31 22:47
updated: 2021-12-31 22:47
---

# 호이스팅(hoisting)

## Example

```js
function fn() {
	foo = 123;
}

fn();

console.log(foo); // foo is not defined

(function () {
	bar = 123;
})();

console.log(bar); // 123

(function () {
	var baz = 123;
})();

console.log(baz); // baz is not defined
```

## Related

- [[TDZ(Temporal-Dead-Zone)|TDZ(Temporal Dead Zone)]]
- [[var-vs-let-vs-const|var vs let vs const]]

## References

- [let, const | PoiemaWeb](https://poiemaweb.com/es6-block-scope#13-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)
