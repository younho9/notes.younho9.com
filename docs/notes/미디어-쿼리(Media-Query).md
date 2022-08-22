---
title: 미디어 쿼리(Media Query)
category: CSS
tags:
  - css
aliases:
  - 미디어 쿼리
  - Media Query
created: 2021-12-30T13:06:00.000+09:00
updated: 2021-12-30T13:14:00.000+09:00
---

# {{ $frontmatter.title }}

## 미디어 타입

- all : 모든 디바이스
- print : 프린터
- speech : 화면을 크게 읽는 스크린 리더
- screen : 컴퓨터 스크린, 태블릿, 스마트폰 등

## 반응형 디자인

```css
@media screen and (max-width: 768px) {
	body {
		background-color: lightgreen;
	}
}
```

미디어 타입이 스크린이고, 화면의 최대 너비가 768px일 때, 즉 화면의 너비가 768px 이하일 때 적용된다.

```css
/* Mobile First */

.title {
	font-size: 12px;
}

@media (min-width: 640px) {
	.title {
		font-size: 14px;
	}
}

@media (min-width: 768px) {
	.title {
		font-size: 16px;
	}
}

@media (min-width: 1024px) {
	.title {
		font-size: 18px;
	}
}
```

너비가 800px인 뷰포트에서 보는 경우, 최소 너비 648px, 최소 너비 768px 모두 만족하므로, 두 스타일시트가 덮어 써져서, 최종적으로 16px이 글자 크기가 된다.

![R1280x0 (1082×542) (daumcdn.net)](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboX5jx%2FbtqFA516i19%2FORps2QBtJekCopYgYObGb0%2Fimg.png)
