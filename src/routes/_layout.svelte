<script>
	export let segment
	import Nav from '../components/Nav.svelte'
</script>

<style>
	:global(section) {
		@apply text-gray-900;
	}

	:global(.inverted) {
		@apply text-blue-100 bg-blue-500;
	}

	:global(.container) {
		@apply mx-auto;
	}
</style>

<Nav />
<main class="text-gray-900">
	<slot></slot>
</main>
