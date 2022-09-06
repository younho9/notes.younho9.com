<script setup lang="ts">
import {onMounted} from 'vue';
import pluralize from 'pluralize';
import data from '../../../data.json';
import {values, random} from 'lodash-es';
import {useRouter} from 'vitepress';

const router = useRouter();

onMounted(() => {
	const files = values(data).flat();
	const randomNumber = random(0, files.length - 1);
	const randomFile = files[randomNumber];
	const randomURL = new URL(
		`/${pluralize(randomFile.type)}/${randomFile.fileName}.html`,
		window.location.origin,
	);

	router.go(randomURL.href);
});
</script>

<template>
	<div />
</template>
