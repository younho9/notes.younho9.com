---
title: 쿠키(cookie)
category: Web
tags:
  - web
  - http
  - terms
  - glossary
aliases:
  - 쿠키
  - cookie
  - HTTP 쿠키
  - 웹 쿠키
  - 브라우저 쿠키
publish: true
created: 2021-12-30T06:38:00.000Z
updated: 2021-12-30T06:38:00.000Z
---

# {{ $frontmatter.title }}

- 서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각이다.
- 브라우저는 그 데이터를 저장해 놓았다가, 서버에 재요청 시 저장된 데이터를 함께 전송한다.
- 브라우저의 사생활 보호 설정이 서버로의 쿠키 전송을 block할 수 있다.

## 쿠키의 목적

- [[세션(Session)|세션]] 관리(Session Management)
  - 서버에 저장해야 할 로그인, 장바구니, 게임 스코어 등의 정보 관리
- 개인화(Personalization)
  - 사용자 선호, 테마 등의 세팅
- 트래킹(Tracking)
  - 사용자 행동을 기록하고 분석하는 용도

> 과거엔 **클라이언트 측에 정보를 저장하는 목적**으로 쿠키를 주로 사용하곤 했지만, 지금은 [[웹-스토리지(Web-Storage)|웹 스토리지(Web Storage)]]를 사용해 정보를 저장하는 걸 권장한다.

## 쿠키 만들기

### 서버 사이드

- 서버는 응답과 함께 [Set-Cookie 헤더](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Set-Cookie)를 전송할 수 있다.

```
// Set-Cookie: <cookie-name>=<cookie-value>

HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
```

- 이후에 브라우저는 서버로 전송되는 모든 요청과 함께 [Cookie 헤더](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cookie)를 사용하여 저장된 모든 쿠키들을 서버로 보내게 된다.

```
// Cookie: name=value; name2=value2; name3=value3

GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### 브라우저

- [document.cookie](https://developer.mozilla.org/ko/docs/Web/API/Document/cookie) 를 사용해 브라우저에서도 쿠키에 접근할 수 있다.

```javascript
document.cookie = 'user=John';
```

## 쿠키의 라이프타임

- [[세션-쿠키(Session-Cookie)|세션 쿠키(Session Cookie)]]는 현재 [[세션(Session)|세션]]이 끝날 때 삭제 된다.
- [[지속-쿠키(Permanent-Cookie)|지속 쿠키(Permanent Cookie)]]는 Expires 속성에 명시된 날짜에 삭제되거나, Max-Age 속성에 명시된 기간 이후에 삭제된다.

## Secure과 HttpOnly

- Secure 쿠키는 브라우저와 서버가 [[HTTPS-프로토콜|HTTPS 프로토콜]]로 통신하는 경우에만 쿠키를 전송하는 옵션이다.
  - Secure 옵션이 없으면 `http://site.com`에서 설정한 쿠키를 `https://site.com`에서 사용할 수 있고, `https://site.com`에서 설정한 쿠키를 `http://site.com`에서 사용할 수 있다.
  - Secure 옵션이 있으면, `https://site.com`에서 설정한 쿠키는 `http://site.com`에서 사용할 수 없다.
- HttpOnly 쿠키는 JavaScript에서 [document.cookie](https://developer.mozilla.org/ko/docs/Web/API/Document/cookie) API를 사용해서 접근할 수 없게 만드는 옵션이다.
  - [[크로스-사이트-스크립팅(XSS)|크로스 사이트 스크립팅(XSS)]] 공격을 방지하기 위해 사용된다.

## domain

- 쿠키에 접근 가능한 [[도메인(Domain)]]을 지정한다.
- 아무 값도 넣지 않았다면, 쿠키를 설정한 도메인에서만 쿠키에 접근할수 있다.
- `domain=site.com` 으로 명시적으로 설정하면 [[서브도메인(Subdomain)]]을 포함한 루트 도메인에 속하는 모든 도메인에서 쿠키 정보를 얻을 수 있다.

## SameSite

- None : 크로스 사이트 요청의 경우에도 항상 전송된다. 즉, [서드 파티 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies#%EC%84%9C%EB%93%9C%ED%8C%8C%ED%8B%B0_%EC%BF%A0%ED%82%A4)도 전송된다.
- Strict : 크로스 사이트 요청에는 항상 전송되지 않는다. 즉, 서드 파티 쿠키는 전송되지 않고, 퍼스트 파티 쿠키만 전송된다.
- Lax : 대체로 서드 파티 쿠키는 전송되지 않지만, 몇 가지 예외적인 요청에는 전송된다.
  - SameSite가 설정되지 않았을 경우에 [기본값으로 사용](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#cookies_without_samesite_default_to_samesitelax)된다.

## Related

- [[웹-스토리지(Web-Storage)|웹 스토리지(Web Storage)]]

## References

- [HTTP 쿠키 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [쿠키와 document.cookie (javascript.info)](https://ko.javascript.info/cookie)
- [SameSite cookies - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
