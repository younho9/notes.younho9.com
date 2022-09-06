<script setup lang="ts">
import {useData} from 'vitepress';
import Tag from './Tag.vue';
import {isJournal} from '../../utils';
const data = useData();

const localeStringOption: Intl.DateTimeFormatOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
};
</script>

<template>
	<h1 class="mb-8">{{ data.frontmatter.value.title }}</h1>

	<details class="details custom-block !mb-12">
		<summary>Metadata</summary>
		<table class="metadata-table">
			<tbody>
				<tr v-for="(value, key) in data.frontmatter.value">
					<td>
						<strong>{{ key }}</strong>
					</td>
					<td>
						<template v-if="key === 'tags'">
							<div class="flex flex-wrap gap-2">
								<Tag v-for="(tag, index) in value" :key="index" :tag="tag" />
							</div>
						</template>
						<template v-else-if="key === 'aliases'">
							<div class="flex flex-wrap gap-2">
								<code v-for="alias in value">{{ alias }}</code>
							</div>
						</template>
						<template v-else-if="key === 'related'">
							<ul>
								<li v-for="relate in value">
									<a
										:href="
											isJournal(relate)
												? `/journals/${relate}`
												: `/notes/${relate}`
										"
										class="wikilink"
										>{{ relate }}</a
									>
								</li>
							</ul>
						</template>
						<template v-else-if="key === 'created' || key === 'updated'">
							{{ new Date(value).toLocaleString('ko-KR', localeStringOption) }}
						</template>
						<template v-else>
							{{ value }}
						</template>
					</td>
				</tr>
			</tbody>
		</table>
	</details>
</template>

<style scoped>
.metadata-table tr {
	background-color: var(--vp-c-bg);
}

.metadata-table tr:nth-child(2n) {
	background-color: var(--vp-c-bg-soft);
}

.metadata-table .wikilink {
	font-weight: 500;
	color: var(--vp-c-brand);
	text-decoration: auto;
	transition: color 0.25s;
}

.metadata-table code {
	background-color: var(--vp-c-bg-mute);
	color: var(--vp-c-text-code);
}
</style>
