---
title: 페이지 라이프사이클(Page Lifecycle) API
category: Web API
tags:
  - web_api
  - web
aliases:
  - 페이지 라이프사이클(Page Lifecycle) API
created: 2022-01-05T14:09:00.000Z
updated: 2022-09-06T14:00:07.599Z
---

<Metadata />

![page lifecycle api event flow](https://developers.google.com/web/updates/images/2018/07/page-lifecycle-api-state-event-flow.png)

## 상태

- Active : 페이지가 **보이고(visible)**, **입력 포커스(focus)** 가 있을 때
- Passive : 페이지가 **보이지만**, **입력 포커스** 가 없을 때
- Hidden : 페이지가 **보이지 않지만**, **동결(freeze)** 되진 않았을 때
  - Frozen : 페이지가 **동결**되었을 때
    - Discarded : 페이지가 브라우저에 의해 **언로드(unload)** 되었을 때
  - Terminated : 페이지가 **언로드(unload)** 되고 메모리에서 지워졌을 때.

## References

- [Page Lifecycle (wicg.github.io)](https://wicg.github.io/page-lifecycle/)
- [Page Lifecycle API  |  Web  |  Google Developers](https://developers.google.com/web/updates/2018/07/page-lifecycle-api)리
