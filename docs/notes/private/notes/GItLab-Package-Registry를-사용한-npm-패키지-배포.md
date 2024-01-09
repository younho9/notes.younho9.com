---
title: GitLab Package Registry를 사용한 npm 패키지 배포
category: npm
aliases:
  - GitLab Package Registry를 사용한 npm 패키지 배포
created: 2024-01-09T03:00:12.744Z
updated: 2024-01-09T04:55:50.556Z
tags:
  - gitlab
  - npm
---

## 배경

`@stove-ui/vue`, `@indie/components`, `@stove/currency` 등 많은 npm 패키지들이 팀 내/외에서 공유되고 사용되고 있음.

해당 패키지를 Public npm package registry에 배포할 수 없고 다른 Registry를 사용하고 있지 않기 때문에 GitLab 레포지토리를 npm 패키지로 설치하는 `npm install <git remote url>` 명령어를 사용하여 패키지를 설치했음.

하지만 git remote url로 패키지를 설치하는 것은 몇가지 단점이 있었음.

이러한 문제로, Private npm package registry 구축 등을 고려할 수 있으나, GitLab 버전이 업데이트 되면서 GitLab Private Registry 기능을 사용할 수 있게 되어, 해당 방법을 사용해 npm 패키지를 배포하는 방법 도입을 검토함.

## git remote url의 단점

그럼에도 불구하고, git remote url이 가지는 단점이 있다.

1. 설치 시간이 오래 걸린다.
   - 패키지가 설치되면서 devDependencies를 포함한 모든 프로젝트를 설치해야 함.
   - 프로젝트가 설치된 이후 빌드 단계를 실행해야 함.
2. npm install은 git 의존성을 최신 버전으로 업데이트하지 않는다.
   - [Updating git dependency urls does not work · Issue #1727 · npm/npm (github.com)](https://github.com/npm/npm/issues/1727)
   - 패키지 설치시 semver를 따라 자동으로 업데이트 되는 NPM 레지스트리와 달리, 직접 의존성을 수정해야 함.
   - 이러한 문제로 기존 패키지를 uninstall 하고, 다른 버전으로 install 하면서 실제 시간이 더 오래 걸리게 됨.
3. 하나의 Git 레포지토리에서 하나의 패키지만 배포할 수 있다.
   - [모노레포 구조로 패키지를 관리할 수 없다.](https://gitlab.idc-sginfra.net/help/user/packages/workflows/working_with_monorepos.md)
4. 빌드 산출물 폴더(`dist` 폴더)가 버전 관리에 포함되어, 용량이 크고, 불필요한 diff를 발생시키며, 코드리뷰를 어렵게 만든다.

```
time npm install git+https://stove-gitlab.sginfra.net/web-front/seed-universal.git#renewal-1.2.29
npm install   25.19s user 35.79s system 205% cpu 29.693 total

time npm install git+https://stove-gitlab.sginfra.net/web-front/stove-packages.git#beta_v2_1.2.6
npm install   50.07s user 19.03s system 103% cpu 1:06.76 total

time npm install git+https://stove-gitlab.sginfra.net/web-front/stove-ui.git#feature/indie-components
npm install   47.48s user 23.93s system 55% cpu 2:08.31 total

time npm install git+https://stove-gitlab.sginfra.net/web-front/indie-components.git#release/v1
npm install   96.25s user 69.74s system 58% cpu 4:45.91 total
```

- seed-universal : 29.693초
- stove-packages : 1분 6.76초
- stove-ui : 2분 8.31초
- indie-components : 4분 45.91초

## GitLab Private Registry

> - https://gitlab.idc-sginfra.net/help/user/packages/package_registry/index.md
> - https://gitlab.idc-sginfra.net/help/user/packages/npm_registry/index.md

GitLab Private Registry는 GitLab 13.3 부터 GitLab Premium에서 GitLab Free에서도 사용할 수 있게 되었다. GitLab 패키지 레지스트리를 사용하면 프로젝트에서 종속성으로 사용할 수 있는 패키지를 게시하고 공유할 수 있다.

### GitLab Package Registry에 패키지 게시하기

> 예제 : https://gitlab.idc-sginfra.net/yhchoo/hello-gitlab-registry

1. `.npmrc` 를 통해 인증

`.npmrc` 파일을 `package.json` 파일과 같은 폴더에 생성하고, 다음의 내용을 입력한다.

```
@scope:registry=https://your_domain_name/api/v4/projects/your_project_id/packages/npm/
//your_domain_name/api/v4/projects/your_project_id/packages/npm/:_authToken="${NPM_TOKEN}"
```

여기서 `NPM_TOKEN`은 그룹 액세스 토큰, 프로젝트 액세스 토큰, 개인 액세스 토큰 중 하나로 `api` 권한이 있어야 한다.

> [Group Access Tokens 관리](https://gitlab.idc-sginfra.net/groups/web-front/-/settings/access_tokens)

2. `package.json` > `publishConfig` 설정

`package.json` 파일의 `publishConfig` 을 아래와 같이 설정하여 패키지를 GitLab 패키지 레지스트리에 게시하도록 설정한다.

```
"publishConfig": {
	"@scope:registry": "https://your_domain_name/api/v4/projects/your_project_id/packages/npm/"
},
```

3. [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish)

`NPM_TOKEN` 환경 변수를 사용하여 `npm publish` 를 실행하면, GitLab Package Registry에 패키지가 게시된다.

게시된 패키지는 프로젝트 레포지토리의 Deploy > Package Registry에서 볼 수 있다.

> https://gitlab.idc-sginfra.net/yhchoo/hello-gitlab-registry/-/packages

### GitLab Package Registry에서 패키지 설치하기

1. `.npmrc` 를 통해 인증

패키지를 설치하려는 프로젝트에서도, `.npmrc` 파일을 `package.json` 파일과 같은 폴더에 생성하고, 다음의 내용을 입력한다.

```
@scope:registry=https://your_domain_name/api/v4/projects/your_project_id/packages/npm/
//your_domain_name/api/v4/projects/your_project_id/packages/npm/:_authToken="${NPM_TOKEN}"
```

2. `npm install @scope/my-package`

여러 패키지의 이름과 버전이 동일한 경우 패키지를 설치할 때 가장 최근에 게시된 패키지가 검색되고, 설치된다.

특정 버전을 명시하기 위해서는 `npm install @scope/my-package@<version-name>` 으로 설치할 수 있다.

```
time npm install @indie/components
npm install @indie/components  5.25s user 1.32s system 66% cpu 9.855 total
```

- indie-components : 9.855초

### GitLab CI를 통해 패키지 배포하기

`@indie/components` 에서는 빌드 산출물 생성, CHANGELOG 생성, package.json > version 필드 업데이트, 태그 생성 및 태그 push의 과정을 GitLab CI를 통해 진행하고 있었다.

기존 CI에서 `npm publish` 과정만을 추가하여, 패키지 레지스트리에 게시까지 자동화할 수 있었다.

### 추가 고려사항

요구사항이 늘어남에 따라 하나의 패키지가 점점 커지고, 하나의 패키지가 다루는 범위 / 관심사가 많아진다.
하나의 패키지가 이를 모두 포함하는 경우, 소스는 복잡해지고, 용량이 커진다. 하지만 이를 다른 패키지로 나누는 경우 레포지토리를 새로 생성해야 하며, 버전 관리, 개발 환경 설정, 공용 모듈 재사용 등의 문제가 발생한다.

이를 해결하기 위한 방법으로 하나의 레포지토리에서 여러 패키지를 관리할 수 있는 모노레포 전략이 있으며, GitLab Package Registry의 도입으로 모노레포 도입이 가능해졌다. (기존의 git remote url 설치로는 하나의 레포지토리에서 여러 패키지를 배포하는 것이 어려웠다.)

현재에도 @stove/currency, @stove-ui/vue, @indie/components 등 여러 모듈들이 존재하며, 내부적으로도 공용 로직들이 모듈화되지 않아 중복 개발이 발생하였다.

하나의 레포지토리에서 여러 모듈을 관리하고 배포할 수 있는 프로젝트를 구성할 수 있도록 모노레포 도입을 검토해볼 수 있을 것 같다.
