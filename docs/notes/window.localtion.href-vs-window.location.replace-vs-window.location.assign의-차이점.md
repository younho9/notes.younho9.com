---
title: >-
  window.localtion.href vs window.location.replace vs window.location.assign의
  차이점
category: Web API
tags:
  - web_api
  - web
aliases:
  - >-
    window.localtion.href vs window.location.replace vs window.location.assign의
    차이점
related:
  - href
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-05T05:04:22.191Z
---

# {{ $frontmatter.title }}

`window.location` 은 [Location 객체](https://developer.mozilla.org/en-US/docs/Web/API/Location)를 반환하는 속성이다. 이 객체는 문서의 현재 위치(URL)에 대한 정보를 나타낸다.

세 가지 속성(또는 메서드) 모두 현재 페이지에서 다른 페이지로 이동할 때 사용되는데, 브라우저의 [History](https://developer.mozilla.org/en-US/docs/Web/API/History)에 미치는 영향에 차이가 있다.

> 브라우저의 History API는 브라우저의 _session history_(유저의 history)를 조작할 수 있는 속성과 메서드들을 제공한다.
>
> 이 글에서 브라우저의 History라는 용어는 History API를 통해 드러나는 현재 페이지에 대한 history 객체를 뜻한다.

## window.location.href

> ※ [[href]] 뜻

- `href` 프로퍼티는 현재 페이지의 URL을 저장한다.
- `href` 프로퍼티가 새로운 URL로 바뀌면, 새로운 URL이 브라우저의 History에 추가되고 유저는 새로운 URL로 이동한다.
  - 유저가 "뒤로 가기" 버튼을 클릭하면 이전 URL로 이동할 수 있다.
  - `window.history.length` 로 확인할 수 있다.
- `href` 속성을 업데이트하는 것은, `assign()` 메서드를 사용하는 것보다 빠르다. (프로퍼티에 접근하는 것보다 함수를 호출하는 것이 더 느리기 때문이다.)

### Syntax

```javascript
window.location.href = 'https://github.com/';
```

**Note**: 아래의 코드는 모두 동일하게 동작한다.

```javascript
window.location = 'https://github.com/';

window.location.href = 'https://github.com/';
```

## window.location.replace

- `replace()` 메서드는 브라우저 History에 기록 추가 없이 새로운 URL로 변경한다.
  - 이름에서 알 수 있듯이, 브라우저 History에서 현재 기록을 새로운 URL로 대체한다.
- `replace()` 메서드로 현재 URL을 새로운 URL로 대체하고 나면, 유저가 "뒤로 가기" 버튼을 클릭하더라도, 현재 URL로 접근할 수 없다.
- `replace()` 메서드와 `assign()` 메서드의 차이점은 현재 페이지를 브라우저의 History에서 대체되는지 여부이다.
  - `replace()` : 현재 URL이 새로운 URL로 대체됨.
  - `assign()` : 새로운 URL이 브라우저 History에 추가됨.

### Syntax

```javascript
window.location.replace('https://github.com/');
```

## window.location.assign

- `assign()` 메서드는 `href` 프로퍼티를 조작하는 것과 비슷하게 새로운 URL이 브라우저의 History에 추가되고 유저는 새로운 URL로 이동한다.
- `assign()` 메서드는 `href` 프로퍼티와 달리 현재 위치(URL)을 반환하는데 사용되지 않는다.
- `assign()` 메서드는 `replace()` 메서드와 달리 새로운 기록을 브라우저의 History에 추가한다.
- `href` 를 직접 업데이트하는 것보다 `assign()` 메서드를 호출하는 것이 더 안전하고 읽기 쉬운 것으로 간주된다.

```javascript
window.location.assign('https://github.com/');
```

## 요약

| `window.location.href`                              | `window.location.replace()`                           | `window.location.assign()`                          |
| --------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------- |
| 현재 페이지의 URL을 저장하고 있다.                  | 현재 페이지를 대체하는데 사용된다.                    | 새 페이지를 불러오는데 사용된다.                    |
| 브라우저 History에 새 기록을 추가한다.              | 브라우저 History에 새 기록을 추가하지 않는다.         | 브라우저 History에 새 기록을 추가한다.              |
| 브라우저 History에서 현재 페이지를 삭제하지 않는다. | 브라우저 History에서 현재 페이지를 삭제한다.          | 브라우저 History에서 현재 페이지를 삭제하지 않는다. |
| `assign()` 메서드보다 빠르다                        | 브라우저 History에서 현재 기록을 대체하는데 사용된다. | `href` 를 조작하는 것보다 안전하고 읽기 쉽다.       |

## Reference

- [Location - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Location)
- [Difference between window.location.href, window.location.replace and window.location.assign in JavaScript - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-window-location-href-window-location-replace-and-window-location-assign-in-javascript/)
- [location.href vs location.assign vs location.replace 차이점 :: Code Playground (tistory.com)](https://im-developer.tistory.com/219)
