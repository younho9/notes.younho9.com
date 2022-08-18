---
title: <article> vs <section>
category: HTML
tags:
  - html
  - semantic
  - web
  - vs
aliases:
  - article 태그와 section 태그의 차이점
publish: true
created: 2022-01-07 17:01
updated: 2022-01-07 17:01
---

# {{ $frontmatter.title }}

- `<article>`은 다른 요소와 관계 없이, **독립적, 자체적인 의미가 있는 콘텐츠** 블록을 묶는다.
  - ex) 게시판과 블로그의 게시글, 뉴스 기사
  - 게시글의 댓글도 `<article>` 이 될 수 있고, `<article>` 요소 내부에 `<article>` 요소가 중첩될 수 있다.
- `<section>`은 일반적인 구획 요소로, 서로 관계가 있는 부분을 **함께 그룹화** 한다.
  - ex) 미니맵 또는 기사 헤드라인 및 요약 섹션
- `<article>` 내에 여러 `<section>`이 있을 수 있고, `<section>` 내에 여러 `<article>` 이 있을 수 있다.

```html
<article>
	사람
	<section>뚱뚱한 사람</section>
	<section>마른 사람</section>
</article>

<section id="content">
	<article>블로그 글1</article>
	<article>블로그 글2</article>
	<article>블로그 글3</article>
</section>
```

## Related

- [[시맨틱(Semantic)-태그|시맨틱(Semantic) 태그]]

## References

- [`<section>`: 일반 구획 요소 - HTML: Hypertext Markup Language | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section)
- [`<article>` - HTML: Hypertext Markup Language | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article)
- [[html5] article vs section 차이 (tistory.com)](https://aboooks.tistory.com/346)
