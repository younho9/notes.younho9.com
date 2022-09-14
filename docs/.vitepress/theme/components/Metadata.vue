<script setup lang="ts">
import {useData} from 'vitepress';
import {useTimeAgo} from '@vueuse/core';
import {startCase} from 'lodash-es';
import {isJournal} from '../../utils';

const data = useData();
</script>

<template>
	<h1 class="mb-8">{{ data.frontmatter.value.title }}</h1>

	<div class="mt-4 mb-8 grid grid-cols-[100px_auto] items-start gap-2 text-sm">
		<template v-for="(value, key) in data.frontmatter.value">
			<div class="opacity-50">
				{{ startCase(key) }}
			</div>
			<template v-if="true">
				<template v-if="key === 'title'">
					<div>{{ value }}</div>
				</template>
				<template v-else-if="key === 'category'">
					<a class="!py-0" :href="`/docs.html?category=${value}`">
						{{ value }}
					</a>
				</template>
				<template v-else-if="key === 'tags'">
					<div class="flex flex-wrap gap-1">
						<a
							v-for="tag of value"
							:key="tag"
							class="!py-0"
							:href="`/docs?tags=${tag}`"
						>
							<code>{{ tag }}</code>
						</a>
					</div>
				</template>
				<template v-else-if="key === 'aliases'">
					<div class="flex flex-wrap gap-1">
						<code v-for="alias of value" :key="alias" class="!py-0">
							{{ alias }}
						</code>
					</div>
				</template>
				<template v-else-if="key === 'related'">
					<div class="flex flex-wrap gap-1">
						<a
							v-for="relate of value"
							:key="relate"
							class="!py-0"
							:href="
								isJournal(relate) ? `/journals/${relate}` : `/notes/${relate}`
							"
						>
							<code>{{ relate }}</code>
						</a>
					</div>
				</template>
				<template v-else-if="key === 'created' || key === 'updated'">
					<div>
						{{ useTimeAgo(new Date(value)).value }}
					</div>
				</template>
			</template>
		</template>
	</div>
</template>
