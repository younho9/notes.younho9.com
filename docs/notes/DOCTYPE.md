---
title: DOCTYPE
category: HTML
tags:
  - html
aliases:
  - DOCTYPE
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-05T05:04:21.795Z
---

# {{ $frontmatter.title }}

- Document Type의 약자로, 해당 문서가 어떤 형식으로 정의되었는지 선언한다.
- 브라우저는 이것을 보고 렌더링 모드([호환 모드와 표준 모드]([호환 모드와 표준 모드 - HTML: Hypertext Markup Language | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode))가 있음)를 결정한다.
- 선언하지 않으면 호환 모드(quirks mode)를 트리거한다.
  - 호환 모드는 **오래된 웹 브라우저를 위하여 제작된 웹 페이지**의 하위 호환성을 위해 쓰이는 모드이다.
  - 호환 모드의 동작은 정확하게 모른다.
    - 표준을 따르지 않기 때문에 브라우저마다 다를 수 있다.
    - 박스 모델이라던지 이런 점에서 다를 수 있다.
- 반드시 문서의 첫 부분에 기술하자.
  - 주석이든 무엇이든 작성되지 않아야 한다.
