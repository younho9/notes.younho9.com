---
title: window.opener
category: Web API
tags:
  - web_api
aliases:
  - window.opener
related:
  - window.open
created: 2022-08-09T05:47:00.000Z
updated: 2022-09-06T02:59:43.939Z
---

# {{ $frontmatter.title }}

- window `A` 가 window `B`를 열면 `B.opener`는 `A` 이다.

```js
// in https://facebook.com
const google = window.open('https://google.com/');

console.log(google.opener.location.href);
// https://facebook.com
```

## Related

- [[window.open]]

## References

- [Window.opener - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener)
