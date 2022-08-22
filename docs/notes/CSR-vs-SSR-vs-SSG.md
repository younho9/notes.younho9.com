---
title: CSR vs SSR vs SSG
category: Web
tags:
  - web
aliases:
  - CSR과 SSR
  - 클라이언트 사이드 렌더링과 서버 사이드 렌더링의 차이점
publish: true
created: 2022-01-05T20:20:00.000+09:00
updated: 2022-01-09T01:12:00.000+09:00
---

# {{ $frontmatter.title }}

- SSR은 서버에서 페이지의 정적 마크업(HTML)을 구성하여 사용자에게 페이지를 보여주는 방식이다.
  - 데이터 페칭과 템플릿 및 라우팅이 서버에서 처리된다.
- CSR은 서버에서 완성되지 않은 정적 마크업을 전달하고, 클라이언트(브라우저)에서 JavaScript를 통해 동적으로 페이지를 구성하여 보여주는 방식이다.
  - 데이터 페칭과 템플릿 및 라우팅이 클라이언트에서 처리된다.
- SSG 또는 Static SSR는 빌드 타임에 모든 URL에 대해 별도의 HTML 파일을 생성하는 방식이다.
- 유니버설 렌더링, SSR with (Re)hydration 또는 간단히 SSR이라고 하는 방법은, 전체 페이지 로드 또는 리로드와 같은 요청은 서버에서 HTML을 구성하여 전달한 다음, 클라이언트에서 (Re)hydration이라는 기술로 다시 렌더링한다.

## 비교

![ssr vs csr](https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/infographic.png)

### SSR

![server-rendering-tti](https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/server-rendering-tti.png)

- 일반적으로 빠른 [[FP-vs-FCP-vs-FMP-vs-LCP|FP vs FCP vs FMP vs LCP]]
- 서버에서 페이지 로직 및 렌더링을 실행하면, 많은 JS를 보내지 않아도 되므로 [[TTI(Time-To-Interactive)|TTI(Time To Interactive)]]을 빠르게 수행할 수 있다.
- 서버에서 페이지를 생성하는데 시간이 걸려 [[TTFB(Time-To-First-Byte)|TTFB(Time To First Byte)]]가 느려질 수 있다.
  - 서버 렌더링은 동적으로 계산하는 특성으로 인해 상당한 계산 오버헤드가 발생할 수 있다.
- [[처리량(throughput)]]이 낮다.

### SSR with (Re)hydration

![rehydration-tti](https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/rehydration-tti.png)

- 빠른 [[FP-vs-FCP-vs-FMP-vs-LCP|FP vs FCP vs FMP vs LCP]] 그러나, [[TTI(Time-To-Interactive)|TTI(Time To Interactive)]]와 간극이 길어질 수 있다.
- 서버에서 페이지를 생성하는데 시간이 걸려 [[TTFB(Time-To-First-Byte)|TTFB(Time To First Byte)]]가 느려질 수 있다.
- [[처리량(throughput)]]이 낮다.

### SSG or Static SSR

![static-rendering-tti](https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/static-rendering-tti.png)

- 빠른 [[FP-vs-FCP-vs-FMP-vs-LCP|FP vs FCP vs FMP vs LCP]]
- 빠른 [[TTI(Time-To-Interactive)|TTI(Time To Interactive)]]
- 서버 렌더링과 달리 HTML을 즉석에서 생성하지 않아도 되므로 빠른 [[TTFB(Time-To-First-Byte)|TTFB(Time To First Byte)]]를 가진다.
  - 정적 렌더링을 여러 [[CDN(Content-Delivery-Network)|CDN(Content Delivery Network)]]에 배포하여 캐싱할 수 있다.

### CSR

![client-rendering-tti](https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/client-rendering-tti.png)

- 서버에서 HTML을 생성하지 않으므로 [[TTFB(Time-To-First-Byte)|TTFB(Time To First Byte)]]가 빠르다.
- JavaScript의 양이 증가한다.
- [[처리량(throughput)]]이 높다.
- 빈 흰 화면이 오래 지속될 수 있다.
- [[검색-엔진-최적화(SEO)|검색 엔진 최적화(SEO)]] 측면에서 제한 사항이 있다.

## React에 SSR 적용하는 방법

- [ReactDOMServer](https://ko.reactjs.org/docs/react-dom-server.html#gatsby-focus-wrapper) 객체를 통해 Node 서버에서 컴포넌트를 정적 마크업으로 렌더링한다.
- [ReactDOM.hydrate()](https://ko.reactjs.org/docs/react-dom.html#hydrate) 을 사용하여 렌더링된 컨테이너(서버에서 생성한 마크업)에 이벤트 리스너를 연결한다.

## Related

## References

- [웹 렌더링  |  Web  |  Google Developers](https://developers.google.com/web/updates/2019/02/rendering-on-the-web#:~:text=SSR%3A%20Server%2DSide%20Rendering%20%2D,browser%2C%20generally%20using%20the%20DOM.)
- [The Benefits of Server Side Rendering Over Client Side Rendering | by Alex Grigoryan | Walmart Global Tech Blog | Medium](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)
- [Performance differences in Next.js vs. Create React App - LogRocket Blog](https://blog.logrocket.com/next-js-vs-create-react-app/)
- [어서 와, SSR은 처음이지? - 도입 편 (naver.com)](https://d2.naver.com/helloworld/7804182)
