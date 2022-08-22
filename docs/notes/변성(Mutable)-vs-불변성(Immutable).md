---
title: 변성(Mutable) vs 불변성(Immutable)
category: Glossary
tags:
  - terms
  - glossary
  - vs
publish: true
created: 2022-01-06T13:39:00.000+09:00
updated: 2022-01-06T16:22:00.000+09:00
---

# {{ $frontmatter.title }}

- 불변성(Immutable)은 객체가 생성된 이후 그 상태를 변경할 수 없는 패턴을 의미한다.
  - 의도하지 않은 객체의 변경을 방지할 수 있다.
    - 의도하지 않은 변경의 원인 대다수는 **"객체의 레퍼런스를 가지고 다른 곳에서 속성을 변경하기 때문이다."** [[pass-by-reference-vs-pass-by-value|pass by reference vs pass by value]]
- JavaScript에서 [[원시-값(Primitive)|원시 값(Primitive)]]은 불변성이지만, [[JavaScript-객체(Object)|JavaScript 객체(Object)]]는 변성이다.

  ```js
  let str = 'yellow';
  str[0] = 'h';
  console.log(str); // 'yellow'

  let arr = ['h', 'e', 'y'];
  arr[0] = 'k';
  console.log(arr); // ['k', 'e', 'y']
  ```

- [Object.freeze](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 메서드를 사용하면, 객체에 속성 추가, 속성 삭제, 속성 변경, 속성 설명자(descriptor) 변경이 불가능하도록 객체를 **동결**한다.
  - 동결된 객체의 속성 변경 시도는 에러가 발생하지 않는다. [[엄격-모드(strict-mode)|엄격 모드(strict mode)]]에서는 오류가 발생한다.

## Related

- [[순수-함수(Pure-Functions)|순수 함수(Pure Functions)]]
- [[원시-값(Primitive)|원시 값(Primitive)]]
- [[JavaScript-객체(Object)|JavaScript 객체(Object)]]

## References

- [변하지 않는 상태를 유지하는 방법, 불변성(Immutable) | Evans Library (evan-moon.github.io)](https://evan-moon.github.io/2020/01/05/what-is-immutable/)
