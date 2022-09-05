---
title: Naming Convention
category: Programming
tags:
  - programming
aliases:
  - Naming Convention
created: 2022-03-19T04:13:00.000Z
updated: 2022-09-05T05:04:21.842Z
---

# {{ $frontmatter.title }}

## Key-Value Map

`Map` 에 대한 네이밍 컨벤션

`values` 와 같은 단순 복수형 네이밍은 `Array` 와 구분이 어렵다.

- [Naming Maps in ES6. Help your vars explain themselves to… | by Matthew Chase Whittemore | Social Tables Tech | Medium](https://medium.com/social-tables-tech/naming-maps-in-es6-b0989b390ddf)
- [Naming Conventions for Key-Value Maps (softwareas.com)](https://softwareas.com/naming-conventions-for-key-value-maps/)

위 글들에서는 아래의 네이밍을 제안한다.

1. keyToValue
2. keysToValues
3. valuesByKeys
4. valueByKey

이렇게 했을 때에는, 좀 더 읽기 쉬운 방식으로 키로 값을 조회할 수 있다.

```js
const valueByKey = {
	key1: 'value1',
	key2: 'value2',
};

const value1 = valueByKey.key1;
// 또는
const value2 = valueByKey['key2'];

console.log(value1, value2);

for (const key in valueByKey) {
	const value = valueByKey[key];

	console.log(key, value);
}
```

## "Show" Boolean

- Boolean 변수(flag) 앞에 `is`, `has`, `can`, `did`, `will` 등의 접두사를 사용하는 규칙은 일반적으로 알려져 있다.
  - [Rule proposal: Boolean variable naming · Issue #515 · typescript-eslint/typescript-eslint (github.com)](https://github.com/typescript-eslint/typescript-eslint/issues/515)
  - [Tips on naming boolean variables - Cleaner Code - Michael Zanggl](https://michaelzanggl.com/articles/tips-on-naming-boolean-variables/)
- 어떤 요소를 화면에 표시할 것인지에 대한 flag에 대해 `showXXX` 와 같이 네이밍하는 케이스들을 많이 발견했다.
  - 하지만, `showXXX` 는 상태(state)를 설명하기 위해 **동사**가 사용되어, 어떤 동작을 수행하는 함수로 잘못 인식될 수 있다.
    > You are using a verb to describe state (show) which I think is where the problem arises (https://softwareengineering.stackexchange.com/a/391272)
  - 대안 :
    - `myButton.canBeShown` : if I want to know whether the button can be shown or not.
    - `myButton.isShown` or `myButton.isVisible` : to know whether the button is currently showing or not.
    - `myButton.isAlwaysShown` : to know whether the button must be shown everytime or not.
      > [Booleans Naming conventions : How to prefix a "show" boolean? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/391271/booleans-naming-conventions-how-to-prefix-a-show-boolean)
