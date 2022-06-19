---
tags:
  - rxjs
created: 2021-12-30 13:06
updated: 2021-12-30 13:15
---

여러 입력 Observable 중에서 새로운 값을 방출 하는 경우, 방출할 때마다 모든 입력의 최신 값으로 된 배열을 리턴.

```js
import { combineLatest, timer } from "rxjs";

const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
const combinedTimers = combineLatest([firstTimer, secondTimer]);
combinedTimers.subscribe((value) => console.log(value));

// Logs
// [0, 0] after 0.5s
// [1, 0] after 1s
// [1, 1] after 1.5s
// [2, 1] after 2s
```

## References

- [RxJS - combineLatest](https://rxjs.dev/api/index/function/combineLatest)
