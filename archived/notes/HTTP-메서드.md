---
title: HTTP 메서드
category: HTTP
tags:
  - http
  - web
aliases:
  - HTTP 메서드
  - HTTP Method
related:
  - Content-Type
  - 멱등성
  - 부수-효과(Side-Effect)
  - CORS(Cross-Origin-Resource-Sharing)
  - HTTP-헤더
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-06T14:00:06.695Z
---

## [GET](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/GET)

- 특정 리소스의 표시를 요청한다.
- GET을 사용하는 요청은 오직 데이터를 받기만 한다.

## [HEAD](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/HEAD)

- GET 메서드로 요청했을 때 돌아올 헤더를 요청한다.
- 응답 본문을 포함하지 않는다.
  - 가져선 안되고 존재하더라도 무시해야 한다.

## [POST](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/POST)

- 서버로 데이터를 전송한다.
- 요청 본문의 유형을 [[Content-Type]]로 나타낸다.
- PUT과 POST의 차이는 [[멱등성]]이다.
  - PUT은 [[멱등성]]을 가진다.
    - 한번 보내도, 여러 번을 연속으로 보내도 같은 효과를 보인다. 즉, 서버의 상태가 같고, [[부수-효과(Side-Effect)|부수 효과(Side Effect)]]가 없다.
  - POST는 [[멱등성]]을 가지지 않는다.
    - 한번 보낸 것과 여러 번을 연속으로 보내는 것에 차이가 있다. 즉, 서버에 [[부수-효과(Side-Effect)|부수 효과(Side Effect)]]가 발생한다.

## [PUT](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/PUT)

- 새로운 리소스를 생성하거나, 대상 리소스를 나타내는 데이터를 대체한다.
  - PUT은 [[멱등성]]을 가진다.
    - 한번 보내도, 여러 번을 연속으로 보내도 같은 효과를 보인다. 즉, 서버의 상태가 같고, [[부수-효과(Side-Effect)|부수 효과(Side Effect)]]가 없다.
  - POST는 [[멱등성]]을 가지지 않는다.
    - 한번 보낸 것과 여러 번을 연속으로 보내는 것에 차이가 있다. 즉, 서버에 [[부수-효과(Side-Effect)|부수 효과(Side Effect)]]가 발생한다.

## [DELETE](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/DELETE)

- 지정한 리소스를 삭제한다.

## [CONNECT](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/CONNECT)

- 요청한 리소스에 대해 **양방향 연결**을 시작하는 메서드이다.

## [OPTIONS](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/OPTIONS)

- 목표 리소스와의 통신 옵션을 설명하기 위해 사용된다.
- Related : [[CORS(Cross-Origin-Resource-Sharing)|CORS(Cross Origin Resource Sharing)]]

## [PATCH](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/PATCH)

- 리소스의 **부분적인 수정**을 할 때에 사용된다.
- PUT과 PATCH의 차이
  - 교체 방식
    - PUT은 리소스의 완전한 교체만을 허용한다.
      - 리소스의 모든 필드가 필요하다.
    - PATCH는 리소스의 부분적인 교체
      - 리소스의 일부 필드만으로 교체가 가능하다.
  - 멱등성
    - PUT은 [[멱등성]]을 가진다.
    - PATCH는 [[멱등성]]을 가지지 않는다.
      - 하지만 PUT과 같은 방식으로 사용함으로 [[멱등성]]을 가지게 할 수도 있다.

## Related

- [[HTTP-헤더|HTTP 헤더]]

## References

- [HTTP 요청 메서드 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)
