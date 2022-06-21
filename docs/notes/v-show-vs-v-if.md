---
tags:
  - vue
aliases:
  - v-show와 v-if의 차이점
  - v-show와 v-if
created: 2021-12-30 13:06
updated: 2022-01-14 00:12
---

# v-show vs v-if

- `v-show` 는 해당 요소에 `display: none` 을 적용한다.
- `v-if` 는 해당 요소를 DOM에 마운트하지 않는다.
- 둘은 [[vue-라이프사이클|vue 라이프사이클]]에서 차이가 있다.
  - `v-if` 는 토글될 때마다 Vue 라이프사이클이 실행된다.
  - `v-show` 의 `created` 와 `mounted` 는 토글되어도 재실행되지 않는다.

## Related

- [[display-vs-visibillity|display vs visibillity]]

## References