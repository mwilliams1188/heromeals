<script>
  import { onMount } from 'svelte'
  // import Spinner from './Spinner.svelte'
  import { fly } from 'svelte/transition'

  export let donations = 53
  export let raised = 4139
  export let meals = 150
  const url = 'https://hook.integromat.com/b6p8mibmv629yrxya8u374h1pn8k9nik'
  const stdlib = 'https://mikewilliams.api.stdlib.com/http-project@dev/'
  // const url = 'https://gateway.gofundme.com/web-gateway/v1/feed/support-our-nurses-during-covid19/counts'
  // const url = 'https://us-central1-firebase-cli-buildlab.cloudfunctions.net/goFundMe'
  // let options = {
  //   headers: {
  //     'content-type': 'application/json',
  //     'x-frame-options': 'SAMEORIGIN',
  //     'vary': 'Origin',
  //   }
  // }
  onMount(async () => {
    let response = await fetch(stdlib).then(res => res.json()).then(json => {
      console.log(json)
      if (donations > 0) donations = json.references.counts.total_donations
      if (raised > 0) raised = json.references.counts.amount_raised_unattributed
      if (meals > 0) meals = json.siteSettings.filter(item => item.fields.item = "Meals Delivered")[0].fields["Value"]
    })
  })

</script>

<section class="flex items-center px-6 py-16 bg-gray-200 md:px-16 md:py-32">
  <div class="container grid gap-12 md:grid-cols-3">
    <div in:fly={{ y:50, delay: 100}} class="w-full p-8 text-center bg-white rounded-lg shadow-lg">
      <p>Donations</p>
      <h2 class="text-4xl font-extrabold">{donations}</h2>
    </div>
    <div in:fly={{ y:50, delay: 250}} class="w-full p-8 text-center bg-white rounded-lg shadow-lg">
      <p>Money Raised</p>
      <h2 class="text-4xl font-extrabold">${raised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
    </div>
    <div in:fly={{ y:50, delay: 400}} class="w-full p-8 text-center bg-white rounded-lg shadow-lg">
      <p>Meals Delivered</p>
      <h2 class="text-4xl font-extrabold">{meals}+</h2>
    </div>
  </div>
</section>
