---
title: 캐럿(caret) vs 틸드(tilde)
category: NPM
tags:
  - npm
  - vs
aliases:
  - 캐럿과 틸드의 차이
  - caret vs tilde
publish: true
created: 2022-01-06 19:55
updated: 2022-01-06 19:55
---

# {{ $frontmatter.title }}

- 캐럿(^) 의존성 : 하위호환성을 지키는 범위에서 업데이트
  - `^1.0.2` : `2.0> x >=1.0.2`
  - `^1.0` : `2.0> x >=1.0.0`
  - `^1` : `2.0> x >=1.0.0`
  - 버전이 1.0.0 미만인 경우, 틸드처럼 동작한다.
- 틸드(~) 의존성 : 마지막 자리 내의 범위에서 업데이트
  - `~0.0.1` : `0.1.0> x >=0.0.1 `
  - `~0.1.1` : `0.2.0> x >=0.1.1 `
  - `~0.1` : `0.2.0> x >=0.1.0 `
  - `~0` : `1.0> x >=0.0 `

## Related

- [[npm-update|npm update]]

## References

- [Difference between tilde ( ~ ) and caret ( ^ ) in package.json - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-tilde-and-caret-in-package-json/)
- [npm package.json에서 틸드(~) 대신 캐럿(^) 사용하기 :: Outsider's Dev Story](https://blog.outsider.ne.kr/1041)
