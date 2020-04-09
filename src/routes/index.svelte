<!-- <script context="module">
  export async function preload({ params, query }) {
    let response = await this.fetch('https://hook.integromat.com/b6p8mibmv629yrxya8u374h1pn8k9nik').then(res => res.json())
    console.log(response)
    return { donations: response.references.counts.total_donations, raised: response.references.counts.amount_raised_unattributed}
  }
</script> -->

<script>
  // export let donations, raised
  import About from '../components/About.svelte'
  import Hero from '../components/Hero.svelte'
  // import Newsletter from '../components/Newsletter.svelte'
  import Sponsors from '../components/Sponsors.svelte'
  import Tracker from '../components/Tracker.svelte'
</script>

<div>
  <Hero />
  <Tracker/>
  <Sponsors />
  <About />
  <!-- <Newsletter /> -->
</div>
