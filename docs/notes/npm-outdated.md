---
tags:
  - npm
created: 2021-12-30 13:06
updated: 2021-12-30 13:15
---

# npm outdated

## 오래된 패키지 확인하기

```sh
$ npm outdated
```

- 레지스트리를 검사하여 설치된 패키지 중에, 오래된(outdated) 패키지가 있는지 확인하는 명령어
- `wanted` : 패키지의 `package.json` 에 명시된 [[semver]]를 만족하는 버전 중 최대 버전
- `latest` : 패키지의 최신 버전
- 빨간색으로 표시된 패키지는 semver를 만족하는 새로운 버전이 있는 패키지이다.
- 노란색으로 표시된 패키지는 현재 `package.json` 명시된 semver를 만족하지만, 새로운 버전(`latest`)이 있는 경우이다.

## Reference

- [npm-outdated | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v7/commands/npm-outdated)
