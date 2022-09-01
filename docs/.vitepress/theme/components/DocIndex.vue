<script setup lang="ts">
import {ref, computed} from 'vue';
import pluralize from 'pluralize';
import {startCase} from 'lodash-es';
import {isPresent} from 'ts-extras';
import data from '../../../data.json';
import {DocType} from './types';

const index = Object.entries(data).map(([docType, docs]) => {
	switch (docType) {
		case pluralize(DocType.Note):
			const noteCategories = [...new Set(docs.map(({category}) => category))]
				.filter((category) => category !== 'Introduction')
				.sort((a, b) => a.toLowerCase().localeCompare(b))
				.map((category) => ({
					text: category,
					items: docs
						.filter((note) => note.category === category)
						.sort((a, b) => a.title.toLowerCase().localeCompare(b.title))
						.map(({title, fileName}) => ({
							text: title,
							link: `/notes/${fileName.replace(/.md/, '')}`,
						})),
				}));

			return {
				text: docType,
				categories: noteCategories,
			};
		case pluralize(DocType.Journal):
			const journalCategories = [...new Set(docs.map(({category}) => category))]
				.filter((category) => category !== 'Introduction')
				.sort((a, b) => b.toLowerCase().localeCompare(a))
				.map((category) => ({
					text: category,
					items: docs
						.filter((journal) => journal.category === category)
						.sort((a, b) => b.title.toLowerCase().localeCompare(a.title))
						.map(({title, fileName}) => ({
							text: title,
							link: `/journals/${fileName.replace(/.md/, '')}`,
						})),
				}));

			return {
				text: docType,
				categories: journalCategories,
			};
	}
});

const query = ref('');
const normalize = (s: string) => s.toLowerCase().replace(/-/g, ' ');

const filtered = computed(() => {
	const q = normalize(query.value);
	const matches = (text: string) => normalize(text).includes(q);

	return index
		.filter(isPresent)
		.map((section) => {
			if (matches(section.text)) {
				return section;
			}

			const matchedCategories = section.categories
				.map((category) => {
					if (matches(category.text)) {
						return category;
					}

					const matchedItems = category.items.filter((item) =>
						matches(item.text),
					);

					return matchedItems.length
						? {text: category.text, items: matchedItems}
						: null;
				})
				.filter(isPresent);

			return matchedCategories.length
				? {text: section.text, categories: matchedCategories}
				: null;
		})
		.filter(isPresent);
});

const onInputSearch = (event: Event) => {
	if (event.target instanceof HTMLInputElement) {
		query.value = event.target.value;
	}
};
</script>

<template>
	<div id="doc-index">
		<div class="header">
			<h1>References</h1>
			<div class="doc-filter">
				<label for="doc-filter">Filter</label>
				<input
					type="search"
					placeholder="Enter keyword"
					id="doc-filter"
					:value="query"
					@input="onInputSearch"
				/>
			</div>
		</div>

		<div v-for="section of filtered" :key="section?.text" class="doc-section">
			<h2 :id="section?.text">{{ startCase(section?.text) }}</h2>
			<div class="doc-groups">
				<div
					v-for="category of section?.categories"
					:key="category?.text"
					class="doc-group"
				>
					<h3>{{ category?.text }}</h3>
					<ul>
						<li v-for="item of category?.items" :key="item.text">
							<a :href="item.link + '.html'">{{ item.text }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div v-if="!filtered.length" class="no-match">
			No document matching "{{ query }}" found.
		</div>
	</div>
</template>

<style scoped>
#doc-index {
	max-width: 1024px;
	margin: 0px auto;
	padding: 64px 32px;
}

h1,
h2,
h3 {
	font-weight: 600;
	line-height: 1;
}

h1,
h2 {
	letter-spacing: -0.02em;
}

h1 {
	font-size: 38px;
}

h2 {
	font-size: 24px;
	color: var(--vp-c-text-1);
	margin: 36px 0;
	transition: color 0.5s;
	padding-top: 36px;
	border-top: 1px solid var(--vp-c-divider-light);
}

h3 {
	letter-spacing: -0.01em;
	color: var(--vp-c-brand);
	font-size: 18px;
	margin-bottom: 1em;
	transition: color 0.5s;
}

.doc-section {
	margin-bottom: 64px;
}

.doc-groups a {
	font-size: 15px;
	font-weight: 500;
	line-height: 2;
	transition: color 0.5s;
}

.dark doc-groups a {
	font-weight: 400;
}

.doc-groups a:hover {
	color: var(--vp-c-brand);
	transition: none;
}

.doc-group {
	break-inside: avoid;
	overflow: auto;
	margin-bottom: 20px;
	background-color: var(--vp-c-bg-soft);
	border-radius: 8px;
	padding: 28px 32px;
	transition: background-color 0.5s;
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 36px;
}

.doc-filter {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
}

.doc-filter input {
	border: 1px solid var(--vp-c-divider);
	border-radius: 8px;
	padding: 6px 12px;
}

.doc-filter:focus {
	border-color: var(--vp-c-brand-light);
}

.no-match {
	font-size: 1.2em;
	color: var(--vp-c-text-3);
	text-align: center;
	margin-top: 36px;
	padding-top: 36px;
	border-top: 1px solid var(--vp-c-divider-light);
}

@media (max-width: 768px) {
	#doc-index {
		padding: 42px 24px;
	}
	h1 {
		font-size: 32px;
		margin-bottom: 24px;
	}
	h2 {
		font-size: 22px;
		margin: 42px 0 32px;
		padding-top: 32px;
	}
	.doc-groups a {
		font-size: 14px;
	}
	.header {
		display: block;
	}
}

@media (min-width: 768px) {
	.doc-groups {
		columns: 2;
	}
}

@media (min-width: 1024px) {
	.doc-groups {
		columns: 3;
	}
}
</style>
