<script>
	export let segment
	let isOpen = false
</script>

<nav class="relative py-4 max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
	<div class="flex items-center flex-1">
		<div class="flex items-center justify-between w-full md:w-auto">
			<a href="/">
				<span class="text-2xl font-bold">Meals For Nurses</span>
			</a>
			<div class="-mr-2 flex items-center md:hidden">
				<button on:click={() => isOpen = true} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
		<!-- <div class="hidden md:block md:ml-10">
			<a href="#" class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Caterers</a>
		</div> -->
	</div>
	<div class="hidden md:block text-right">
		<span class="hidden md:inline-flex rounded-md overflow-hidden md:mr-4">
			<a href="mailto:nursesneedus@gmail.com" class="px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Contact</a>
		</span>
		<span class="inline-flex rounded-md shadow-xs">
			<a href="https://www.gofundme.com/f/support-our-nurses-during-covid19" target="_blank" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
				Donate
			</a>
		</span>
	</div>
</nav>

<div class:block={isOpen} class:hidden={!isOpen} class="absolute top-0 inset-x-0 p-2 hidden md:hidden">
	<div class="rounded-lg shadow-md transition transform origin-top-right">
		<div class="rounded-lg bg-white shadow-xs overflow-hidden">
			<div class="px-5 pt-4 flex items-center justify-between">
				<div>
					<img class="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="" />
				</div>
				<div class="-mr-2">
					<button on:click={isOpen = false} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
						<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div class="px-2 pt-2 pb-3">
				<a href="mailto:nursesneedus@gmail.com" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Contact</a>
			</div>
			<div>
				<a href="https://www.gofundme.com/f/support-our-nurses-during-covid19" target="_blank" class="block w-full px-5 py-3 text-center font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-green-100 focus:text-green-700 transition duration-150 ease-in-out">
					Donate
				</a>
			</div>
		</div>
	</div>
</div>

<svelte:window on:click={() => isOpen = false} />
