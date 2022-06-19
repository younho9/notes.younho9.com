---
tags:
  - css
aliases:
  - Box Model
publish: true
created: 2022-01-09 23:19
updated: 2022-01-09 23:19
---

- CSS에는 크게 **[[block, inline, inline-block의 차이점|블록 박스와 인라인 박스]]** 유형이 있다.
- CSS 박스 모델은 블록 박스에 적용되며, 인라인 박스는 일부 동작만 사용한다.

![box-model](https://mdn.mozillademos.org/files/16558/box-model.png)

## 박스의 구성

- Content 박스 : 콘텐츠가 표시되는 영역으로 width, height 속성으로 정할 수 있다.
- Padding 박스 : 콘텐츠 주변을 마치 공백 처럼 잡는다.
- Border 박스 : 콘텐츠와 패딩까지 둘러싼다.
- Margin 박스 : 가장 바깥 쪽 레이어로 콘텐츠와 패딩, 테두리를 둘러싼다.

![border box vs content box](https://poiemaweb.com/img/box-sizing.png)

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

## Related

## References

- [상자 모델 - Web 개발 학습하기 | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/The_box_model)