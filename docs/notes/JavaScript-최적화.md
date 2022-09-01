---
title: JavaScript 최적화
category: JavaScript
tags:
  - javascript
  - web
  - performance
publish: true
created: 2022-01-08T06:45:00.000Z
updated: 2022-01-08T16:41:00.000Z
---

# {{ $frontmatter.title }}

- [[PRPL-패턴|PRPL 패턴]]
- [[코드-스플리팅(Code-Splitting)|코드 스플리팅(Code Splitting)]]
- 사용하지 않는 코드 제거하기
- 네트워크 응답 페이로드를 축소하고 압축하기
- 최신 브라우저에 최신 코드를 제공하여 페이지 로드를 빠르게 하기
  1.  타겟팅하려는 브라우저를 식별한다.
  2.  @babel/preset-env를 사용할 때, `last 2 versions` 등의 설정은 모든 브라우저의 마지막 두 버전을 위한 코드로 변환하므로 번들 사이즈를 불필요하게 증가시킬 수 있다. (`>0.25%` 와 같은 설정을 추천한다.)
  3.  모듈을 지원하는 브라우저에 `type="module"` 스크립트를 제공하고, 모듈을 지원하지 않는 브라우저에 `nomodule` 스크립트를 제공하여, 모듈을 지원하는 브라우저에 최소한의 트랜스파일된 코드를 사용하도록 한다.
      ```html
      <script type="module" src="main.mjs"></script>
      <script nomodule src="compiled.js" defer></script>
      ```

## Related

## References

- [Fast load times (web.dev)](https://web.dev/fast/#optimize-your-javascript)
