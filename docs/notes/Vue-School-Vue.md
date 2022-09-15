---
title: Vue School Vue
category: Vue
tags:
  - vue
aliases:
  - Vue School Vue
created: 2022-02-18T06:23:00.000Z
updated: 2022-09-06T14:00:07.005Z
---

## Chapter 1. Component Basics

### 1. Introduction to Components

컴포넌트는 재사용 가능한, 이름을 가진 Vue 인스턴스이다.
컴포넌트의 목적은 우리의 애플리케이션의 기능들을 캡슐화하는 것으로, 전체 페이지와 같은 큰 부분에서 부터 네비게이션 바, 버튼 또는 포맷팅된 텍스트와 같이 작은 것까지 어떤 것이든 컴포넌트가 될 수 있다.

- Vue.component(name, options)
  - name: 컴포넌트의 이름
  - options: 컴포넌트 옵션, `new Vue(options)` 와 동일한 옵션을 사용할 수 있음

컴포넌트는 다양한 방법으로 정의될 수 있는 자체 템플릿을 가지고 있다. 1. 템플릿 문자열 2. `x-template`

```js
// 1. 템플릿 문자열
Vue.component('click-counter', {
	template: `<button @click="count++">{{ count }}</button>`,
	data() {
		return {
			count: 0,
		};
	},
});

new Vue({
	el: '#app',
});
```

### 2. Component's Template

템플릿은 간단하지만, 에디터의 지원을 받기 어렵기 때문에, 템플릿이 크고 복잡하다면 파악하기 어렵다.
템플릿 외에 몇 가지 방법이 더 있는데, 이번 장에서는 `x-template` 을 사용하는 방법을 알아본다. 개인적 의견으로는 처음 시작할 때 가장 좋은 방법이다.

`index.html`

```html
<body>
	<div id="app">
		<h1>Vue.js Components Fundamentals</h1>
		<click-counter></click-counter>
		<click-counter></click-counter>
		<click-counter></click-counter>
		<click-counter></click-counter>
	</div>

	<script type="text/x-template" id="click-counter-template">
		<button @click="count++">{{ count }}</button>
	</script>

	<script src="https://unpkg.com/vue"></script>
	<script src="app.js"></script>
</body>
```

- `type="text/x-template"`
- `id="click-counter-template"` : 컴포넌트를 참조하기 위해 id가 필요하다.

`app.js`

```js
Vue.component('click-counter', {
	template: '#click-counter-template',
	data() {
		return {
			count: 0,
		};
	},
});

new Vue({
	el: '#app',
});
```

이를 사용하면, HTML을 사용해 에디터의 완전한 Syntax Highlight, autocomplete, error detection 등을 지원받을 수 있다.
단점은, Vue 컴포넌트 코드와 템플릿 파일을 한 눈에 볼 수 없다는 점이다.

Vue.js에서 컴포넌트의 템플릿은 반드시 하나의 root element를 가져야 한다.
한 컴포넌트에서 여러 요소를 사용하기 위해서는, div 태그 등을 사용해 감싸서 사용해야 한다.

### 3. Reusable Components with Props

이제 컴포넌트를 재사용하는 더 실용적인 예제를 사용해 본다.

todo, plan과 같은 한 단어로 된 컴포넌트 이름을 사용하는 것은 좋지 않은 practice로 간주된다. 왜냐하면 미래에 존재할 지 모르는 HTML 요소와 이름이 충돌할 가능성이 있기 때문이다.
하지만, 이번 레슨에서는 그냥 plan을 사용하고, 나중에 좋은 practice에 대해 배우기로 하자.

### 5. Global vs Local Components

컴포넌트를 등록하는 두 가지 방법이 있다. 전역적(Global) vs 지역적(Local)
지금까지 우리는 Vue.component를 사용해서 컴포넌트를 등록하고 사용했다.
이것은 전역적으로 컴포넌트를 등록하는 방법으로, 우리의 애플리케이션 전역에서 컴포넌트가 사용가능하도록 한다.
전역적 등록은 종종 바람직하지 않다. 예를 들어 웹팩과 같은 빌드 시스템을 사용하고 있다면, 전역적인 컴포넌트 등록은, 어떤 컴포넌트를 사용하지 않게 되더라도 최종 빌드 결과물에 포함된다는 의미이다.
이는 불필요하게 유저가 다운로드 해야하는 JavaScript의 크기를 증가시킨다.
또한, 몇몇 컴포넌트는 전역적으로 등록하는 것이 말이 되지 않는 경우가 있다. 예제에서 plan 컴포넌트는 plan-picker 내부에서만 사용된다.
plan 컴포넌트를 plan-picker 내에서 지역적으로 사용하려면 다음과 같이 할 수 있다.

```js
let PlanComponent = {
	template: '#plan-template',
	props: {
		name: {
			type: String,
			required: true,
		},
	},
};

Vue.component('plan-picker', {
	template: '#plan-picker-template',
	components: {
		plan: PlanComponent,
	},
	data() {
		return {
			plans: ['The Single', 'The Curious', 'The Addict'],
		};
	},
});

new Vue({
	el: '#app',
});
```

요약하자면, BaseButton, Input과 같이 필수적인 컴포넌트만 전역적으로 등록하고, 나머지는 지역적으로 등록한다. 하지만 프로토타이핑 중이라면, 전역적으로 등록하여 개발하고, 나중에 최적화할 수 있다.

## Chapter 2. Components In-depth

### 1. Component Naming Best Practices

- 컴포넌트 네이밍을 할 때, 공식 문서에 따라 [Vue.js Style Guide](https://vuejs.org/v2/style-guide/) Best Practice를 따르라.

### Related
