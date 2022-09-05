---
title: script 태그의 async와 defer 속성
category: Browser
tags:
  - browser
  - html
  - web
  - javascript
aliases:
  - script 태그의 async와 defer 속성
related:
  - 브라우저-렌더링-1
  - DOMContentLoaded-vs-load
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-05T05:04:22.175Z
---

# {{ $frontmatter.title }}

- 브라우저는 HTML을 읽다가 `<script>` 태그를 만나면 파싱을 멈추고, 스크립트를 먼저 실행한다.
  - [[브라우저-렌더링-1|브라우저 렌더링 1. 파싱(Parsing) 단계]]
- `async`와 `defer` 속성은 비동기적으로 스크립트를 로드할 수 있는 속성이다.

## defer

- `defer` 속성이 있는 스크립트는 **"백그라운드"** 에서 스크립트를 다운로드하고, 스크립트의 실행은 페이지 구성이 끝날 때까지 지연된다.
  - `DOMContentLoaded` 이벤트는 `defer` 스크립트의 실행을 기다린다.
  - `defer` 스크립트는 일반 스크립트와 마찬가지로 HTML에 추가된 순으로 실행된다.

## async

- `async` 속성이 있는 스크립트는 페이지와 완전히 독립적으로 동작한다.
  - `DOMContentLoaded` 이벤트는 `async` 스크립트의 실행을 기다리지 않는다.
  - 다른 스크립트들은 `async` 스크립트를 기다리지 않고, `async` 스크립트 역시 다른 스크립트를 기다리지 않는다.
    - 따라서 실행 순서가 제각각이 되는데, 이는 서드 파티 스크립트에 유용하다.

## type="module"

- `type="module"` 이 붙은 스크립트는 **항상** 지연 실행(`defer`)된다.

## Related

- [[DOMContentLoaded-vs-load|DOMContentLoaded vs load]]

## References

- [defer, async 스크립트 (javascript.info)](https://ko.javascript.info/script-async-defer)
