<script>
  import { onMount } from 'svelte'
  let meals

  // onMount(() => {
  //   let jont = fetch('jont').then(res => {
  //     meals.jont
  //   })
  // })
</script>

<div class="bg-green-200">
  <div class="bg-white rounded-lg shadow flex flex-col">
    <input type="text" bind:value={meals} name="meals" placeholder="101">
  </div>
</div>
