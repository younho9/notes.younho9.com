---
title: 수동으로 로컬 컴퓨터에 GitLab Runner 설치하기
category: GitHub & GitLab
tags:
  - gitlab
  - git
  - docker
aliases:
  - 수동으로 로컬 컴퓨터에 GitLab Runner 설치하기
related:
  - Windows에-WSL-설치
created: 2022-03-24T05:17:00.000Z
updated: 2022-09-06T02:59:43.967Z
---

# {{ $frontmatter.title }}

- Enabling Virtualization in BIOS CPU
- [[Windows에-WSL-설치|Windows에 WSL 설치]]
  - 참고 : [WSL2(Windows Subsystem for Linux 2) 설치 및 사용 방법 | 44BITS](https://www.44bits.io/ko/post/wsl2-install-and-basic-usage)
- GitLab 레포지토리에서 > Settings > CI/CD > Runners > Specific Runners > Set up a specific Runner manually 로 이동한다.
  - [CI / CD Settings](https://stove-gitlab.sginfra.net/web-front/stove-ui/-/settings/ci_cd#Specific-Runners)
- [Install GitLab Runner | GitLab](https://docs.gitlab.com/runner/install/)
- [Install GitLab Runner manually on GNU/Linux | GitLab](https://docs.gitlab.com/runner/install/linux-manually.html)

```sh
# Replace ${arch} with any of the supported architectures, e.g. amd64, arm, arm64 # A full list of architectures can
curl -LJO "https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_${arch}.deb"
```
