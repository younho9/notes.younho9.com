---
title: FEConf 2021 Can I use Vue3
category: Conference
tags:
  - conference
publish: true
created: 2022-01-22T20:02:00.000+09:00
updated: 2022-01-22T20:02:00.000+09:00
---

# {{ $frontmatter.title }}

## Vue 3의 등장

2020년 9월 18일 "One Piece" 라는 이름으로 Vue 3가 출시되었다.

주요 변경 사항

- 강화된 TypeScript 지원
- 코드 재사용을 위한 Composition API
- template 내 여러
- Teleport(Vue Portal)
- Suspense
- Multi v-model
- 그 외 템플릿 문법들

### Composition API

- Vue 2에서도 사용할 수 있는 라이브러리 [@vue/composition-api](https://github.com/vuejs/composition-api)
- 동일한 Composition 코드로 Vue 2와 Vue 3 둘 다 사용이 가능

```vue
<template>
	<div>{{ message }}</div>
	<button @click="changeMessage">변경</button>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
	setup() {
		// data 속성
		const message = ref('곧 바뀜');

		// 메서드
		const changeMessage = () => (message.value = '바꼈다');

		return {message, changeMessage};
	},
});
</script>
```

## 실무자가 바라본 Vue 3

- Vue 3를 도입할까요?
  - 아직 성숙하지 않은 커뮤니티 라이브러리
    - ~~Vuetify, 스타 32.1K~~
    - ~~Vuetable, 스타 2.1K~~
    - ~~Vue-datepicker, 스타 1.3K~~
    - ~~Vue-lazyload, 스타 7.,4K~~
    - ~~Vue-Chart, 스타 4.5K~~
  - IE11을 지원하지 않는 Vue 3
    - 2022년 6월 지원 종료되지만, 아직 IE 지원이 필요한 서비스에는 도입할 수 없다.

-> 하지만 Vue 2에서 Composition API를 사용해볼 수 있고, TypeScript 지원도 받을 수 있다.

> Most of the syntax and practices in Vue 2 remain the same in Vue 3, so **it shouldn’t make a big difference if you learn Vue 2 or Vue 3**. However, core, official, and community libraries are not yet compatible with Vue 3 so **if you are aiming for production you better learn - and use - Vue 2 in 2021**. - [Which Vue.js version to use in 2021 and why - Vue.js Tutorials (vueschool.io)](https://vueschool.io/articles/news/which-vue-js-version-to-use-in-2021-and-why/)

> 서비스 개발자라면, 커뮤니티 라이브러리가 Vue 3를 충분히 지원할 때까지, Vue 2를 사용하라.

### Vue 2와 Vue 3는 얼마나 다를까?

`@vue/composition-api` 예시

```typescript
// Vue 2

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 2';

    return { message, changeMessage };
  },
};
</script>
```

```typescript
// Vue 3

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change</button>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 2';

    return { message, changeMessage };
  },
});
</script>
```

## @vue/composition-api란?

- Vue 2에서 컴포넌트의 재사용 가능 로직을 작성할 수 있도록 도와주는 라이브러리
- 함수 기반의 API 작성 방식 가능으로 타입스크립트 추론 이점 극대화
- 데이터, 로직, 목적별로 관심사 분리 가능
- 리액트 Hook의 방식을 채택하여 뒤늦게 나온 만큼 몇 가지 단점을 본완
  - 분기문, 반복문, 중첩 함수 내에서 사용 가능
  - 컴포넌트 생성 주기에 따라 최초에 한번만 실행

주의사항

- 기존의 믹스인과 HOC를 이용한 코드 재활용 방식은 가급적 지양
  - Vue 커뮤니티 전체가 현재 Vue 컴포지션 API 기반으로 재사용 방식을 변화하고 있기 때문에 이전에 코드를 재사용하기 위해 사용했던 믹스인과 HOC는 더 이상 유효하지 않다.
  - 믹스인을 통해서 주입된 코드와 컴포지션 API가 엮였을 때는 디버깅이 어려워지므로 기존의 코드를 컴포지션 API로 재작성하는 것을 권장한다.
- TypeScript와 같이 사용했을 때 효과가 상승한다..
  - 훅에서 정의한 파일을 컴포넌트 안에서 재선언 했을 때 덮어쓰는 실수를 피할 수 있다.
- reactive 보다는 ref 지향한다.
- Vue 3에서 제공되는 API가 모두 지원되지는 않는다.
  - Vue 2가 95% 정도, Vue 3가 100% 정도로 생각하면 된다.
- [VueUse 라이브러리](https://vueuse.org/)
  - Vue 2와 Vue 3 모두 사용 가능한 컴포지션 라이브러리
  - 148개 유틸 API 지원
  - Web API, Animation, Electron, Firebase, Router 등

## Vue 2의 타입스크립트 지원

- vue-class-component를 사용한 클래스 문법보다 Vue.extend()를 이용한 객체 문법 지향
  - Vue 3 마이그레이션이 수월하다. (Vue에서 공식적으로 클래스 문법을 받아들이지 않음)
    - [[Abandoned] Class API proposal by yyx990803 · Pull Request #17 · vuejs/rfcs (github.com)](https://github.com/vuejs/rfcs/pull/17)
  - [타입스크립트에서 Vue 컴포넌트를 개발하는 방법 | TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20190327#class-based-component)

```vue
<template>
	<p>{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {message: ''};
	},
	methods: {
		changeMessage() {
			this.message = 10; // X, Type Error
		},
	},
});
</script>
```

## Related

## References

- [[B4] Can I use ... Vue 3? - YouTube](https://www.youtube.com/watch?v=Z0OG00YQeMg)
- [FEConf 2021 / Can I use ... Vue 3? (shj.rip)](https://www.shj.rip/feconf-2021-can-i-use-vue-3)
