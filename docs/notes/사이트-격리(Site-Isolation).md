---
title: 사이트 격리(Site Isolation)
category: Web
tags:
  - web
  - browser
publish: true
created: 2022-01-06 12:01
updated: 2022-01-06 12:01
---

# {{ $frontmatter.title }}

- 서로 다른 출처의 웹페이지가 항상 서로 다른 프로세스에 배치되도록 하며, 각각은 프로세스가 수행할 수 있는 작업을 제한하는 샌드박스에서 실행된다.

- 교차 출처의 iframe을 포함하는 페이지에서 iframe으로 레이아웃 변경을 알릴 때, 이것이 별도의 프로세스에서 비동기로 발생한다.

## Related

- [[CORB(Cross-Origin-Read-Blocking)|CORB(Cross Origin Read Blocking)]]

## References

- [Site Isolation for web developers  |  Web  |  Google Developers](https://developers.google.com/web/updates/2018/07/site-isolation?hl=ko)
