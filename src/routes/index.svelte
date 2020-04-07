<script context="module">
  export function preload({ params, query }) {
    return this.fetch("sitemap.xml")
  }
</script>

<script>
  import About from '../components/About.svelte'
  import Footer from '../components/Footer.svelte'
  import Hero from '../components/Hero.svelte'
  import Newsletter from '../components/Newsletter.svelte'
  import Sponsors from '../components/Sponsors.svelte'
  import Tracker from '../components/Tracker.svelte'
</script>

<div>
  <Hero />
  <Tracker />
  <Sponsors />
  <About />
  <Newsletter />
  <Footer />
</div>
