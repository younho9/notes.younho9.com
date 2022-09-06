---
title: 크로스 사이트 요청 위조(CSRF)
category: Web
tags:
  - web
  - terms
  - glossary
  - security
aliases:
  - 크로스 사이트 요청 위조(CSRF)
  - 교차 요청 위조
  - CSRF
  - CSRF(교차 요청 위조)
  - XSRF
related:
  - 세션(Session)
  - 쿠키(cookie)
  - 동일-사이트(Same-Site)
created: 2021-12-31T06:18:00.000Z
updated: 2022-09-06T14:00:07.561Z
---

<Metadata />

- 신뢰할 수 있는 **사용자를 가장**하여 웹 사이트에 원치 않는 명령을 보내는 공격이다.

## Example

1. 유저가 공격대상 사이트(`https://site-a.com`)에 이미 사용자 인증을 수행함.
   - 유저 인증 [[세션(Session)|세션]]이 브라우저 [[쿠키(cookie)|쿠키]]에 저장되어 있는 상태
2. 공격자가 피해자에게 그럴듯한 사이트 링크(`https://site-b.com`)를 전송하고 접속하게 함.
3. 링크를 누르고 HTML 문서가 열렸을 때, 아래와 같은 코드로 공격 대상 사이트에 HTTP 요청을 보냄.
   ```html
   <img
   	src="https://site-a.com/withdraw?account=bob&amount=1000000&for=mallory"
   />
   ```
4. 이 요청에는 [서드 파티 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies#%EC%84%9C%EB%93%9C%ED%8C%8C%ED%8B%B0_%EC%BF%A0%ED%82%A4)가 포함되어 있으므로 공격자가 유도한 공격을 실행할 수 있음.

## 방어 방법

1. 서버 요청 시에 CSRF 토큰을 포함시키도록 한다.
2. 민감한 작업(ex. 세션 쿠키)에 사용되는 쿠키의 [[동일-사이트(Same-Site)|동일 사이트(Same Site)]] 속성을 Strict 또는 Lax로 설정하고, 짧은 수명을 가지게 한다.
3. 위의 두 방법을 모두 사용해야 한다.
   - [[동일-사이트(Same-Site)|동일 사이트(Same Site)]] 속성은 하위 도메인에서 발생하는 공격에 도움이 되지 않는다.

## Related

- [[쿠키(cookie)]]

## References

- [공격 유형 - 웹 보안 | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)
- [브라우저 쿠키와 SameSite 속성 / seob.dev](https://seob.dev/posts/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%BF%A0%ED%82%A4%EC%99%80-SameSite-%EC%86%8D%EC%84%B1/)
- [SameSite cookies - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
