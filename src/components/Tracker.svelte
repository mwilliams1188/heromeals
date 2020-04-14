<script>
  import { onMount } from 'svelte'
  import Spinner from './Spinner.svelte'
  import { fly } from 'svelte/transition'

  let donations = 44
  let raised = 1992
  let meals = 100
  const url = 'https://hook.integromat.com/b6p8mibmv629yrxya8u374h1pn8k9nik'
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
    let response = await fetch(url).then(res => res.json()).then(json => {
      console.log(json)
      if (donations > 0) donations = json.references.counts.total_donations
      if (raised > 0) raised = json.references.counts.amount_raised_unattributed
    })
  })

</script>

<section class="bg-gray-200 py-16 px-6 md:px-16 md:py-32 flex items-center">
  <div class="container grid gap-12 md:grid-cols-3">
    <div in:fly={{ y:50, delay: 100}} class="w-full p-8 rounded-lg shadow-lg bg-white text-center">
      <p>Donations</p>
      <h2 class="text-4xl font-extrabold">{donations}</h2>
    </div>
    <div in:fly={{ y:50, delay: 250}} class="w-full p-8 rounded-lg shadow-lg bg-white text-center">
      <p>Money Raised</p>
      <h2 class="text-4xl font-extrabold">${raised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
    </div>
    <div in:fly={{ y:50, delay: 400}} class="w-full p-8 rounded-lg shadow-lg bg-white text-center">
      <p>Meals Delivered</p>
      <h2 class="text-4xl font-extrabold">{meals}</h2>
    </div>
  </div>
</section>
