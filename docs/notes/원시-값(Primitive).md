---
tags:
  - javascript
  - glossary
  - terms
aliases:
  - Primitive
  - 원시 값
  - 원시 자료형
publish: true
created: 2022-01-06 13:52
updated: 2022-01-06 13:52
---

# 원시 값(Primitive)

- 객체가 아니고, 메서드도 가지지 않는 데이터
- 원시 값은 [[변성(Mutable)-vs-불변성(Immutable)|변성(Mutable) vs 불변성(Immutable)]]하여 변형할 수 없다.

  - 원시 값과 원시 값을 할당한 변수를 혼동하지 않는 것이 중요하다.
  - 변수에는 새 값을 할당할 수 있지만, 생성된 원시 값을 변형하는 것이 아니다.

    ```js
    // 문자열 메서드는 문자열을 변형하지 않음
    var bar = 'baz';
    console.log(bar); // baz
    bar.toUpperCase();
    console.log(bar); // baz

    // 배열 메소드는 배열을 변형함
    var foo = [];
    console.log(foo); // []
    foo.push('plugh');
    console.log(foo); // ["plugh"]

    // 할당은 원시 값에 새로운 값을 부여 (변형이 아님)
    bar = bar.toUpperCase(); // BAZ
    ```

## JavaScript의 원시 값

- string
- number
- bigint
- boolean
- symbol
- undefined
- null

## Related

- [[변성(Mutable)-vs-불변성(Immutable)|변성(Mutable) vs 불변성(Immutable)]]
- [[JavaScript-객체(Object)|JavaScript 객체(Object)]]
- [[값(Value)]]

## References

- [원시 값 - 용어 사전 | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Glossary/Primitive)
