<script setup lang="ts">
import {ref} from 'vue';
import {useFetch} from '@vueuse/core';
import {vElementHover} from '@vueuse/components';

const link = '/notes/Programmers-2020-카카오-인턴십-경주로-건설.html';
const label = '카카오 인턴십 경주로 건설';

const isHovered = ref();
const wrapper = ref<HTMLDivElement>();
const domParser = new DOMParser();

async function onHover(isHover: boolean) {
	isHovered.value = isHover;

	if (isHover) {
		const {data} = await useFetch<string>(link);

		if (data.value && wrapper.value) {
			const htmlDocument = domParser.parseFromString(data.value, 'text/html');
			const docContent = htmlDocument.documentElement.querySelector(
				'.vp-doc > div:nth-child(3)',
			);

			if (docContent) {
				wrapper.value.innerHTML = docContent.innerHTML;
			}
		}
	}
}
</script>

<template>
	<a v-element-hover="onHover" :href="link">{{ label }}</a>
	<div ref="wrapper" />
</template>
