---
title: npm outdated
category: npm
tags:
  - npm
aliases:
  - npm outdated
related:
  - SemVer
  - 캐럿(caret)-vs-틸드(tilde)
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-26T10:14:09.129Z
---

## 오래된 패키지 확인하기

```sh
$ npm outdated
```

- 레지스트리를 검사하여 설치된 패키지 중에, 오래된(outdated) 패키지가 있는지 확인하는 명령어
- `wanted` : 패키지의 `package.json` 에 명시된 [[SemVer]]를 만족하는 버전 중 최대 버전
- `latest` : 패키지의 최신 버전
- 빨간색으로 표시된 패키지는 semver를 만족하는 새로운 버전이 있는 패키지이다.
- 노란색으로 표시된 패키지는 현재 `package.json` 명시된 semver를 만족하지만, 새로운 버전(`latest`)이 있는 경우이다.

## Example

- `package.json`

```json
"dependencies": {
	"glob": "^5.0.15",
	"nothingness": "github:othiym23/nothingness#master",
	"npm": "^3.5.1",
	"once": "^1.3.1"
}
```

```sh
$ npm outdated
Package      Current   Wanted   Latest  Location                  Depended by
glob          5.0.15   5.0.15    6.0.1  node_modules/glob         dependent-package-name
nothingness    0.0.3      git      git  node_modules/nothingness  dependent-package-name
npm            3.5.1    3.5.2    3.5.1  node_modules/npm          dependent-package-name
local-dev      0.0.3   linked   linked  local-dev                 dependent-package-name
once           1.3.2    1.3.3    1.3.3  node_modules/once         dependent-package-name
```

- `npm outdated`를 통해 [[캐럿(caret)-vs-틸드(tilde)|캐럿과 틸드의 차이]]를 확인할 수 있다.

1. 캐럿(`^`)

```json
"dependencies": {
	"vue": "^2.6.14",
}
```

```sh
$ npm outdated
Package  Current  Wanted  Latest  Location          Depended by
vue       2.7.10  2.7.10  3.2.39  node_modules/vue  dependent-package-name
```

2. 틸드(`~`)

```json
"dependencies": {
	"vue": "~2.6.14",
}
```

```sh
$ npm outdated
Package  Current  Wanted  Latest  Location          Depended by
vue       2.6.14  2.6.14  3.2.39  node_modules/vue  dependent-package-name
```

## Reference

- [npm-outdated | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v7/commands/npm-outdated)
