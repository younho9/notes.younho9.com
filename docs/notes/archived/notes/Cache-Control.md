---
title: Cache-Control
category: HTTP
tags:
  - http
  - web
aliases:
  - Cache-Control
related:
  - HTTP-헤더
created: 2021-12-30T06:12:00.000Z
updated: 2022-09-06T14:00:06.547Z
---

## no-cache와 no-store

- no-cache : 브라우저에서 `max-age=0` 과 동일한 뜻을 가진다. 즉, 캐시는 저장하지만, 사용하려고 할 때마다 서버에 재검증 요청을 보낸다.
- no-store : 캐시를 저장하지 말라는 옵션이다. 캐시 저장소에 해당 리소스를 저장하지 않는다.

## Related

- [[HTTP-헤더|HTTP 헤더]]