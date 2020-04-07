<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte'
	export let post

	onMount(() => Prism.highlightAll())
</script>

<!-- <style>
	.content p {
		@apply m-10;
	}
</style> -->

<svelte:head>
	<title>{post.title}</title>
	<link rel='stylesheet' href='prism-onedark.css'>
</svelte:head>

<div class='container content md:w-2/5 text-lg font-semibold'>
	<h1 class="text-3xl font-bold mb-6">{post.title}</h1>
	{@html post.html}
</div>
