---
title: 웹 워커(Web Worker)
category: Web API
tags:
  - web
  - web-api
aliases:
  - alias
publish: true
created: 2022-01-13T09:45:00.000+09:00
updated: 2022-01-13T09:45:00.000+09:00
---

# {{ $frontmatter.title }}

- 웹 워커는 스크립트 연산을 웹 애플리케이션의 주 실행 스레드와 분리된 별도의 백그라운드 스레드에서 실행할 수 있는 기술이다.
- window와는 다른 전역 맥락에서 동작하는 워커 스레드를 만들고, 워커와 메인 스레드 간의 데이터 교환은 메시지 시스템을 사용한다.
  - 양측 모두 postMessage()를 통해 메시지를 전송하고, onmessage 이벤트 핸들러로 수신한다.

## Related

## References

- [Worker - Web API | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/API/Worker)
- [Web Workers API - Web API | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API)
