<script>
  import { onMount } from 'svelte'
  let donations = 20
  let raised = 1220
  let meals = 120
  // let options = {
  //   headers: {
  //     'content-type': 'application/json',
  //     'x-frame-options': 'SAMEORIGIN',
  //     'vary': 'Origin',
  //   }
  // }
  onMount(async () => {
    // let response = await fetch('https://gateway.gofundme.com/web-gateway/v1/feed/support-our-nurses-during-covid19/counts', { mode: 'no-cors' }).then(res => console.log(res))
    // let response = await fetch('https://us-central1-firebase-cli-buildlab.cloudfunctions.net/goFundMe', { mode: 'cors', headers: { 'Content-Type': 'application/json' } }).then(res => console.log(res))
    let response = await fetch('https://hook.integromat.com/b6p8mibmv629yrxya8u374h1pn8k9nik').then(res => res.json()).then(json => {
      console.log(json)
      if (donations > 0) donations = json.references.counts.total_donations
      if (raised > 0) raised = json.references.counts.amount_raised_unattributed
    })
  })

</script>

<section class="bg-gray-200 py-16 px-6 md:px-16 md:py-32 flex items-center">
  <div class="container grid gap-12 md:grid-cols-3">
    <div class="w-full p-8 rounded-lg shadow-lg bg-white text-center">
      <p>Donations</p>
      <h2 class="text-4xl font-extrabold">{donations}</h2>
    </div>
    <div class="w-full p-8 rounded-lg shadow-lg bg-white text-center">
      <p>Money Raised</p>
      <h2 class="text-4xl font-extrabold">${raised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
    </div>
    <div class="w-full p-8 rounded-lg shadow-lg bg-white text-center">
      <p>Meals Delivered</p>
      <h2 class="text-4xl font-extrabold">{meals}</h2>
    </div>
  </div>
</section>
