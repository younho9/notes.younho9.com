---
title: 프록시(Proxy)
category: Web
tags:
  - web
  - http
aliases:
  - 프록시 서버
  - 프록시
  - Proxy
publish: true
created: 2021-12-31T02:18:00.000Z
updated: 2022-09-05T03:06:18.088Z
related:
  - HTTP-Request
  - HTTP-Response
---

# {{ $frontmatter.title }}

## 프록시 서버

- 인터넷 상의 여러 네트워크들에 접속할 때, 중계 역할을 해주는 프로그램 또는 컴퓨터
- 프록시는 [[HTTP-Request|HTTP Request]]를 가로챈 뒤(intercepts) [[HTTP-Response|HTTP Response]]를 돌려준다.
- 이렇게 가로챈 Request를 전달해줄수도, 아닐 수도(ex. 캐시인 경우), 수정할 수도(ex. 헤더를 변경하는 경우) 있다.

## JavaScript

- Proxy 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용한다.

```js
var handler = {
	get: function (target, name) {
		return name in target ? target[name] : 37;
	},
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
```

## Related

## References

- [프록시 서버 - 용어 사전 | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Glossary/Proxy_server)
- [Proxy - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
