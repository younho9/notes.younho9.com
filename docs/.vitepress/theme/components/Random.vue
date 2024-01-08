<script setup lang="ts">
import {onMounted} from 'vue';
import data from '../../../data.json';
import {values, random} from 'lodash-es';
import {useRouter} from 'vitepress';

const router = useRouter();

const color = getComputedStyle(document.documentElement).getPropertyValue(
	'--vp-c-brand',
);
const loaderOptions = {
	loading: true,
	style: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	size: '10px',
	color,
};

onMounted(() => {
	const files = values(data).flat();
	const randomNumber = random(0, files.length - 1);
	const randomFile = files[randomNumber];
	const randomURL = new URL(
		`/notes/${randomFile.fileName}.html`,
		window.location.origin,
	);

	window.location.replace(randomURL.href);
});
</script>

<template>
	<div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<GridLoader v-bind="loaderOptions" />
	</div>
</template>
