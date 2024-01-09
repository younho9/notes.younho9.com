---
title: npm과 Node.js 버전 호환성
category: npm
aliases:
  - npm과 Node.js 버전 호환성
created: 2024-01-09T03:00:12.759Z
updated: 2024-01-09T04:56:47.239Z
---

Node.js를 설치하면, 기본적으로 호환되는 버전의 npm이 포함되어 함께 설치된다.

```
$ node -v
v20.10.0

$ npm -v
10.2.3
```

Node.js의 각 메이저(Major) 버전 별 기본적으로 포함된 npm 버전은 https://nodejs.org/en/about/previous-releases 에서 볼 수 있다.

![[Node.js-버전-정책-이해하기-2.png]]

하지만, Node.js 메이저 버전과 npm 메이저 버전은 1:1의 관계가 아니다. 특정 npm 버전이 호환되는 Node.js 버전은, npm package.json의 [`engines` 필드](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#engines)에서 확인할 수 있다.

[npm@9.9.2 package.json의 engines 필드](https://github.com/npm/cli/blob/v9.9.2/package.json#L263-L265)

```
"engines": {
	"node": "^14.17.0 || ^16.13.0 || >=18.0.0"
}
```

위처럼 `engines` 명시에 따라 npm@9.9.2 버전은 아래 Node.js 버전과 호환된다.

- `^14.17.0` = `>=14.17.0 <15.0.0`
- `^16.13.0` = `>=16.13.0 <17.0.0`
- `>=18.0.0` = `>=18.0.0`

따라서, Node.js의 특정 버전을 사용하면서, 각자 다른 버전의 npm을 사용할 수 있다. 하지만, npm 버전에 따라 의존성 해결(Dependency Resolution) 방식이 변경될 수 있기 때문에, npm 버전이 다르다면, 설치된 의존성의 버전이 다를 수 있고 이로 인해 각 환경의 차이가 발생할 수 있다.

따라서 npm 버전은 현재 프로젝트에서 사용 중인 Node.js에 기본적으로 포함된 npm 버전을 사용하는 것이 좋다. 이렇게 하면, 각자의 로컬 프로젝트 개발 환경과 빌드 환경의 차이를 줄일 수 있고 특정 환경에서만 재현되는 버그를 줄일 수 있다.
