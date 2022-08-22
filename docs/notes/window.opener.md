---
title: window.opener
category: Web API
tags:
  - web-api
aliases:
  - window.opener
publish: true
created: 2022-08-09T14:47:00.000+09:00
updated: 2022-08-09T14:47:00.000+09:00
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

[Window.opener - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener)
