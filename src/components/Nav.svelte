<script>
	export let segment
	let isOpen = false
</script>

<section>
	<header class="container px-8 sm:flex sm:justify-between mx-auto">
		<div class="h-24 flex items-center justify-between">
			<div>
				<a rel=prefetch href="/"><span class="text-3xl font-extrabold">buildLab</span></a>
			</div>

			<div class="flex items-center justify-between px-4 py-3 sm:p-0 sm:hidden">
				<div class="">
					<button on:click|stopPropagation={() => isOpen = !isOpen} type="button" class="block text-gray-500 p-2 rounded hover:bg-blue-100 focus:bg-blue-300 focus:outline-none">
						<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
							{#if isOpen}<path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>{/if}
							{#if !isOpen}<path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>{/if}
						</svg>
					</button>
				</div>
			</div>

		</div>
		<nav class="hidden sm:flex items-center text-center">
			{#if segment === ''}
			<a rel=prefetch class='px-4 py-2 transition duration-150 ease-in-out font-semibold rounded-lg hover:bg-gray-300 {segment === "services" ? "selected" : ""}' href='#services'>Services</a>
			{/if}
			<a rel=prefetch class='px-4 py-2 transition duration-150 ease-in-out font-semibold rounded-lg hover:bg-gray-300 {segment === "services" ? "selected" : ""}' href='#services'>Services</a>
			<a rel=prefetch class='px-4 py-2 transition duration-150 ease-in-out font-semibold rounded-lg hover:bg-gray-300 {segment === "services" ? "selected" : ""}' href='support'>Support</a>
			<a href="mailto:hi@buildlab.co?Subject=BuildLab%20Inquiry" class='px-4 py-2 ml-4 text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out rounded-lg shadow-px font-semibold'>Contact</a>
		</nav>

		<nav class="text-lg absolute top-0 inset-x-0 p-2 {isOpen ? 'block' : 'hidden'}">
			<!-- <div class="absolute top-0 inset-x-0 p-2 hidden md:hidden"> -->
				<div class="rounded-lg shadow-md transition transform origin-top-right">
					<div class="rounded-lg bg-white shadow-xs overflow-hidden">
						<div class="px-5 pt-4 flex items-center justify-between">
							<div>
								<img class="h-8 w-auto rounded" src="buildlab_blue.png" alt="" />
							</div>
							<div class="-mr-2">
								<button on:click={() => isOpen = false} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
									<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div class="px-2 pt-2 pb-3">
							<a rel=prefetch class='block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out {segment === "services" ? "selected" : ""}' href='#services'>Services</a>
							<a rel=prefetch class='mt-1 block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out {segment === "services" ? "selected" : ""}' href='support'>Support</a>
						</div>
						<div>
							<!-- <a href="#contact" class="block w-full px-5 py-3 text-center font-bold text-blue-600 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700 transition duration-150 ease-in-out">
								Contact
							</a> -->
						</div>
					</div>
				</div>
			<!-- </div> -->
			<!-- {#if segment === ''}
			<a rel=prefetch class='px-4 py-2 font-semibold rounded-lg hover:bg-gray-300 {segment === "services" ? "selected" : ""}' href='#services'>Services</a>
			{/if}
			<a rel=prefetch class='px-4 py-2 font-semibold rounded-lg hover:bg-gray-300 {segment === "services" ? "selected" : ""}' href='#services'>Services</a>
			<a rel=prefetch class='px-4 py-2 font-semibold rounded-lg hover:bg-gray-300 {segment === "services" ? "selected" : ""}' href='support'>Support</a>
			<a href="#contact" rel=prefetch class='px-4 py-2 ml-4 text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out rounded-lg shadow-px font-semibold'>Contact</a> -->
		</nav>
	</header>
</section>

<svelte:window on:click={() => isOpen = false} />
