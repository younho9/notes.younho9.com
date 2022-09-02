---
title: 의존성 배열(dependency list)
category: React
tags:
  - react
aliases:
  - 의존성 목록
  - 종속성 목록
  - 종속성 배열
publish: true
created: 2022-01-02T08:28:00.000Z
updated: 2022-09-02T00:54:31.643Z
---

# {{ $frontmatter.title }}

- [[useEffect]]는 컴포넌트가 다시 렌더링 될 때마다 실행될 [[부수-효과(Side-Effect)|부수 효과(Side Effect)]]를 정의한다.
- 이 때, 실행될 부수효과가 어떤 데이터가 변경될 때만, 실행되길 원할 때 의존성 배열에 명시할 수 있다.
- 의존성 배열은 [[동일성(equality)|참조 동일성]]을 검사한다. [Object.is]

## Related

## References
