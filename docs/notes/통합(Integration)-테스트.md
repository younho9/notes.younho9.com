---
title: 통합(Integration) 테스트
category: Test
tags:
  - testing
  - glossary
  - terms
aliases:
  - 통합(Integration) 테스트
publish: true
created: 2022-08-09T13:52:00.000+09:00
updated: 2022-08-22T11:43:26.361+09:00
---

# {{ $frontmatter.title }}

- 통합 테스트는 단위 테스트보다 더 큰 동작을 달성하기 위해 여러 모듈들을 모아 이들이 의도대로 협력하는지 확인한다.
- 통합 테스트는 외부와 인터페이스하는 코드의 외부 경계를 테스트한다.
  - 따라서 코드가 AJAX, localStorage 또는 IndexedDB를 사용하여 단위 테스트할 수 없는 경우, 해당 인터페이스를 모킹(Mock)하고 테스트한다.

## Related

- [[End-to-End(E2E)|End-to-End(E2E) 테스트]]
- [[MSW(Mock-Service-Worker)|MSW(Mock Service Worker)]]

## References

- [Static vs Unit vs Integration vs E2E Testing for Frontend Apps (kentcdodds.com)](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests#integration)
