---
tags:
  - web
  - security
  - terms
  - glossary
aliases:
  - CORB
publish: true
created: 2022-01-05 22:06
updated: 2022-01-05 22:06
---

> 민감한 교차 출처 데이터 자원이 렌더러 프로세스에 도달하지 못하게 하는 보안 기법

악성 웹 페이지가 다음과 같이 사용할 수 있다.

```html
<img src="https://your-bank.example/balance.json">
<!-- Note: the attacker refused to add an `alt` attribute, for extra evil points. -->
```

이미지는 유효한 이미지 형식이 아니기 때문에 렌더링 되지 않지만, 사이트 격리가 없으면 JSON 파일의 내용이 **렌더러의 메모리에 저장**된다. 공격자는 Spectre와 같은 취약점을 악용하여 잠재적으로 메모리를 읽을 수 있다.

웹사이트는 서버로부터 두 가지 유형의 자원을 요청할 수 있다.

1. 데이터 자원 (HTML, XML, JSON)
2. 미디어 자원 (이미지, 폰트, JavaScript, CSS)

- 웹사이트는 [[동일 출처(Same Origin)|동일 출처]]이거나 [[교차 출처(Cross Origin)|CORS가 허용된 다른 출처]]의 서버로부터 **데이터 자원**을 받을 수 있다.
- 웹사이트는 CORS 헤더 없이도 어느 출처에서나 서버로부터 **미디어 자원**을 받을 수 있다.

CORB는 
- 리소스가 `X-Content-Type-Options: nosniff` 헤더를 가진 경우
- 자원에 대해 CORS가 명시적으로 허용되지 않은 경우
교차 출처의 데이터 자원에 대해 렌더링 프로세스를 예방한다.

> `X-Content-Type-Options: nosniff` 헤더를 가진 경우 응답이 HTML, XML, JSON인지 확인한다.

CORB의 최적화된 보안의 이점을 누리기 위해서

- [[Content-Type]] 헤더를 정확하게 명시한다.
	- HTML은 `text/html`, JSON은 [JSON MIME type](https://mimesniff.spec.whatwg.org/#json-mime-type), XML은 [XML MIME type](https://mimesniff.spec.whatwg.org/#xml-mime-type)
- `X-Content-Type-Options: nosniff` 헤더를 사용한다.

## Related

- [[CORS(Cross Origin Resource Sharing)|CORS]]
- [[사이트 격리(Site Isolation)]]

## References

- [Cross-Origin Read Blocking for Web Developers - The Chromium Projects](https://www.chromium.org/Home/chromium-security/corb-for-developers)
- [웹 개발자를 위한 사이트 격리 | 웹 | 구글 개발자 (google.com)](https://developers.google.com/web/updates/2018/07/site-isolation?hl=ko)