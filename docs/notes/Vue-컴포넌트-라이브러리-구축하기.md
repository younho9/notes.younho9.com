---
tags:
  - vue
aliases:
  - how to build vue component library
publish: true
created: 2022-01-18 17:18
updated: 2022-01-18 17:18
---

# Vue 컴포넌트 라이브러리 구축하기

## Vue 컴포넌트를 패키지로 배포하는 기본 원리

- [Packaging Vue Components for npm — Vue.js (vuejs.org)](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html)
- [Build Targets | Vue CLI (vuejs.org)](https://cli.vuejs.org/guide/build-targets.html#app)

## Vue-SFC-Rollup

[Introduction | Rollup Plugin Vue (vuejs.org)](https://rollup-plugin-vue.vuejs.org/)

- [Quick Publishing of Redistributable Single File Component on NPM Mike - YouTube](https://www.youtube.com/watch?v=iDCt8DtJr3s)
- [team-innovation/vue-sfc-rollup: Quickly generate redistributable Vue components with Rollup (github.com)](https://github.com/team-innovation/vue-sfc-rollup)

## 모노레포

- [Monorepo Explained](https://monorepo.tools/)
- [building-component-libraries-with-a-monorepo.pdf (leerob.io)](https://leerob.io/building-component-libraries-with-a-monorepo.pdf)

필요한 이유

- 컴포넌트 라이브러리를 "잘 관리"하기 위해서 필요한 것들
- 프로젝트 환경 별 예제
  - vue-cli
  - vite
  - nuxt
- 컴포넌트 라이브러리 문서 (website, SSG)
- 배포 프로세스 - 패키지(컴포넌트)마다 독립적 버전 정책이 가능
  - ![버전 관리 정책](https://miro.medium.com/max/1225/1*roETPKX_0bKp3oOIVbNVIw.png)
  - ![1*zxuBxWW4jH1AVX7t3loReQ.png (532×834) (medium.com)](https://miro.medium.com/max/931/1*zxuBxWW4jH1AVX7t3loReQ.png)
  -
- 툴링

  - 빌드 도구
  - 테스트 도구
  - ESLint
  - ...

- 인프라 지원이 필요한 것.
  - NPM Package Registry
    - NPM Private Registry (Best)
    - GitLab Registry (Not Bad)
    - Git Url (현재, 모노레포 사용 불가)

## TypeScript 구성

## Storybook 구성

## ESLint + Prettier 설정

## 첫 배포

## 예제 추가하기

- vue-cli
  - typescript
- vite
- nuxt

## Vue 2와 Vue 3

[[FEConf-2021---Can-I-use-...-Vue-3-내용-요약|FEConf 2021 - Can I use ... Vue 3 내용 요약]]

## Vue 파일을 그냥 공유하면 안되나요? ([참고](https://kr.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Can%E2%80%99t-I-Just-Share-vue-Files-Directly))

브라우저에서 직접 import 해서 사용할 수 있으므로 ..

## Vue 컴포넌트 라이브러리

- [Vue.js Framework Components - Vuesax](https://vuesax.com/)
- [Chakra UI Vue (chakra-ui.com)](https://vue.chakra-ui.com/getting-started)
- [ElemeFE/element: A Vue.js 2.0 UI Toolkit for Web (github.com)](https://github.com/ElemeFE/element)

- 모노레포 사례가 별로 없다.
- plugin으로 한 번에 설치하고 import 하지 않는 방법을 선호하는 것 같다.
  - 그렇게 하더라도 버전 관리나 모듈 독립성을 위해서 사용할 수 있지 않나 .. ?
- [ ] 빌드 프로세스
- [ ] 테스트
- [ ] 스토리북

## Related

## References

- [How to create a Universal Library for Vue 2 & 3 (alvarosaburido.dev)](https://alvarosaburido.dev/blog/how-to-create-an-universal-library-for-vue-2-3)
- [How to Create and Publish a Vue Component Library (freecodecamp.org)](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library/)
- [Building a Vue 3 component library - LogRocket Blog](https://blog.logrocket.com/building-vue-3-component-library/)
- [Make Libraries Working with Vue 2 and 3 (antfu.me)](https://antfu.me/posts/make-libraries-working-with-vue-2-and-3)
- [vueuse/vue-demi: 🎩 Creates Universal Library for Vue 2 & 3 (github.co\*\*\*\*m)](https://github.com/vueuse/vue-demi)
- [Packaging Vue Components for npm — Vue.js (vuejs.org)](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html)
- [Turning Vue components into reusable npm packages (voorhoede.nl)](https://www.voorhoede.nl/en/blog/turning-vue-components-into-reusable-npm-packages/)
- [Creating a Vue.js component library: Part II - Structure - DEV Community](https://dev.to/siegerts/creating-a-vue-js-component-library-part-ii-structure-iph)
