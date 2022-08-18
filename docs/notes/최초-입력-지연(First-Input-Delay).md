---
title: 최초 입력 지연(First Input Delay)
category: Web
tags:
  - web
  - performance
  - vitals
  - metrics
aliases:
  - FID
publish: true
created: 2022-01-13 09:36
updated: 2022-01-13 09:36
---

# {{ $frontmatter.title }}

- FID는 사용자가 페이지와 처음 상호 작용할 때(링크를 클릭하거나 버튼을 탭하거나 사용자 지정 JavaScript 기반 컨트롤을 사용할 때)부터 해당 상호 작용에 대한 응답으로 브라우저가 실제로 이벤트 핸들러 처리를 시작하기 까지의 시간을 측정한다.
- [[FP-vs-FCP-vs-FMP-vs-LCP|FP vs FCP vs FMP vs LCP]]는 사이트가 화면에 픽셀을 얼마나 빨리 칠할 수 있는지에 대한 부분이기 때문에 사이트 반응 속도 역시 중요하다.

## 최적화 방법

- 메인 스레드가 JavaScript를 실행하는 동안 사용자 입력에 응답할 수 없기 때문에, 이를 개선해야 한다.
- JavaScript의 긴 작업을 세분화 한다.
  - 장기 실행 코드를 더 작은 비동기 작업으로 세분화한다.
  - 사용하지 않는 자바스크립트를 줄인다.
    - [[트리-쉐이킹(Tree-Shaking)|트리 쉐이킹(Tree Shaking)]]
    - 사용하지 않는 JavaScript에 [[script-태그의-async와-defer-속성|script 태그의 async와 defer 속성]]를 사용한다.
    - [[코드-스플리팅(Code-Splitting)|코드 스플리팅(Code Splitting)]]
  - [[웹-워커(Web-Worker)|웹 워커(Web Worker)]]

## Related

## References

- [First Input Delay(최초 입력 지연, FID) (web.dev)](https://web.dev/fid/)
- [최초 입력 지연 최적화 (web.dev)](https://web.dev/optimize-fid/)
