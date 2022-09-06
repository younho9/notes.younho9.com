---
title: FOUC(Flash of unstyled content)
category: Web
tags:
  - web
  - terms
  - glossary
aliases:
  - FOUC(Flash of unstyled content)
  - FOUC
related:
  - CSS-in-JS
created: 2022-01-10T06:13:00.000Z
updated: 2022-09-05T05:04:21.808Z
---

# {{ $frontmatter.title }}

- 브라우저의 렌더링은 `<link>` 나 `<style>` 태그를 만나더라도 DOM 파싱과 병렬화 될 수 있도록 멈추지 않는다.
- 이로 인해, 아직 스타일시트가 없는 상황에서, DOM 파싱이 완료되고, 페인팅되면, **스타일시트가 없는 원형의 모습이 잠깐 노출**된다.
- 이를 FOUC(Flash of unstyled content)라고 한다.

## Related

- [[CSS-in-JS|CSS in JS]]

## References

- [FOUC 문제 | 웹킷 (webkit.org)](https://webkit.org/blog/66/the-fouc-problem/)
