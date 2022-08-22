---
title: Playwright
category: Tooling
tags:
  - testing
  - tooling
aliases:
  - Playwright
publish: true
created: 2022-08-09T11:20:00.000+09:00
updated: 2022-08-09T11:20:00.000+09:00
---

# {{ $frontmatter.title }}

## Playwright 란?

### 장점

- Any browser / Any platform / One API
  - [Cross-browser](https://playwright.dev/docs/browsers)
    - Cypress는 [[Chromium(크로미움)|크로미움]] 기반의 브라우저와 파이어폭스만 지원한다. [참고](https://docs.cypress.io/guides/guides/launching-browsers#Browsers)
  - Cross-platform
  - Cross-language
  - Test Mobile Web
    - Cypress는 모바일 환경을 제공하려는 움직임이 없다.
- Full isolation
  - 개별 테스트마다 브라우저 컨텍스트를 생성한다.
- Powerful Tooling
  - [Codegen](https://playwright.dev/docs/getting-started-vscode#generating-tests-with-codegen) : 브라우저에서의 작업을 기록하고 테스트를 자동 생성

## 설치

```sh
npm init playwright@latest
# 또는
yarn create playwright
```

## 실행

```sh
npx playwright test
# 또는
yarn playwright test
```

## 테스트 리포트

```sh
npx playwright show-report
# 또는
yarn playwright show-report
```

## Related

- [[Cypress]]

## References

- [Fast and reliable end-to-end testing for modern web apps | Playwright](https://playwright.dev/)
- [playwright test로 E2E 테스트 하기(vs. Cypress) | by Jung Han | Medium](https://junghan92.medium.com/playwright-test%EB%A1%9C-e2e-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%95%98%EA%B8%B0-vs-cypress-473948d3b697)

### Who uses?

- [MUI](https://github.com/mui/material-ui)
- [Zag](https://github.com/chakra-ui/zag)
- [⌘K](https://github.com/pacocoursey/cmdk)
