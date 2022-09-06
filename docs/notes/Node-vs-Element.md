---
title: Node vs Element
category: Web API
tags:
  - web_api
  - web
aliases:
  - Node vs Element
  - Node와 Element의 차이점
created: 2022-01-06T03:43:00.000Z
updated: 2022-09-06T14:00:06.805Z
---

<Metadata />

> 계층 구조상 EventTarget > Node > Element 순으로 상속 관계에 있다.

![DOM class hierarchy](https://ko.javascript.info//article/basic-dom-node-properties/dom-class-hierarchy.svg)

- EventTarget : 루트에 있는 **추상(Abstract) 클래스**. EventTarget이 모든 DOM 노드의 베이스에 있기 때문에 모든 DOM에서 이벤트를 사용할 수 있다.
- Node : DOM 노드의 베이스 역할을 하는 **추상 클래스**. `parentNode` , `nextSibling` , `childNodes` 등의 탐색 기능을 제공한다.
  - Text, Element, Comment가 이를 확장한다.
- Element : DOM 요소의 베이스 클래스. `nextElementSibling`, `children`, `getElementsByTagName`, `querySelector` 등의 **요소 전용 탐색** 메서드나 프로퍼티가 있다.
  - HTML 뿐만 아니라, XML, SVG에 대한 Element도 이를 확장한다.
- HTMLElement : HTML 요소의 베이스 클래스.
  - HTMLInputElement : `<input>` 요소에 대응하는 클래스
  - HTMLBodyElement : `<body>` 요소에 대응하는 클래스
  - ...

## Conclusion

- Node는 요소 뿐만 아니라, 텍스트 노드, 주석 노드 등까지 포함하는 요소의 상위 클래스이다.
- Element는 다시 HTMLElement, SVGElement로 나뉘고, HTMLElement는 다시 태그 별로 나뉘며, 각 요소 전용 프로퍼티와 메서드 등을 갖고 있다.

## References

- [주요 노드 프로퍼티 (javascript.info)](https://ko.javascript.info/basic-dom-node-properties)
