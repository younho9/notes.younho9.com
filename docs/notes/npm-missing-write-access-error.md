---
title: npm missing write access error
category: Troubleshooting
tags:
  - npm
  - troubleshooting
  - troubleshooting
created: 2021-03-09T00:00:00.000+09:00
updated: 2022-08-22T11:54:20.391+09:00
---

# {{ $frontmatter.title }}

## 에러 상황

npm을 처음 설치하고 `global` 옵션으로 `yarn` 을 설치하려고 할 때 에러가 발생했다 .

```bash
Missing write access to /usr/local/lib/node_modules
```

![npm-missing-write-access-error-image-0](./images/npm-missing-write-access-error-image-0.png)

해당 디렉토리에 쓰기 권한이 없다는 뜻이기 때문에, 다음의 명령어를 실행한다.

```bash
sudo chown -R $USER /usr/local/lib/node_modules
```