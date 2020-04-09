<script>
	export let segment
	import Footer from '../components/Footer.svelte'
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

<div class="min-h-screen">
	<Nav {segment} />
	<main class="text-gray-900">
		<slot></slot>
	</main>
	<Footer />
</div>
