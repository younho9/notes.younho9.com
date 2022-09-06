---
title: 정규화(Normalization)
category: Glossary
tags:
  - glossary
  - terms
aliases:
  - 정규화(Normalization)
created: 2022-01-11T15:36:00.000Z
updated: 2022-09-05T05:04:22.308Z
---

# {{ $frontmatter.title }}

- 깊은 중첩을 포함해서 복잡하고, 일부 데이터가 중복되는 경우에 상태를 평평하게 고유한 ID를 가진 객체로 구성하여 데이터 중복을 피하는 것.
- 정규화를 하고 나면 각 아이템은 한 곳에서만 정의된다. 따라서, 항목이 변경되면 여러 곳에서 변경하려고 할 필요가 없다.
- reducer의 논리가 깊은 수준의 중첩을 처리할 필요가 없이 간단하고 일관된다.

## Related

## References

- [Normalizing State Shape | Redux](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)
- [Frontend Data Normalization - John Raptis](https://www.johnraptis.dev/frontend-data-normalization/)
