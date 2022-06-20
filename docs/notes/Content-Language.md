---
tags:
  - web
  - http
publish: true
created: 2021-12-30 14:55
updated: 2021-12-30 15:11
---

- 콘텐츠의 대상 청중을 위한 언어를 설명하기 위해 사용된다.
  - 일본어 컨텐츠여도 한국인에게 일본어를 가르치는 사이트라면 한국어이다.
- HTML `<meta>` 태그에서 `http-equiv` 속성의 값은 HTTP 헤더가 올 수 있는데
  - 여기서 사용되는 `Content-Language`는 [[lang 속성|html 태그의  lang 속성]]이 없을 때 콘텐츠의 언어를 추론하는데에 사용될 것이 제안되었지만, 이를 구현한 브라우저가 거의 없었고, 더 이상 사용하지 않을 것을 권고했다.
  - 현재에도 구현된 일부 브라우저가 있지만, 비표준이므로 다음을 사용해서는 안된다. ([참고](https://www.w3.org/International/questions/qa-http-and-lang.en#meta))
  ```html
  <meta http-equiv="Content-Language" content="en" />
  ```

## Related

- [[Accept-Language]]
- [[HTTP 헤더]]

## References

- [Content-Language - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Language)
- [HTTP headers, meta elements and language information (w3.org)](https://www.w3.org/International/questions/qa-http-and-lang.en#meta)
