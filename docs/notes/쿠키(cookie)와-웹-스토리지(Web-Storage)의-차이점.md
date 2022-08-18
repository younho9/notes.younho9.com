---
title: 쿠키(cookie)와 웹 스토리지(Web Storage)의 차이점
category: Web API
tags:
  - web
  - web-api
  - cookie
aliases:
  - 쿠키(cookie) vs 웹 스토리지(Web Storage)
  - 쿠키 vs 웹 스토리지
  - cookie vs Web Storage
  - cookie vs localStoarge vs sessionStorage
created: 2021-12-30 13:06
updated: 2021-12-30 13:15
---

# {{ $frontmatter.title }}

- [[쿠키(cookie)]]는 네트워크 요청 시 서버로 전송되지만, [[웹-스토리지(Web-Storage)|웹 스토리지(Web Storage)]]는 서버로 전송되지 않는다.
- 쿠키는 최대 4KB의 데이터를 저장할 수 있지만, [[웹-스토리지(Web-Storage)|웹 스토리지(Web Storage)]]는 최소 2MB의 데이터를 저장할 수 있다.
  - 브라우저 별, 디바이스 별로 다를 수 있다.
- 쿠키와 또 다른 점은 서버가 HTTP 헤더를 통해 스토리지 객체를 조작할 수 없다는 것입니다. [[웹-스토리지(Web-Storage)|웹 스토리지(Web Storage)]] 객체 조작은 모두 자바스크립트 내에서 수행됩니다.
- 웹 스토리지 객체는 [[출처(Origin)]]에 묶여있습니다. 따라서 [[프로토콜(Protocol)|프로토콜]]과 [[서브도메인(Subdomain)|서브 도메인]]이 다르면 데이터에 접근할 수 없습니다.

|                                   | cookie                                                          | localStorage              | sessionStorage                        |
| --------------------------------- | --------------------------------------------------------------- | ------------------------- | ------------------------------------- | ------------------------- | --------------------------------- | ------------------------- |
| 생성자                            | 클라이언트나 서버. 서버는 Set-Cookie 헤더를 사용할 수 있습니다. | 클라이언트                | 클라이언트                            |
| 만료                              | 수동으로 설정                                                   | 영구적                    | 탭을 닫을 때                          |
| 브라우저 세션 전체에서 계속       | 만료 설정 여부에 따라 다름                                      | O                         | X                                     |
| 모든 HTTP 요청과 함께 써버로 보냄 | Cookie 헤더를 통해 자동 전송 됨                                 | X                         | X                                     |
| 용량(도메인당)                    | 4KB                                                             | 5MB                       | 5MB                                   |
| 접근성                            | 모든 윈도우 ([[동일-사이트(Same-Site)                           | 동일 사이트(Same Site)]]) | 모든 윈도우 ([[동일-출처(Same-Origin) | 동일 출처(Same Origin)]]) | 같은 탭 ([[동일-출처(Same-Origin) | 동일 출처(Same Origin)]]) |
