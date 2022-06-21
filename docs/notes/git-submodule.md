---
tags:
  - git
aliases:
  - 깃 서브모듈
  - 서브모듈
  - submodule
created: 2021-12-30 13:06
updated: 2021-12-30 13:15
---

# git submodule

## 서브모듈 시작하기

```sh
$ git submodule add <remote-url>
```

## 서브모듈을 포함한 프로젝트 Clone

```sh
$ git clone --recurse-submodules <remote-url>
```

## 서브모듈 업데이트하기

```sh
$ git submodule update --remote <name>
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
