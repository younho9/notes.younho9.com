---
title: beforeunload vs unload
category: Web API
tags:
  - web_api
  - web
  - vs
aliases:
  - beforeunload vs unload
related:
  - visibilitychange
  - DOMContentLoaded-vs-load
  - 페이지-라이프사이클(Page-Lifecycle)-API
created: 2022-01-05T13:59:00.000Z
updated: 2022-09-05T05:04:22.102Z
---

# {{ $frontmatter.title }}

## beforeunload

- 사용자가 페이지를 떠나기 전에 발생한다.
- 사용자에게 저장하지 않은 변경 사항을 확인시켜줄 때 사용할 수 있다.

## unload

- 사용자가 진짜 떠날 때 발생한다.
- 하지만, 모바일 탭 전환 화면에서 탭 닫기, 앱 전환 화면에서 브라우저 앱 닫기 등 모바일에서 **극도로 신뢰할 수 없다(Extremely unreliable).**
- 따라서, 사용자가 떠날 때, 사용자 분석 정보를 담은 통계 자료를 전송하고자 할 때 [[visibilitychange]] 이벤트를 사용하는 것이 좋다.

## Related

- [[DOMContentLoaded-vs-load|DOMContentLoaded vs load]]
- [[페이지-라이프사이클(Page-Lifecycle)-API|페이지 라이프사이클(Page Lifecycle) API]]

## References

- [Page Lifecycle API - The Unload Event](https://developers.google.com/web/updates/2018/07/page-lifecycle-api?hl=ko#the-unload-event)
