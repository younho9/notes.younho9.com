---
title: slots
category: Vue
tags:
  - vue
aliases:
  - slots
created: 2021-12-30T04:06:00.000Z
updated: 2022-09-06T14:00:07.085Z
---

[슬롯(Slots) — Vue.js (vuejs.org)](https://kr.vuejs.org/v2/guide/components-slots.html)

## 슬롯 콘텐츠

- `<slot>` 은 웹 컴포넌트 스펙에서 영향을 받았다.

```vue
<!-- NavigationLink.vue -->
<template>
	<a v-bind:href="url" class="nav-link">
		<slot></slot>
	</a>
</template>
```

```vue
<navigation-link url="/profile">
	Your Profile
</navigation-link>
```

- 컴포넌트를 렌더링할 때 `<slot></slot>` 이 `"Your Profile"` 로 대체된다. (React의 children props와 유사하다.)
- 만약 NavigationLink에 slot이 없다면, 내부에 있는 모든 요소가 무시된다.

## 슬롯의 컴파일될 때 범위(Compilation Scope)

```vue
<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
  <!--
  url은 undefined로 나올 겁니다. 이 데이터는 <navigation-link>로
  넘어가지만 <navigation-link> 컴포넌트 안에 정의되어 있지는
  않으니까요.
  -->
</navigation-link>
```

- 어떤 컴포넌트의 슬롯에 들어가는 내용이라고 해서, 그 컴포넌트의 인스턴스와 연결되는 것은 아니다.
- 위의 예제처럼, `navigation-link` 는 `url` 데이터를 가지지만, 슬롯에서 `url` 데이터를 사용할 수 없다.

> 부모 템플릿 안에 있는 것들은 부모 컴포넌트의 범위에 컴파일되고 자식 템플릿 안에 있는 것들은 자식 컴포넌트의 범위에 컴파일됩니다.

## 기본값 지정(Fallback Content)

TBD ...

## 이름이 있는 슬롯

TBD ...

## 범위가 있는 슬롯 (Scoped Slots)

- 자식 컴포넌트에서만 접근할 수 있는 데이터에서 슬롯에 필요한 내용을 가져와야 할 때가 있다.

```vue
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
```

- 자식 컴포넌트에서 slot에서 사용할 수 있는 데이터를 bind 해준 뒤,

```vue
<current-user v-slot="slotProps">
	{{ slotProps.user.firstName }}
</current-user>
```

v-slot 으로 데이터를 가져올 수 있다.
