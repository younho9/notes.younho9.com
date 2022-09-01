---
title: v-model
category: Vue
tags:
  - vue
created: 2021-12-30T04:06:00.000Z
updated: 2021-12-30T04:16:00.000Z
---

# {{ $frontmatter.title }}

```vue
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

- 폼 요소의 `value` , `checked` , `selected` 속성을 모두 무시한다.
- Vue 인스턴스의 data를 two-way 바인딩하여 사용한다.
- Input text 타입에 대해서는 `v-bind:value` 와 `v-on:input` 을 조합해서 만들었다.
  - 각 폼 요소 및 타입마다 조합이 다를 수는 있다.

[Form Input Bindings — Vue.js (vuejs.org)](https://vuejs.org/v2/guide/forms.html#Basic-Usage)

## 의문점

- `v-model` + `@change` 를 함께 사용할 때, `@change` 핸들러가 모델이 변경될 때마다 실행되지 않는다.
  - 이것은 React의 onChange 동작과 착각을 해서 그렇다.
  - HTML에서 onChange는 콘텐츠가 변경된 후 요소가 포커스를 잃을 때 발생한다.
    - 요소의 값이 변경된 직후에 발생하는 이벤트는 onInput 이벤트이다.
  - [DOM Elements – React (reactjs.org)](https://reactjs.org/docs/dom-elements.html#onchange)
  - [How onChange Differs Between React and Vanilla JavaScript | by Moon | Better Programming](https://betterprogramming.pub/how-onchange-differs-between-react-and-vanilla-javascript-90b56d6a340a)
