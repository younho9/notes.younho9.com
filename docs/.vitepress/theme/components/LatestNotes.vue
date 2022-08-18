<script setup>
import data from '../../../data.json';

const notes = data.notes
	.sort((a, b) => new Date(b.updated) - new Date(a.updated))
	.slice(0, 50);

const localeStringOption = {
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
		<li v-for="note in notes" :key="note.title">
			<article class="relative">
				<dl class="absolute left-0 top-0">
					<dt class="sr-only">Date</dt>
					<dd class="whitespace-nowrap text-sm leading-6">
						<time :datetime="new Date(note.updated).toISOString()">{{
							new Date(note.updated).toLocaleString('ko-KR', localeStringOption)
						}}</time>
					</dd>
				</dl>
				<h3 class="text-base font-semibold tracking-tight pt-8">
					<a :href="`${note.fileName}.html`">{{ note.title }}</a>
				</h3>
			</article>
		</li>
	</ul>
</template>
