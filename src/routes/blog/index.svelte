<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts }
		})
	}
</script>

<script>
	import { fly } from 'svelte/transition'
	export let posts
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="relative bg-gray-50 pt-12 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div in:fly={{ y: -50 }} class="text-center">
      <h1 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
        Blog
      </h1>
      <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
      </p>
    </div>
    <div class="mt-12 grid gap-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
			{#each posts as post, i}
			<a in:fly={{ y: 50, duration: 500, delay: 100 * i }} href='blog/{post.slug}'>
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-200">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src='{post.img}' alt="" />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm leading-5 font-medium text-indigo-600">
              <a href='/'class="hover:underline">
                Blog
              </a>
            </p>
            <a href='blog/{post.slug}' class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {post.title}
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href='blog/{post.slug}'>
                <img class="h-10 w-10 rounded-full" src="mike.png" alt="" />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-gray-900">
                <a href="/" class="hover:underline">
                  Mike Williams
                </a>
              </p>
              <div class="flex text-sm leading-5 text-gray-500">
                <time datetime="2020-03-16">
                  Mar 16, 2020
                </time>
                <span class="mx-1">
                  &middot;
                </span>
                <span>
                  6 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
			</a>
			{/each}
    </div>
  </div>
</div>
