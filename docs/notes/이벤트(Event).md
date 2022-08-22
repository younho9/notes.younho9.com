---
title: 이벤트(Event)
category: Web API
tags:
  - web
  - web-api
  - javascript
aliases:
  - 이벤트
  - 브라우저 이벤트
  - Event
publish: true
created: 2021-12-31T16:29:00.000+09:00
updated: 2021-12-31T16:29:00.000+09:00
---

# {{ $frontmatter.title }}

![eventflow.png (480×560) (w3.org)](https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/images/eventflow.png)

- DOM 이벤트 흐름에는 3가지 단계가 있다
  1.  캡쳐 단계
  2.  타겟 단계
  3.  버블링 단계

## 버블링과 캡처링

- 위의 그림에서 `<td>`를 클릭하면, 이벤트가 최상위 조상에서 시작해서 아래로 전파된다. (캡쳐 단계)
- 이벤트가 타겟 요소에 도착해서 실행된다. (타겟 단계)
- 다시 이벤트가 위로 전파된다. (버블링 단계)

캡쳐링 단계에서 이벤트를 잡아내려면 `addEventListener`에 `capture` 옵션을 `true`로 설정해야 한다.

```js
$el.addEventListener(..., {capture: true})
// 아니면, 아래 같이 {capture: true} 대신, true를 써줘도 됩니다.
$el.addEventListener(..., true)
```

> `e.eventPhase` 프로퍼티로 현재 단계를 알 수 있다. 1: 캡쳐 단계, 2: 타겟 단계, 3: 버블링 단계

## event.currentTarget vs event.target

- e.currentTarget : 이벤트 핸들러가 등록된 요소
  - 화살표 함수가 아니라면 [[this|`this`]] 와 같다.
- e.target : 이벤트가 발생한 가장 안쪽의 요소

-> 이벤트 캡쳐링, 버블링 흐름에서 두 객체가 다를 수 있다.

## event.stopPropagation

- 이벤트 버블링을 멈출 수 있다.

## 이벤트 위임

- 이벤트 버블링 개념을 활용해서 요소마다 핸들러를 할당하지 않고, 공통 부모 요소에 하나의 핸들러를 할당해서 한꺼번에 다루는 방식입니다.

## Related

## References
