---
tags:
  - web
  - web-vitals
  - metric
  - ux
aliases:
  - 레이아웃 시프트
  - CLS
publish: true
created: 2022-01-12 11:06
updated: 2022-01-12 11:06
---

![Layout Shift](https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.webm)

- 시각적 요소가 렌더링된 프레임에서 다음 프레임으로 위치를 변경할 때마다 발생한다.

## 최적화 방법

- 이미지에 크기를 정한다. (HTML 속성으로 높이와 너비를 명시하는 것은 브라우저가 미리 문서에 올바른 양의 공간을 할당할 수 있게 해준다.)
- 기존 콘텐츠 위에 콘텐츠를 삽입하는 것을 피하라
- 자리 표시자 또는 스켈레톤 UI를 사용하라
- 웹 폰트를 다운로드한 다음 렌더링하면 대체 글꼴이 새 글꼴로 바뀌는 등의 현상으로 레이아웃 시프트가 발생할 수 있다.

## Related

- [[Core Web Vitals]]

## References

- [Cumulative Layout Shift(누적 레이아웃 이동, CLS) (web.dev)](https://web.dev/i18n/ko/cls/)
