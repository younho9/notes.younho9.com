---
tags:
  - webpack
  - terms
  - glossary
publish: true
created: 2022-01-05 21:09
updated: 2022-01-05 21:09
---

- 사용자가 애플리케이션을 로드할 때 초기 경로에 필요한 코드만 보내도록 JavaScript 번들을 분할하는 것.

```js
import moduleA from "library";

form.addEventListener("submit", e => {
  e.preventDefault();
  someFunction();
});

const someFunction = () => {
  // uses moduleA
}
```

- 동적 가져오기를 사용하여 모듈을 초기 번들에 포함하지 않도록 개선

```js
form.addEventListener("submit", e => {
  e.preventDefault();
  import('library.moduleA')
    .then(module => module.default) // using the default export
    .then(someFunction())
    .catch(handleError());
});

const someFunction = () => {
    // uses moduleA
}
```

## Related

## References

- [Code Splitting | webpack](https://webpack.js.org/guides/code-splitting/)
- [Reduce JavaScript payloads with code splitting (web.dev)](https://web.dev/reduce-javascript-payloads-with-code-splitting/)