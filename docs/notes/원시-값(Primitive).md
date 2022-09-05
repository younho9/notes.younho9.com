---
title: 원시 값(Primitive)
category: JavaScript
tags:
  - javascript
  - glossary
  - terms
aliases:
  - 원시 값(Primitive)
  - Primitive
  - 원시 값
  - 원시 자료형
related:
  - 변성(Mutable)-vs-불변성(Immutable)
  - JavaScript-객체(Object)
  - 값(Value)
created: 2022-01-06T04:52:00.000Z
updated: 2022-09-05T05:04:22.283Z
---

# {{ $frontmatter.title }}

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

- **Undefined** (undefined), used for unintentionally missing values.
- **Null** (null), used for intentionally missing values.
- **Booleans** (true and false), used for logical operations.
- **Numbers** (-100, 3.14, and others), used for math calculations.
- **BigInts** (uncommon and new), used for math on big numbers.
- **Strings** ("hello", "abracadabra", and others), used for text.
- **Symbols** (uncommon), used to perform rituals and hide secrets.

## Related

- [[변성(Mutable)-vs-불변성(Immutable)|변성(Mutable) vs 불변성(Immutable)]]
- [[JavaScript-객체(Object)|JavaScript 객체(Object)]]
- [[값(Value)]]

## References

- [원시 값 - 용어 사전 | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Glossary/Primitive)
