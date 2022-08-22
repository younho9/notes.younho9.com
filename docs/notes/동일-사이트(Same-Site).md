---
title: 동일 사이트(Same Site)
category: Glossary
tags:
  - web
  - terms
  - glossary
  - url
aliases:
  - 동일 사이트
  - Same Site
publish: true
created: 2021-12-30T13:06:00.000+09:00
updated: 2021-12-30T13:14:00.000+09:00
---

# {{ $frontmatter.title }}

- HTTP 요청 헤더의 [Sec-Fetch-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site#directives) 를 통해 클라이언트와 호스트의 관계를 알 수 있다.
- 두 주소가 동일 사이트인지 판단하기 위해서는 [공개 접미사 목록(Public Suffix List)](https://publicsuffix.org/list/) 이 필요하다.

- 만약, [[최상위-도메인(Top-Level-Domain)|최상위 도메인(Top Level Domain)]]이 공개 접미사 목록에 있다면,
- 프로토콜, [[서브도메인(Subdomain)|서브도메인]], 포트번호는 다르더라도 동일 사이트로 볼 수 있다.
- 하지만 [[쿠키(cookie)|쿠키]]에서 SameSite 기준이 [schemeful same-site](https://web.dev/schemeful-samesite/) 으로 변경되었는데, 이는 프로토콜이 동일해야 동일 사이트로 보는 방식이다.

## Related

- [[동일-출처(Same-Origin)|동일 출처(Same Origin)]]
- [[쿠키(cookie)]]
- [[최상위-도메인(Top-Level-Domain)|최상위 도메인(Top Level Domain)]]

## References

- [Understanding "same-site" and "same-origin" (web.dev)](https://web.dev/same-site-same-origin/)
- [schemeful same-site](https://web.dev/schemeful-samesite/)
