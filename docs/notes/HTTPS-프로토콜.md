---
title: HTTPS 프로토콜
category: HTTP
tags:
  - https
aliases:
  - HTTPS
  - HTTP Secure
publish: true
created: 2021-12-30 18:06
updated: 2021-12-31 14:08
---

# {{ $frontmatter.title }}

![HTTP vs HTTPS](https://i.imgur.com/4GHgl0T.png)

- [[HTTP-프로토콜|HTTP 프로토콜]] 의 암호화된 버전(HTTP Secure)이다.
- 클라이언트와 서버 간의 모든 커뮤니케이션을 암호화 하기 위하여 [[SSL-vs-TLS|SSL vs TLS]]를 사용한다.
- 이 연결은 민감한 정보를 서버와 안전하게 주고 받을 수 있도록 해준다.
  - 금융 활동이나 온라인 쇼핑

## HTTPS 동작 원리

1. [TLS(또는 SSL) handshake](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/)
   1. "Client Hello" : 클라이언트는 서버에 메시지를 전송하여 핸드셰이크를 시작한다.
      - 클라이언트가 지원하는 TLS 버전
      - 클라이언트에서 지원되는 암호화 제품군
      - 클라이언트 랜덤(client random) : 클라이언트가 생성한 임의의 바이트 문자열
   2. "Server Hello" : 서버는 Client Hello에 대한 응답을 보낸다.
      - [[디지털-인증서|디지털 인증서]]
      - 서버가 선택한 암호화 제품군
      - 서버 랜덤(server random) : 서버가 생성한 임의의 바이트 문자열
   3. 인증 : 클라이언트는 서버의 [[디지털-인증서|디지털 인증서]]를 발급한 인증기관을 확인한다.
   4. [premaster secret](https://www.cryptologie.net/article/340/tls-pre-master-secrets-and-master-secrets) : 클라이언트는 [클라이언트 랜덤과 서버 랜덤을 조합해서 premaster secret 값을 만들고](https://security.stackexchange.com/questions/100002/how-to-build-pre-master-secret), 이를 서버로 전송한다.
      - 이 때, 이 값은 [[디지털-인증서|디지털 인증서]]에 있는 서버의 [[대칭키-vs-비대칭키|대칭키 vs 비대칭키]]를 사용해 암호화된다.
   5. 서버는 개인키를 사용해 premaster secret을 복호화한다.
   6. 클라이언트와 서버 모두 클라이언트 랜덤, 서버 랜덤, premaster secret을 가지고 [mater secret](https://www.cryptologie.net/article/340/tls-pre-master-secrets-and-master-secrets) 값을 만든다. 이 값은 서버와 클라이언트 모두 동일해야 한다.
   7. 이 master secret를 통해 세션 키(session key)를 생성해내며 이 값이 데이터를 암호화하는 [[대칭키-vs-비대칭키|대칭키 vs 비대칭키]]로 사용된다.
2. 세션
   - 서버와 클라이언트가 데이터를 주고 받을 때, 세션 키를 사용해 대칭키 방식으로 암호화한다.
   - 서버와 클라이언트 모두 세션 키 값을 알고 있기 때문에, 암호화와 복호화가 가능하다.
3. 세션 종료
   - 데이터 전송이 끝나면 SSL 통신이 끝났음을 서로에게 알려준다.
   - 이 때 통신에서 사용한 대칭키인 세션키를 폐기한다.

## Related

- [[HTTP-프로토콜|HTTP 프로토콜]]

## References

- [HTTPS - 용어 사전 | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Glossary/https)
- [HTTPS와 SSL 인증서 - 생활코딩 (opentutorials.org)](https://opentutorials.org/course/228/4894#signiture)
- [TLS 핸드셰이크에서는 어떻게 됩니까? | SSL 핸드셰이크 | 클라우드플레어 (cloudflare.com)](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/)
