<script setup lang="ts">
import {useRouter} from 'vitepress';
import {useUrlSearchParams, useTimeAgo} from '@vueuse/core';
import is from '@sindresorhus/is';
import Fuse from 'fuse.js';
import {computed, toRef, Ref} from 'vue';
import {values, uniq} from 'lodash-es';
import data from '../../../data.json';
import {DocItem} from './types';

const docs = values(data).flat() as DocItem[];
const categories = uniq(docs.map((doc) => doc.category)).sort();
const allTags = uniq(docs.map((doc) => doc?.tags ?? []).flat()).sort();
const sortMethods = ['category', 'name', 'updated'] as const;
type SortMethod = typeof sortMethods[number];

const query = useUrlSearchParams<Record<string, string | null>>('history', {
	removeFalsyValues: true,
});
const search = toRef(query, 'search', null);
const category = toRef(query, 'category', null);
const tags = toRef(query, 'tags', null);
const sortMethod = toRef(query, 'sort', 'category') as Ref<SortMethod | null>;
const result = computed(() => {
	const index = docs
		.filter(
			(doc) => is.null_(category.value) || category.value === doc.category,
		)
		.filter(
			(doc) =>
				is.null_(tags.value) ||
				tags.value.split(' ').every((tag) => doc.tags?.includes(tag)),
		);

	const fuse = new Fuse(index, {
		keys: ['title'],
	});

	if (search.value) {
		return fuse.search(search.value).map((i) => i.item);
	}

	if (sortMethod.value === 'updated') {
		return index.sort(
			(a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime(),
		);
	}

	if (sortMethod.value === 'name') {
		return index.sort((a, b) => a.title.toLowerCase().localeCompare(b.title));
	}

	return index.sort((a, b) =>
		a.category.toLowerCase().localeCompare(b.category),
	);
});
const availableCategories = computed(() =>
	uniq(result.value.map((item) => item?.category ?? []).flat()),
);
const availableTags = computed(() =>
	uniq(result.value.map((item) => item?.tags ?? []).flat()),
);
const router = useRouter();
const getDocItemLink = (item: DocItem) => `/notes/${item.fileName}.html`;
const onClickDocItem = (event: Event, item: DocItem) => {
	if (!(event.target instanceof HTMLElement)) {
		return;
	}

	if (event.target.tagName === 'BUTTON') {
		return;
	}

	router.go(getDocItemLink(item));
};
const toggleCategory = (c: string) => {
	category.value = category.value === c ? null : c;
};
const applyTag = (t: string) => {
	if (is.null_(tags.value)) {
		tags.value = t;
		return;
	}

	const currentTags = tags.value.split(' ');

	if (currentTags.includes(t)) {
		tags.value = currentTags.filter((tag) => tag !== t).join(' ') || null;
		return;
	}

	tags.value = [...currentTags, t].join(' ');
};
const toggleSort = (method: SortMethod) => {
	sortMethod.value = method;
};
const hasFilters = computed(() =>
	Boolean(search.value || category.value || tags.value || sortMethod.value),
);
const resetFilters = () => {
	search.value = null;
	category.value = null;
	tags.value = null;
	sortMethod.value = null;
};
const onInputSearch = (event: Event) => {
	if (event.target instanceof HTMLInputElement) {
		search.value = event.target.value;
	}
};
</script>

<template>
	<div class="my-0 mx-auto max-w-5xl py-10 px-4 md:py-16 md:px-8">
		<div class="mb-9 items-center justify-between md:flex">
			<h1 class="text-4xl font-semibold">Index</h1>
		</div>

		<div class="mt-10 grid grid-cols-[80px_auto] gap-y-2">
			<div class="text-sm opacity-80">Categories</div>
			<div class="mb-2 flex flex-wrap gap-2">
				<button
					v-for="c of categories"
					:key="c"
					class="select-button"
					:class="{
						active: category === c,
						disabled: category !== c && !availableCategories.includes(c),
					}"
					@click="toggleCategory(c)"
				>
					{{ c }}
				</button>
			</div>
			<div class="text-sm opacity-80">Tags</div>
			<div class="mb-2 flex flex-wrap gap-2">
				<button
					v-for="tag of allTags"
					:key="tag"
					class="select-button"
					:class="{
						active: tags?.split(' ')?.includes(tag),
						disabled:
							!tags?.split(' ')?.includes(tag) && !availableTags.includes(tag),
					}"
					@click="applyTag(tag)"
				>
					{{ tag }}
				</button>
			</div>
			<div class="text-sm opacity-80">Sort by</div>
			<div class="mb-2 flex flex-wrap gap-2">
				<button v-if="search" class="select-button active">Search</button>
				<button
					v-for="method of sortMethods"
					:key="method"
					class="select-button"
					:class="{
						active: method === (sortMethod ?? 'category'),
						disabled: search,
					}"
					@click="toggleSort(method)"
				>
					{{ method }}
				</button>
			</div>
		</div>

		<div class="mt-4 h-[1px] bg-[color:var(--vp-c-divider)]" />
		<div class="search-bar">
			<ISearch class="mr-2 opacity-50" />
			<input
				:value="search"
				@input="onInputSearch"
				class="w-full"
				type="text"
				role="search"
				placeholder="Search..."
			/>
		</div>
		<div class="mb-4 h-[1px] bg-[color:var(--vp-c-divider)]" />

		<div class="relative flex flex-col gap-2 pt-5">
			<div
				v-if="hasFilters"
				class="absolute -top-3 right-0 z-10 mb-2 opacity-90 transition"
			>
				<button
					class="select-button flex items-center gap-1 !px-2 !py-1"
					@click="resetFilters()"
				>
					<IFilterRemove /> Clear Filters
				</button>
			</div>
			<ul class="mt-4 sm:columns-2 md:columns-3">
				<li
					v-for="item of result"
					:key="item.fileName"
					class="doc-item group"
					@click="(event) => onClickDocItem(event, item)"
				>
					<article class="space-y-2">
						<div>
							<button
								:class="category === item.category && 'active'"
								@click="toggleCategory(item.category)"
							>
								{{ item.category }}
							</button>
						</div>
						<div>
							<h2
								class="text-lg font-semibold opacity-80 group-hover:opacity-100"
							>
								{{ item.title }}
							</h2>
						</div>
						<div class="flex flex-wrap gap-1">
							<button
								v-for="tag of item.tags"
								:key="tag"
								:class="{active: tags?.split(' ')?.includes(tag)}"
								@click="applyTag(tag)"
							>
								#{{ tag }}
							</button>
						</div>
						<div class="flex justify-end text-xs opacity-50">
							{{ useTimeAgo(new Date(item.updated)).value }}
						</div>
					</article>
				</li>
			</ul>
			<div v-if="!result?.length" class="pt-6 text-center opacity-90">
				<div class="m-2 opacity-50">No result matched</div>
				<button
					class="select-button inline-flex items-center gap-1 !px-2 !py-1"
					@click="resetFilters()"
				>
					<IFilterRemove /> Clear Filters
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.select-button {
	@apply hover:bg-primary/10 hover:text-primary/100 rounded bg-gray-400/5 px-2 py-0.5 text-sm transition-colors duration-300;
}

.select-button.active:not(.disabled) {
	@apply bg-primary/5 text-primary/90 hover:bg-primary/10 hover:text-primary/100;
}

.select-button.disabled {
	@apply pointer-events-none opacity-50;
}

.search-bar {
	@apply flex p-2;
}

.doc-item {
	background-color: var(--vp-c-bg-soft);
	@apply mb-4 cursor-pointer break-inside-avoid rounded-lg py-4 px-7 transition duration-300 hover:-translate-y-1;
}

@media (hover: hover) and (pointer: fine) {
	.doc-item:hover {
		background-color: var(--vp-c-gray-soft);
	}
}

.doc-item button {
	@apply text-sm opacity-60 transition duration-300;
}

.doc-item button.active {
	@apply text-primary font-medium opacity-80;
}

@media (hover: hover) and (pointer: fine) {
	.doc-item button:hover {
		@apply opacity-100;
	}
}
</style>
