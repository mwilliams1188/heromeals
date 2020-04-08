<script>
  let option = 1
</script>

<section>
{#if (option == 1)}
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-6 sm:px-12 lg:py-16 lg:px-24">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="text-center lg:text-left">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Our Sponsors
          </h2>
          <p class="mx-auto mt-3 max-w-3xl text-lg leading-7 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
          </p>
          <div class="mt-8 sm:flex justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Join Us
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Workcation" />
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" />
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" />
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo.svg" alt="Laravel" />
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" />
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo.svg" alt="Statamic" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {:else}
  {/if}
</section>
