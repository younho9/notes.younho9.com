---
title: sessionStorage
category: Web API
tags:
  - web_api
  - web
aliases:
  - sessionStorage
  - 세션 스토리지
related:
  - 쿠키(cookie)
  - 도메인(Domain)
  - 세션(Session)
  - 웹-스토리지(Web-Storage)
  - localStorage
created: 2021-12-30T07:13:00.000Z
updated: 2022-09-06T14:00:07.086Z
---

- 현재 떠 있는 탭 내에서 데이터를 유지한다.
- 새로고침, 복원(닫은 탭 다시 열기) 시에도 데이터를 유지한다.
- 하지만 다른 탭에는 데이터가 존재하지 않는다.
- [[쿠키(cookie)|쿠키]]와의 차이점
  - [[쿠키(cookie)|쿠키]]는 [[도메인(Domain)|도메인]]을 지정하여 저장하기 때문에, 다른 탭과 [[쿠키(cookie)|쿠키]]가 동기화 된다.
  - 브라우저의 탭이 닫히더라도, 브라우저가 종료되지 않으면, 새 탭에서 쿠키가 유지된다.

## Related

- [[세션(Session)|Session]]
- [[웹-스토리지(Web-Storage)|웹 스토리지(Web Storage)]]
- [[localStorage]]

## References

- [localStorage와 sessionStorage (javascript.info)](https://ko.javascript.info/localstorage)
- [Web Storage API - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
