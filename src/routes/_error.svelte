<script>
	import Nav from '../components/Nav.svelte'
	export let status
	export let error

	const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="h-screen w-screen bg-blue-300">
	<Nav />
	<div class="w-full text-center flex items-center">
		<div class="text-center w-full h-full">
			<h1 class="text-6xl font-bold">{status}</h1>
			<p class="font-semibold">{error.message}</p>
			{#if dev && error.stack}
			<pre>{error.stack}</pre>
			{/if}
		</div>
	</div>
</div>
