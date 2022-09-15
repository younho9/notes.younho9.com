---
title: git submodule
category: Git
tags:
  - git
aliases:
  - git submodule
  - 깃 서브모듈
  - 서브모듈
  - submodule
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-06T14:00:07.051Z
---

## 서브모듈 시작하기

```sh
$ git submodule add <remote-url>
```

## 서브모듈을 포함한 프로젝트 Clone

```sh
$ git clone <remote-url> --recursive --remote-submodules
```

> `remote-submodules` : submodule이 리모트 레포지토리를 추적하도록 설정함

## 서브모듈 업데이트하기

```sh
$ git submodule update --remote --merge <name>
# or
$ git submodule update --remote --rebase <name>
```

```sh
$ git submodule foreach git pull <remote> <branch>
```

```sh
$ git submodule update --recursive
```

## 서브모듈 삭제하기

```sh
$ git submodule deinit -f <name>
$ rm -rf .git/modules/<name>
$ git rm -f <name>
```

## References

- [# Git 도구 - 서브모듈](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88)
- [Common Git problems (and solutions!) (github.com)](https://gist.github.com/mrnabati/bc59304784e1a3a48dd25f92bf20a420)
