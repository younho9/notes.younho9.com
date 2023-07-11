---
title: window vs document
category: Web API
tags:
  - web_api
  - web
aliases:
  - window vs document
  - window 객체와 document 객체
related:
  - DOM(Document-Object-Model)
  - DOMContentLoaded-vs-load
created: 2022-01-13T06:51:00.000Z
updated: 2023-07-11T15:05:02.232Z
---

- window 객체는 현재 브라우저의 창을 나타내는 객체이고, document는 현재 문서, [[DOM(Document-Object-Model)|DOM]]을 나타내는 객체이다.
- window 내부에 document가 포함되고 그 외에도 필요한 전역 속성들과 메서드들이 있다.
- [[DOMContentLoaded-vs-load|DOMContentLoaded 이벤트]]는 document 객체에서 일어나고, [[DOMContentLoaded-vs-load|load 이벤트]]는 window에서 일어나는 등의 차이도 있다.
