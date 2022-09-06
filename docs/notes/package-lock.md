---
title: package-lock.json
category: npm
tags:
  - npm
aliases:
  - package-lock.json
created: 2022-01-13T01:05:00.000Z
updated: 2022-09-06T14:00:07.076Z
---

<Metadata />

- 소스 레포지토리에 커밋하기 위한 것이다.
  - 종속성 트리의 단일 표현을 설명하여, 팀원 간의 배포 및 지속적인 통합을 보장한다.
  - node_modules 디렉토리를 커밋할 필요 없이 "시간 여행"할 수 있는 기능을 제공한다.

## 라이브러리에서

- 잠금 파일은 제어된 재현 가능한 환경을 원하는 앱에 적합하지만, 패키지의 경우 이는 의미가 없다.
  - 사용자가 install 할 때 의존성 내부의 package-lock.json은 무시되고, 패키지의 디펜던시 트리와 사용자의 디펜던시 트리는 일치하지 않는다.
  - 그래서 패키지의 의존성이 패치 릴리즈에서 변경되면 유저에게 잠재적으로 문제가 발생할 수 있다.
  - lock 파일은 패키지 개발자가 로컬에서 문제를 겪을 수 있지만, 유저에게 영향을 미칠 수 있으므로, 제거한다.
- 논쟁의 여지는 있다고 생각한다.

## References

- [package-lock.json | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json)
- [What do you think of lockfiles? · Issue #479 · sindresorhus/ama (github.com)](https://github.com/sindresorhus/ama/issues/479#issuecomment-310661514)
