---
tags:
  - web
  - terms
  - glossary
aliases:
  - 세션 쿠키
  - Session Cookie
publish: true
created: 2021-12-30 16:28
updated: 2021-12-30 17:49
---

- 만료 날짜(Expires) 또는 Max-Age가 지정되지 않은 [[쿠키(cookie)|쿠키]]
- 현재 [[세션(Session)|세션]]이 종료되면 삭제된다.
	- [[sessionStorage|세션 스토리지]] 와의 차이점
		- [[쿠키(cookie)|쿠키]]는 [[도메인(Domain)|도메인]]을 지정하여 저장하기 때문에, 다른 탭과 [[쿠키(cookie)|쿠키]]가 동기화 된다.
		- 브라우저의 탭이 닫히더라도, 브라우저가 종료되지 않으면, 새 탭에서 쿠키가 유지된다.
- 일부 브라우저는 복원(닫은 탭 다시 열기)시에 세션이 복원된다.
	- 이로 인해 세션 쿠키가 무기한 지속될 가능성이 있다.

## Related

- [[쿠키(cookie)]]
- [[지속 쿠키(Permanent Cookie)|영속적인 쿠키]]

## References

- [Set-Cookie - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Set-Cookie#%EB%94%94%EB%A0%89%ED%8B%B0%EB%B8%8C)
