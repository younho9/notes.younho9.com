---
title: Invalid Date in Safari
category: Troubleshooting
tags:
  - troubleshooting
  - cross_browser
aliases:
  - Invalid Date in Safari
created: 2022-08-21T06:00:00.000Z
updated: 2022-09-05T05:04:21.827Z
---

# {{ $frontmatter.title }}

## 문제

- Safari에서 `yyyy-MM-dd hh:mm` 형식의 문자열로 Date 객체를 생성할 때, Invalid Date 에러가 발생함.

````js
> new Date('2010-11-29 08:00')
> Invalid Date
한```

## 원인

- ECMA262 스펙은 [ISO 8601 형식(`YYYY-MM-DDTHH:mm:ss:sssZ`)의 문자열을 지원할 것을 명시](https://tc39.es/ecma262/#sec-date-time-string-format)한다.
- 다른 형식은 **구현에 따라 다르며(implementation-defined)** 모든 브라우저에서 실행되지 않을 수 있다.
- 즉, `yyyy-MM-dd hh:mm` 형식의 문자열을 Chrome는 지원하지만, Safari는 지원하지 않는다.

## 해결

### 공백(`/\s/`)을 `T`로 치환하고, `Z`를 추가

> https://stackoverflow.com/a/47790371

```js
new Date('2011-04-12 15:00'.replace(/\s/, 'T') + 'Z')
````

- `Z` 를 포함해야 타임존 오프셋이 추가된다.

### `-` 를 `/`로 치환

> https://stackoverflow.com/a/5646753

```js
new Date('2011-04-12 15:00'.replace(/-/g, '/'));
```

- `yyyy/MM/dd` 형식 지원은 ECMA262 스펙에 명시되어 있지 않으나, 대부분의 브라우저에서 지원되는 것으로 보인다.

## Related

## References

- [javascript - Invalid date in safari - Stack Overflow](https://stackoverflow.com/questions/4310953/invalid-date-in-safari)
