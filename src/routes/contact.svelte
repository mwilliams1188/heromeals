<script>
  import { fly } from 'svelte/transition'
</script>

<svelte:head>
  <title>Contact | Meals For Nurses</title>
</svelte:head>

<div class="bg-gray-100 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 h-full">
  <div class="relative max-w-xl mx-auto">
    <svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
      <defs>
        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
    <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
      <defs>
        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
    <div in:fly={{ y: -50 }} class="text-center">
      <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Contact us
      </h2>
      <p class="mt-4 text-lg leading-6 text-gray-500">
        If you're a medical facility, caterer, or just want to help, drop us a line.
      </p>
    </div>
    <div in:fly={{ y: 50, delay: 50}} class="mt-12">
      <!-- <form netlify name="contact" action="#" method="POST" data-netlify-recaptcha="true" class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"> -->
      <form name="contact" action="/?thankyou=true" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">Name</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input id="name" name="name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-medium leading-5 text-gray-700">Company</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input id="company" name="company" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
          <div class="font-bold mt-1 relative rounded-md shadow-sm">
            <input id="email" name="email" type="email" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone_number" class="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input id="phone_number" name="phone_number" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" placeholder="+1 (555) 987-6543" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-medium leading-5 text-gray-700">Message</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <textarea id="message" name="message" rows="4" class="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
          </div>
        </div>
        <!-- <div data-netlify-recaptcha="true"></div> -->
        <div class="sm:col-span-2">
          <span class="w-full inline-flex rounded-md shadow-sm">
            <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150">
              Submit
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
