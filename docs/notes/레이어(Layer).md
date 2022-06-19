---
tags:
  - web
  - 브라우저
  - 렌더링
aliases:
  - 레이어
  - Layer
  - 브라우저 렌더링 - 레이어
publish: true
created: 2021-12-30 13:06
updated: 2021-12-30 13:14
---

### 자체 레이어를 생성하는 것

- 각 브라우저의 방식으로 레이어를 구현한다.
- 다음의 트리거가 레이어를 자체적으로 생성할 수 있다.
	- 3D 또는 원근 변형 CSS 속성
	- 가속 비디오 디코딩을 사용하는 `<video>` 요소
	- 3D(WebGL) 컨텍스트 또는 가속화된 2D 컨텍스트가 있는 `<canvas>` 요소
	- 합성 플러그인(예: Flash)
	- 불투명도에 대한 CSS 애니메이션이 있거나 애니메이션 변환을 사용하는 요소
	- 가속화된 CSS 필터가 있는 요소
	- 요소에 합성 레이어가 있는 하위 항목이 있습니다(즉, 요소에 자체 레이어에 있는 자식 요소가 있는 경우).
	- 요소에 합성 레이어가 있는 더 낮은 z-색인을 가진 형제가 있습니다(즉, 합성 레이어 위에 렌더링됨).

### 강제로 레이어를 생성하는 법

- [[will-change]] 2. 3D transformation

```css
.component {
  transform: translateZ(0);
}
```

## References

- [Layers, layers, layers… Be careful! | by Mariola Moreno González | MásMóvil Engineering | Medium](https://medium.com/masmovil-engineering/layers-layers-layers-be-careful-6838d59c07fa)
- [애니메이션을 적용할 요소 승격](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count?hl=ko#%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%EC%9D%84_%EC%A0%81%EC%9A%A9%ED%95%A0_%EC%9A%94%EC%86%8C_%EC%8A%B9%EA%B2%A9)
- [레이어에 대한 고찰](https://developers.google.com/web/updates/2018/09/inside-browser-part3?hl=ko#%EB%A0%88%EC%9D%B4%EC%96%B4%EC%97%90_%EB%8C%80%ED%95%9C_%EA%B3%A0%EC%B0%B0)
