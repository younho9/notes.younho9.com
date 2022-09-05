---
title: 형 변환(Type conversion)
category: JavaScript
tags:
  - javascript
  - type
aliases:
  - 형 변환
  - Type conversion
  - 암묵적 형 변환(Type coercion)
publish: true
created: 2022-01-06T07:46:00.000Z
updated: 2022-09-05T03:06:18.093Z
related:
  - 동일성(equality)
---

# {{ $frontmatter.title }}

- [형 변환(Type conversion)](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)은 어떤 데이터의 타입을 다른 타입으로 변환하는 것이다.
- JavaScript는 코드를 실행하면서 **암시적(implicit)으로** 유형을 변환하기도 하는데, 이를 [암묵적 형 변환(Type coercion)](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) (또는, 타입 강제)

## 형 변환이 발생하는 상황

- 문자형으로 변환 : 무언가를 출력할 때 주로 일어난다.
  - console.log
  - $element.innerText
- 숫자형으로 변환 : 수학 관련 연산시 주로 일어난다.
- 불린형으로 변환 : 논리 연산 시 발생한다.

  | 전달받은 값                                                      | 형 변환 후 |
  | ---------------------------------------------------------------- | ---------- |
  | [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) | `false`    |
  | 그 외                                                            | `true`     |

## Related

- [[동일성(equality)]]

## References

- [Type conversion - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)
- [Type coercion - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
