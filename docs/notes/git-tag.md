---
title: git tag
category: Git
tags:
  - git
aliases:
  - tag
  - 태그
  - git tag
created: 2021-12-30T04:06:00.000Z
updated: 2022-05-19T01:22:00.000Z
---

# {{ $frontmatter.title }}

## 태그 조회하기

```sh
$ git tag
```

## 태그 변경 및 삭제하기

```sh
$ git tag -d v1.0.0
```

## 원격 저장소에 올라간 태그 삭제하기

```sh
$ git push origin :v1.0.0
```
