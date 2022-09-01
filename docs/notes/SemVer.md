---
title: SemVer
category: npm
tags:
  - npm
  - publish
created: 2021-12-30T04:06:00.000Z
updated: 2022-08-22T02:54:45.169Z
---

# {{ $frontmatter.title }}

![semver.png (524×247) (geeksforgeeks.org)](https://media.geeksforgeeks.org/wp-content/uploads/semver.png)

버전을 Major.Minor.Patch(주.부.수) 숫자로 하고:

1. 기존 버전과 호환되지 않게 API가 바뀌면 Major(주) 버전을 올리고, (`BREAKING CHANGE` 또는 `!` 문자열을 붙인 커밋)
2. 기존 버전과 호환되면서 새로운 기능을 추가할 때는 Minor(부) 버전을 올리고, ( `feat` 타입의 커밋)
3. 기존 버전과 호환되면서 버그를 수정한 것이라면 Patch(수) 버전을 올린다. ( `fix` 타입의 커밋)

## Reference

- [유의적 버전 2.0.0 | Semantic Versioning (semver.org)](https://semver.org/lang/ko/)
- [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/)
