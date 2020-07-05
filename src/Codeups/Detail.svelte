<script>
  import { onDestroy, createEventDispatcher } from 'svelte'

  import codeups from './codeup-store'
  import Button from '../UI/Button.svelte'

  export let id

  let selectedCodeup
  const dispatch = createEventDispatcher()

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
    <h2>{selectedCodeup.subtitle} {selectedCodeup.address}</h2>
    <p>{selectedCodeup.description}</p>
    <Button href="mailto:{selectedCodeup.contactEmail}" >contact</Button>
    <Button type="button" mode='oulined' on:click={() => dispatch('close')} >close</Button>

  </div>
</section>

<style>
  section {
    margin-top: 4rem;
  }
  .image {
    width: 100%;
    height: 25rem;
    background: #e7e7e7;
  }

  img {
    width: inherit;
    height: 100%;
    object-fit:cover;
  }
  .content {
    text-align: center;
    width: 80%;
    margin: auto;

  }
  h1 {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  h2 {
    font-size: 1.25rem;
    color: #6B6B6B;
  }
  p {
    font-size: 1.5rem;
  }
</style>