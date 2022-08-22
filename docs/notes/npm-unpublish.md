---
title: npm unpublish
category: NPM
tags:
  - npm
created: 2021-12-30T13:06:00.000+09:00
updated: 2021-12-30T13:15:00.000+09:00
---

# {{ $frontmatter.title }}

## 특정 버전의 패키지 개시 취소하기

```sh
$ npm unpublish [<@scope>/]<pkg>@<version>
```

```sh
$ npm unpublish [<@scope>/]<pkg> --force
```

게시를 취소하더라도 한 번 배포된 패키지의 이름 + 버전 조합은 다시 사용할 수 없다.

[[npm-deprecate]]를 사용할 것을 권장함.
