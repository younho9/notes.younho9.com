---
title: export default vs export
category: JavaScript
tags:
  - javascript
  - vs
aliases:
  - export default vs export
related:
  - pass-by-reference-vs-pass-by-value
created: 2022-01-10T13:23:00.000Z
updated: 2022-09-06T14:00:07.052Z
---

<Metadata />

- Import는 [[pass-by-reference-vs-pass-by-value|pass by reference vs pass by value]]된다.
- export 한 곳에서 모듈 내 값을 업데이트하면 import 한 곳에서 변경사항을 적용 받는다.
- export default는 유일한 예외이다.
  - export default는 값으로 전달된다.
    - 그런데 export default function은 참조로 전달된다.

![esm_binding_update](https://so-so.dev/static/51a3104db32dbfa8921fd3dde98b3771/6af66/esm_binding_update.png)

```js
// These give you a live reference to the exported thing(s):
import { thing } from './module.js';
import { thing as otherName } from './module.js';
import * as module from './module.js';
const module = await import('./module.js');
// This assigns the current value of the export to a new identifier:
let { thing } = await import('./module.js');

// These export a live reference:
export { thing };
export { thing as otherName };
export { thing as default };
export default function thing() {}
// These export the current value:
export default thing;
export default 'hello!';
```

## References

- [`export default thing` is different to `export { thing as default }` - JakeArchibald.com](https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/)
- [Tree Shaking과 Module System | SOSOLOG (so-so.dev)](https://so-so.dev/web/tree-shaking-module-system/)
