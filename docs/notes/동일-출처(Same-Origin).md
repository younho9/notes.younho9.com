---
title: 동일 출처(Same Origin)
category: Glossary
tags:
  - web
  - terms
  - glossary
  - url
aliases:
  - 동일 출처
  - Same Origin
publish: true
created: 2021-12-30T04:06:00.000Z
updated: 2021-12-30T04:14:00.000Z
---

# {{ $frontmatter.title }}

- URL에서 프로토콜, [[도메인(Domain)|도메인]]([[서브도메인(Subdomain)|서브도메인]] 포함), 포트번호까지를 모두 동일한 경우 동일 출처라고 판단한다.
- [[HTTP-Request|HTTP Request]] 헤더의 [Sec-Fetch-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site#directives) 를 통해 클라이언트와 호스트의 관계를 알 수 있다.

## Related

- [[출처(Origin)]]
- [[교차-출처(Cross-Origin)|교차 출처(Cross Origin)]]
- [[동일-사이트(Same-Site)|동일 사이트(Same Site)]]

## References

- [Understanding "same-site" and "same-origin" (web.dev)](https://web.dev/same-site-same-origin/)
