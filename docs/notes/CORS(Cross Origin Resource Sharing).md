---
tags:
  - web
  - terms
  - glossary
aliases:
  - CORS
  - Cross Origin Resource Sharing
  - 교차 출처 리소스 공유
created: 2021-12-30 13:06
updated: 2021-12-30 13:15
---

- 기본적으로 모든 HTTP 요청은 [[크로스 사이트(Cross Site)|Cross Site]] [[HTTP Request]]가 가능하다.
	- 즉, `<img>` 태그의 `src` 속성, `<link>` 태그의 [[href|`href`]] 속성, `<script>` 태그의 `src` 속성으로 **[[크로스 사이트(Cross Site)|다른 사이트]]의 자원을 가져와서 사용하는 것이 가능**하다.
		- CORB
- 하지만, **스크립트 내부에서 생성된 HTTP Request**에 대해서는 [동일 출처 정책 (Same Origin Policy)](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy) 이 적용된다.
	- [[교차 출처(Cross Origin)|교차 출처]] 에서 가져온 리소스를 제한하는 보안 방식이다.
- 하지만, [[AJAX]]가 널리 사용되면서, 스크립트 내부에서도 [[교차 출처(Cross Origin)|교차 출처]]에 대한 HTTP Request가 가능해야 한다는 요구가 늘어나면서 [[W3C]]로부터 [CORS(Cross Origin Resource Sharing)](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS) 라는 권고안이 나오게 되었다.

### CORS 허용하기

#### 서버 사이드

- 서버에서 교차 출처 요청을 허용해주기 위해서 HTTP response에 `Access-Control-Allow-*` 옵션들을 사용할 수 있다.
- 서버는 `Access-Control-Allow-Origin` 헤더로 어느 출처를 허용할 것인지 명시할 수있다.
	- express에서의 예시
		- 전체 허용 : `res.header('Access-Control-Allow-Origin', '*');`
		- 특정 출처 허용 : `res.header('Access-Control-Allow-Origin', 'http://example.com');`
- 또한 `Access-Control-Allow-Methods` 로 허용할 메서드들을 지정할 수 있다.
	- express에서의 예시
		- `res.header('Access-Control-Allow-Methods', ["POST", "GET", "PUT"]);`

### simplie request vs preflighted

- CORS에는 단순 요청(simple request)와 프리플라이트 요청(preflighted request)가 있다.
	- 단순 요청 : `GET` 또는 `POST`, 사용자 정의 헤더가 없다.
	- 프리플라이트 요청 : 다른 모든 요청
- 프리플라이트 요청은 서버 데이터에 [[부수 효과(Side Effect)]] 를 일으킬 수 있는 HTTP 요청 메서드(`GET` 을 제외한 메서드)에 대해 `OPTIONS` 메서드로 지원하는 메서드를 요청하고, 서버의 허가가 떨어지면 "실제 요청"을 보낸다.

## Related

- [[AJAX]]
- [[CORB(Cross Origin Read Blocking)]]

## References

- [동일 출처 정책 (Same Origin Policy)](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)
- [교차 출처 리소스 공유 (CORS) - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
- [CORS | 📝 TIL(Today I Learned) (younho9.dev)](https://til.younho9.dev/docs/frontend/javascript/cors)
