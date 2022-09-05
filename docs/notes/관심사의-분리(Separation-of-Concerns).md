---
title: 관심사의 분리(Separation of Concerns)
category: Computer Science
tags:
  - cs
  - glossary
  - terms
  - programming
aliases:
  - 관심사의 분리(Separation of Concerns)
  - 관심사의 분리
  - Separation of Concerns
  - SoC
related:
  - 추상화(Abstraction)
created: 2022-08-09T06:28:00.000Z
updated: 2022-09-05T05:04:22.200Z
---

# {{ $frontmatter.title }}

- 컴퓨터 과학에서 컴퓨터 프로그램을 구별된 부분으로 분리시키는 디자인 원칙으로, 각 부분은 개개의 관심사를 해결한다.
- 관심사란 컴퓨터 프로그램 코드에 영향을 미치는 정보의 집합이다.
- 관심사 분리를 이용하면 프로그램의 설계, 배포, 사용 관점에서 더 높은 자유가 생긴다.
  - 코드의 단순화 및 유지보수의 더 높은 수준의 자유
  - 관심사가 잘 분리될 때 독립적인 개발과 업그레이드, 모듈 재사용을 위한 더 높은 정도의 자유가 있다.
  - 모듈이 인터페이스 뒤에서 이러한 관심사의 세세한 부분을 숨기기 때문에 자유도가 높아짐으로써 다른 부분의 세세한 사항을 모르더라도, 또 해당 부분에 상응하는 변경을 취하지 않더라도 하나의 관심사의 코드 부분을 개선하거나 수정할 수 있게 된다.
  - 관심사의 분리는 [[추상화(Abstraction)]]의 일종이다.

## Related

- [[추상화(Abstraction)]]

## References

- [관심사 분리 - 위키백과, 우리 모두의 백과사전 (wikipedia.org)](https://ko.wikipedia.org/wiki/%EA%B4%80%EC%8B%AC%EC%82%AC_%EB%B6%84%EB%A6%AC#:~:text=%EC%BB%B4%ED%93%A8%ED%84%B0%20%EA%B3%BC%ED%95%99%EC%97%90%EC%84%9C%20%EA%B4%80%EC%8B%AC%EC%82%AC%20%EB%B6%84%EB%A6%AC,%EC%9D%98%20%EA%B4%80%EC%8B%AC%EC%82%AC%EB%A5%BC%20%ED%95%B4%EA%B2%B0%ED%95%9C%EB%8B%A4.&text=%EA%B4%80%EC%8B%AC%EC%82%AC%20%EB%B6%84%EB%A6%AC%EB%A5%BC%20%EC%9D%B4%EC%9A%A9%ED%95%98%EB%A9%B4,%EC%A0%95%EB%8F%84%EC%9D%98%20%EC%9E%90%EC%9C%A0%EA%B0%80%20%EC%83%9D%EA%B8%B4%EB%8B%A4.)
