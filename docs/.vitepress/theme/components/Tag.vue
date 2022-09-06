<script setup lang="ts">
import {useRouter} from 'vitepress';
const props = defineProps<{
	tag: string;
	href?: string;
}>();

const router = useRouter();

const onClick = () => {
	router.go(`/tags/${props.tag}`);
};
</script>

<template>
	<button class="VPButton" @click="onClick">#{{ tag }}</button>
</template>

<style>
.VPButton {
	display: inline-block;
	text-align: center;
	padding: 0 20px;
	font-size: 14px;
	font-weight: 500;
	line-height: 38px;
	white-space: nowrap;
	transition: color 0.25s, border-color 0.25s, background-color 0.25s;
	border: 1px solid transparent;
	border-radius: 20px;
	border-color: var(--vp-button-alt-active-border);
	color: var(--vp-button-alt-active-text);
	background-color: var(--vp-button-alt-active-bg);
}

.VPButton:hover {
	border-color: var(--vp-button-alt-hover-border);
	color: var(--vp-button-alt-hover-text);
	background-color: var(--vp-button-alt-hover-bg);
}

.VPButton:active {
	border-color: var(--vp-button-alt-active-border);
	color: var(--vp-button-alt-active-text);
	background-color: var(--vp-button-alt-active-bg);
	transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}
</style>
