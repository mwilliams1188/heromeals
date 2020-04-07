<script context="module">
  export function preload({ params, query }) {
    return this.fetch("sitemap.xml")
  }
</script>

<script>
  import About from '../components/About.svelte'
  import Hero from '../components/Hero.svelte'
  import Tracker from '../components/Tracker.svelte'
</script>

<div>
  <Hero />
  <Tracker />
  <About />
</div>
