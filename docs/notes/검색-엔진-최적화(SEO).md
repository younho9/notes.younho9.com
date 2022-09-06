---
title: 검색 엔진 최적화(SEO)
category: Web
tags:
  - web
aliases:
  - 검색 엔진 최적화(SEO)
  - SEO
related:
  - CSR-vs-SSR-vs-SSG
  - 사이트가-Google-색인에-포함되어-있는지-확인하기
created: 2022-01-08T04:55:00.000Z
updated: 2022-09-06T14:00:07.125Z
---

<Metadata />

※ 검색 엔진을 Google로 특정

- 색인(Index) : Google에서는 알고 있는 모든 웹페이지를 색인에 저장한다. 각 색인 항목은 페이지의 콘텐츠 및 주소(URL)를 명시한다.
- 크롤링(Crawling) : 신규 또는 업데이트된 웹페이지를 찾는 프로세스.
- 크롤러(Crawler) : 웹페이지를 크롤링한 다음 색인을 생성하는 소프트웨어
- 봇(Bot) : 크롤러의 일반적인 이름.

## CSR을 사용하면서 SEO를 최적화 하는 방법

- 봇(bot)이 접근할 때 분기 처리
  - 구글 봇이 직접 CSR을 처리할 때, 멀리 떨어진 리전(region)에 AJAX 요청을 수행하여 SEO 수치가 낮아지는 경향이 있다.
  - 봇이 접근할 때, node 서버로 분기 처리해서 Puppeteer를 사용해 CSR을 프리 렌더링 한다. 이렇게 하는 이유는 봇이 리젼이 멀리 떨어져서 네트워크 요청이 느린 경우가 있는데, 자체 노드 서버에서 API 요청이 빨라서 빠르게 DOM 콘텐츠를 완성할 수 있다.
  - 완성된 HTML을 전달하기 때문에 SEO를 높일 수 있다.
  - Puppeteer에서 DOM 생성에 관여하지 않는 네트워크 요청들을 꺼둘 수 있다. (CSS 요청, 폰트 요청 등)
- [Headless Chrome: an answer to server-side rendering JS sites  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/puppeteer/articles/ssr)

## Related

- [[CSR-vs-SSR-vs-SSG|CSR vs SSR vs SSG]]
- [[사이트가-Google-색인에-포함되어-있는지-확인하기|사이트가 Google 색인에 포함되어 있는지 확인하기]]

## References

- [문서  |  Google Developers](https://developers.google.com/search/docs)
- [SEO For Developers — A Quick Overview | by Vitali Zaidman | Welldone Software | Medium](https://medium.com/welldone-software/seo-for-developers-a-quick-overview-5b5b7ce34679)
- [Headless Chrome: an answer to server-side rendering JS sites  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/puppeteer/articles/ssr)
