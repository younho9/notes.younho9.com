---
title: python pip 패키지 관리
category: Python
tags:
  - python
created: 2021-03-27T00:00:00.000+09:00
updated: 2021-03-27T00:00:00.000+09:00
---

# {{ $frontmatter.title }}

## requirements.txt에 명시된 의존성 설치

```bash
pip install -r requirements.txt
```

## 현재 pip에 설치된 모듈 requirements.txt에 명시하기

```bash
pip freeze > requirements.txt
```

## 현재 pip에 설치된 리스트 보기

```bash
pip list
```

## pip에 설치된 모듈 모두 삭제하기

```bash
pip freeze | xargs pip uninstall -y
```

## requirements.txt에 GitHub 소스로 명시하기

[How to state in requirements.txt a direct github source](https://stackoverflow.com/a/35998253/12983614)
