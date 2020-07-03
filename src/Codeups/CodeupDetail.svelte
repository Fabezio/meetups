<script>
  import { onDestroy, createEventDispatcher } from 'svelte'

  import codeups from './codeup-store'
  import Button from '../UI/Button.svelte'

  export let id

  let selectedCodeup

  const unsubscribe = codeups.subscribe(items => {
    selectedCodeup = items.find(i => i.id === id)
  })

  onDestroy(() => {
    unsubscribe()
  })

</script>

<section>
  <div class="image">
    <img src={selectedCodeup.imageUrl} alt={selectedCodeup.title} >
  </div>
  <div class="content">
    <h1>{selectedCodeup.title}</h1>
    <h2>{selectedCodeup.subtitle}</h2>
    <p>{selectedCodeup.description}</p>
    <Button>contact</Button>
    <Button>close</Button>

  </div>
</section>