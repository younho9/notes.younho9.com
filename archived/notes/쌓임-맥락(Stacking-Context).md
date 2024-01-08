---
title: 쌓임 맥락(Stacking Context)
category: CSS
tags:
  - css
aliases:
  - 쌓임 맥락(Stacking Context)
created: 2022-01-09T14:35:00.000Z
updated: 2022-09-06T14:00:07.313Z
---

- 쌓임 맥락이 다른 쌓임 맥락을 포함할 수 있고, 함께 계층 구조를 이룹니다.
- 쌓임 맥락은 형제 쌓임 맥락과 완전히 분리됩니다. 쌓임을 처리할 땐 자손 요소만 고려합니다.
- 각각의 쌓임 맥락은 독립적입니다. 어느 요소의 콘텐츠를 쌓은 후에는 그 요소를 통째 부모 쌓임 맥락 안에 배치합니다.

![Understanding_zindex](https://developer.mozilla.org/@api/deki/files/913/=Understanding_zindex_04.png)

> z-index 값은 부모에게만 의미가 있다.
>
> 하나의 쌓임 맥락은 부모 쌓임 맥락 안에서 통째로 하나의 단위로 간주된다.

## References

- [쌓임 맥락 - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
