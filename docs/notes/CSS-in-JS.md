---
title: CSS in JS
category: CSS
tags:
  - css
  - terms
  - glossary
aliases:
  - CSS in JS
  - JSS
related:
  - FOUC(Flash-of-unstyled-content)
created: 2022-01-10T06:06:00.000Z
updated: 2022-09-06T14:00:06.326Z
---

<Metadata />

- [Facebook에서 지적한 규모있는 앱에서 CSS를 사용할 때 겪는 문제](https://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)

  1.  Global namespace
      - 클래스 이름 중복문제
  2.  Dependencies
      - 스타일 상속에 의한 중복
  3.  Dead Code Elimination
      - 미사용 코드 처리
  4.  Minification
      - 클래스이름 최소화
  5.  Sharing Constants
      - 자바스크립트 코드와 값을 연동
  6.  Non-deterministic Resolution
      - CSS 로드 순서에 따른 캐스테이드 스타일 변화
  7.  Isolation
      - 상속에 의한 영향이 없도록 격리

- CSS in JS의 성능 문제
  - 런타임, CSS 스타일 관련 코드가 JS 번들에 포함되므로 JS 사이즈가 커진다.
    - JavaScript 사이즈가 커지면 네트워크 Payload와 JS Parse 시간이 길어진다.
  - props가 변경될 때 마다 현재 props에 따라 적용해야 하는 스타일을 새로 계산해야 하기 때문에 응답성이 늦춰진다.
    - CSS는 정적으로 이미 포함되어 있으므로 스타일을 새로 계산하는 과정이 필요 없다.

## Conclusion

- 컴포넌트 기반 앱에서 스타일을 처리하는 방법에는 여러 가지가 있지만 번들 크기에 세심한 주의를 기울여라.
- 잘못된 추상화를 생성하고 불필요한 팽창으로 끝날 수 있다.
- 스타일링에 관한 모든 작업은 개발자의 것이 아니라 사용자의 이익을 위한 것이어야 한다.

## Related

- [[FOUC(Flash-of-unstyled-content)|FOUC(Flash of unstyled content)]]

## References

- [Vjeux » React: CSS in JS – NationJS](https://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)
- [andreipfeiffer/css-in-js: A thorough analysis of all the current CSS-in-JS solutions with SSR & TypeScript support for Next.js (github.com)](https://github.com/andreipfeiffer/css-in-js)
- [Real-world CSS vs. CSS-in-JS performance comparison - Tomas Pustelnik's personal website (pustelto.com)](https://pustelto.com/blog/css-vs-css-in-js-perf/)
- [How to increase CSS-in-JS performance by 175x | by Dominic Tobias | ITNEXT](https://itnext.io/how-to-increase-css-in-js-performance-by-175x-f30ddeac6bce)
