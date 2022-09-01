---
title: Notion URL Shortener
category: Project
tags:
  - project
publish: true
created: 2022-02-03T13:15:00.000Z
updated: 2022-02-03T23:02:00.000Z
---

# {{ $frontmatter.title }}

## [[2022-02-03]]

### 이메일 인증

- 이메일 인증은 password가 없어도 되지만, 이메일로 로그인 가능한 token을 가진 링크를 전송하고 나서, 해당 token의 유효성을 검사할 로직이 필요하기 때문에, 데이터베이스가 필요하다.

### 토큰 인증

- 노션의 Access Token을 가지고 API 요청을 보낼 수 있는지 확인하자.

### 로그인 페이지 vs 팝업

- 페이지를 새로 파지 말고, 팝업으로 처리하자.

- Chakra-ui 팝업

- 데이터 페칭을 위한 react-query ?
  - 일단 보류

### 토큰을 서버에 고정시켜두기 vs 요청마다 네트워크로 전송하기

- 서버에 고정시켜두면 편하다.

- 네트워크로 전송해야 인증이 가능하다.

  - API로 누군가 데이터베이스를 공격할 수 있음.

- Public 노션 데이터베이스는 키가 필요 없나..?
  - 확인해봐야 될 듯.

### NextJS를 사용해서 API 요청을 서버에서 하기 vs 브라우저에서 하기

## [[2022-02-05]]

- [x] Public 노션 데이터베이스는 키가 필요 없는지?
  - Public 이어도 키가 필요하다.
  - 환경변수로 노션 토큰을 삽입하거나 삽입하지 않거나로 판단해야 할 듯.
    - GET 요청에 대해서는 토큰이 필요하다.
    - PUBLIC 일지아닐지에 대해 환경 변수 세팅
- `NEXT_PUBLIC_` : 기본적으로 환경 변수는 Node.js 환경에서만 사용할 수 있으므로 브라우저에 노출하지 않는다. 브라우저에 변수를 노출하려면 변수에 접두사(`NEXT_PUBLIC_`)를 붙여야 한다.

- 읽기 권한 (무제한), 쓰기 권한 (토큰 기반 or 무제한)

  - 네이밍
    - 서버 사이드에서 토큰을 인증을 위해 사용할 것인지 플래그
    - ky의 URLSearchParams

- React 토큰 기반 인증 구현
  - 처음부터 컴포넌트, 리듀서를 다른 파일로 나누고 하다 보니, 점점 복잡해지는 것 같다.
  - 일단 한페이지에서부터 구현하고 잘게 쪼개는 방법이 맞는 것 같다.

## [[2022-02-09]]

- 토큰 기반 인증 구현 완료
- [ ] 전역 상태로 token 관리
  - [ ] token 만료 시 token 팝업 띄우기
- [ ] 모달 창 UNAUTHORIZED 애니메이션
- [ ] 전체 피쳐에 대해 테스트 코드 구현
  - [ ] E2E,
  - [ ] UNIT 테스트

## [[2022-02-15]]

- 처음 진입 시, localStorage에 token이 있는 경우
  - 모달을 띄우지 않고, 내부적으로 토큰 인증
    - 실패할 경우 모달 오픈
- 모달 창에서
  - token 입력 후 인증 성공 시 토큰 로컬스토리지에 저장
  - 로딩 상태 버튼 표시
  - 인증 실패 시 에러 표시

## [[2022-02-17]]

- 토큰 기반 인증 추상화
- @react-hookz/web > useLocalStorage
  - `initializeWithStorageValue: false` 로 설정하여 SSR에서도 서버와 브라우저 간에 초기 값을 동일하게 사용.
- 애니메이션 유지하도록 수정

## [[2022-02-18]]

- 누군가 관심을 보이고 discussion을 남김
- error 메시지가 노출되지 않는 현상 해결
  - local에서는 response.statusText가 정상적으로 보이나, vercel에 배포된 환경에서는 response.statusText가 빈 문자열인 현상이 있었음.
  - localhost는 기본적으로 http/1.1 이다.
  - http/2에서는 statusText를 지원하지 않는다.
    - [Response.statusText - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText#value)
- 그 외 Vercel 배포 환경을 로컬에서 정확히 재현하는 방법을 잘 모르겠다. node 14 버전으로 빌드하고 로컬 실행해도 다른 결과가 있을 때가 있다.
  - Preview 배포에 환경 변수 설정하여 `__DEV__` 일 때 로그 찍는 방법.

## [[2022-02-26]]

- DatabaseClient를 추상화해서 모델이 NotionDatabaseClient를 직접 의존하지 않도록 함.
- visits 필드 추가
- XO Config 업데이트

  - null -> undefined로 변경

- [ ] URL.prototype.href 대신 decodeURI로 변경하기
- [ ] [How to Test Serverless Functions with Jest & Next.js API Routes - Space Jelly](https://spacejelly.dev/posts/how-to-test-serverless-functions-with-jest-next-js-api-routes/#step-3-testing-nextjs-serverless-functions-with-jest)

- e2e test
- unit test
- api test

## [[2022-02-28]]

- Next JS + Jest + TypeScript 환경 설정
- env.test.local
  - [Basic Features: Environment Variables | Next.js (nextjs.org)](https://nextjs.org/docs/basic-features/environment-variables#test-environment-variables)
- [Testing | Next.js (nextjs.org)](https://nextjs.org/docs/testing#running-your-cypress-tests)
  - e2e 테스트를 production 환경에서 실행하는게 좋은가?
    - database가 테스트로 인해 오염됨.
    -
- esModule 설정
- next + babel-jest
  - [next.js/jest.config.js at canary · vercel/next.js (github.com)](https://github.com/vercel/next.js/blob/canary/examples/with-jest-babel/jest.config.js#L28-L32)
- node http mocks
  - [howardabrams/node-mocks-http: Mock 'http' objects for testing Express routing functions (github.com)](https://github.com/howardabrams/node-mocks-http)
  - [How to Unit Test Next.js API Routes with TypeScript | by Paige Niedringhaus | Feb, 2022 | ITNEXT](https://itnext.io/how-to-unit-test-next-js-api-routes-with-typescript-ec1146b4b9b3)

## [[2022-03-05]] [[2022-03-07]]

- Cypress 설정
  - typescript 설정
  - tsconfig
- Jest를 Cypress와 같이 쓸 필요가 있을까? 고민..
- Cypress commands?
  - https://github.com/javierbrea/cypress-localstorage-command
