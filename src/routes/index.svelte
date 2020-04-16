<script context="module">
   export async function preload({ params, query }) {
     let json = await this.fetch(`https://mikewilliams.api.stdlib.com/http-project@dev/`).then(res => res.json())
     return {
       donations: json.references.counts.total_donations,
       raised: json.references.counts.amount_raised_unattributed
     }
   }
 </script>

<script>
  // export let donations, raised
  import About from '../components/About.svelte'
  import Hero from '../components/Hero.svelte'
  // import Newsletter from '../components/Newsletter.svelte'
  import Sponsors from '../components/Sponsors.svelte'
  import Tracker from '../components/Tracker.svelte'

  export let raised, donations
</script>

<svelte:head>
  <title>Meals For Nurses</title>
</svelte:head>

<div>
  <Hero />
  <Tracker {raised} {donations}/>
  <Sponsors />
  <About />
  <!-- <Newsletter /> -->
</div>
