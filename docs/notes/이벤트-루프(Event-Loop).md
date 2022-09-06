---
title: 이벤트 루프(Event Loop)
category: JavaScript
tags:
  - javascript
aliases:
  - 이벤트 루프(Event Loop)
  - 이벤트 루프
created: 2022-01-05T12:35:00.000Z
updated: 2022-09-06T14:00:07.352Z
---

<Metadata />

![event loop](https://res.cloudinary.com/practicaldev/image/fetch/s--5iH5BNWm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lczn4fca41is4vpicr6w.gif)

- 자바스크립트 런타임은 하나의 콜 스택을 가진다.
  - 콜 스택에 있는 작업은 한번에 하나씩 실행될 수 있다.
- setTimeout, 이벤트 핸들러를 통해 실행되는 콜백은 매크로태스크 큐(콜백 큐 또는 이벤트 큐, 태스크 큐)로 불리는 곳에서 실행된다.
- promise는 마이크로태스크 큐에서 실행된다.
  - 자바스크립트 엔진은 매크로 태스크 하나를 처리할 때마다 또 다른 매크로태스크나 렌더링 작업을 하기 전에, 마이크로태스크 큐에 쌓인 마이크로태스크 전부를 처리한다.

| (Macro)task | `setTimeout` , `setInterval` , `setImmediate`              |
| ----------- | ---------------------------------------------------------- |
| Microtask   | `process.nextTick` , `Promise callback` , `queueMicrotask` |

## References

- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU - YouTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Don't block the event loop! 매끄러운 경험을 위한 JavaScript 비동기 처리 - LINE ENGINEERING (linecorp.com)](https://engineering.linecorp.com/ko/blog/dont-block-the-event-loop/)
- [⭐️🎀 JavaScript Visualized: Promises & Async/Await - DEV Community](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
