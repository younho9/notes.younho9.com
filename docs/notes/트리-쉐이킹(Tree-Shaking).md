---
tags:
  - javascript
  - module
  - terms
  - glossary
publish: true
created: 2022-01-05 21:02
updated: 2022-01-12 11:35
---

# 트리 쉐이킹(Tree Shaking)

![](https://i.stack.imgur.com/xtD74.png)

- **디펜던시 트리 구조**에서 ES6 모듈에서 실제로 가져오지 않은 `export` 를 떨어버려서(shake) 불필요한 코드를 제거하는 과정

- 모던 자바스크립트 애플리케이션 개발에서 webpack, Rollup 등의 모듈 번들러를 사용하는데, 이 도구들을 사용하여 번들링할 때 트리 쉐이킹이 발생한다.

- 궁극적으로 라이브러리의 코드를 트리 쉐이크하는 것은 **앱의 번들러**이다.

  - 앱만이 라이브러리의 어떤 부분이 사용되는지 알고 있다.

- 라이브러리의 역할은 트리 쉐이크 가능하도록 보장해주는 것이다.

- 트리 쉐이킹의 요구사항
  - [ES6 모듈 문법의 정적 구조](https://exploringjs.com/es6/ch_modules.html#static-module-structure)에 의존한다.
    - CJS와 ESM의 중요한 차이는 정적인지 동적인지이다.
    - CJS에서는 다음과 같이 동적으로 의존성을 가져올 수 있다.
      ```js
      if (someCondition) {
      	const {userAccount} = require('./userAccount');
      }
      ```
  - [[부수-효과(Side-Effect)|부수 효과(Side Effect)]]가 없어야 한다.
    - package.json의 sideEffect 속성을 사용하여 컴파일러에 힌트를 제공한다.

## Webpack이 트리 쉐이킹을 수행하는 방법

- 애플리케이션 엔트리 파일 식별
- 항목 파일에서 가져온 모든 종속성 및 하위 종속성을 반복하여 모듈 트리 구성
- 가져오지 않는 내보내기 문을 각 모듈에 대해 식별
- UglifyJS 또는 Terser와 같은 축소 도구를 사용하여 사용하지 않는 내보내기 및 관련 코드 제거

## Related

## References

- [Tree shaking - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
- [How To Make Tree Shakeable Libraries | Theodo](https://blog.theodo.com/2021/04/library-tree-shaking/)
- [Tree Shaking | webpack](https://webpack.js.org/guides/tree-shaking/)
- [트리 쉐이킹으로 자바스크립트 페이로드 줄이기 | TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20180716)
- [Tree Shaking과 Module System | SOSOLOG (so-so.dev)](https://so-so.dev/web/tree-shaking-module-system/)
- [Webpack and Rollup: the same but different | by Rich Harris | webpack | Medium](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
- [How CommonJS is making your bundles larger (web.dev)](https://web.dev/commonjs-larger-bundles/)
