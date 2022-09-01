<script setup lang="ts">
import pluralize from 'pluralize';
import data from '../../../data.json';

const props = defineProps({
	docType: {
		type: String,
		required: true,
	},
	length: {
		type: Number,
		default: 50,
	},
});

const docs = data[pluralize(props.docType)]
	.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
	.slice(0, props.length);

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
	<ul class="space-y-8">
		<li v-for="doc in docs" :key="doc.title">
			<article class="relative">
				<dl class="absolute left-0 top-0">
					<dt class="sr-only">Date</dt>
					<dd class="whitespace-nowrap text-sm leading-6">
						<time :datetime="doc.updated">{{
							new Date(doc.updated).toLocaleString('ko-KR', localeStringOption)
						}}</time>
					</dd>
				</dl>
				<h3 class="text-base font-semibold tracking-tight pt-8">
					<a :href="`${doc.fileName}.html`">{{ doc.title }}</a>
				</h3>
			</article>
		</li>
	</ul>
</template>
