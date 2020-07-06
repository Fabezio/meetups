<script>
  import { createEventDispatcher } from 'svelte'
  import { fly, slide } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  
  import Item from './Item.svelte'
  import Filter from './Filter.svelte'
  import Button from '../UI/Button.svelte'


  const dispatch = createEventDispatcher()
  export let codeups
  export let editMode

  let favsOnly = false
  // let filteredCodeups


  $: filteredCodeups = favsOnly ? codeups.filter(m => m.isFavorite) : codeups ;
  // $:  console.log (codeups.isFavorite)
      
  function setFilter(event) {
    return favsOnly = event.detail === 1
    // console.log(favsOnly)
  }
  
</script>

<section class="codeup-controls">
  <Filter on:select={setFilter} />
  <Button on:click={() => dispatch('add') }>new codeup</Button>
  
</section>
<section id="codeups">
  {#each filteredCodeups as codeup}
    <div
      transition:fly
      
    >
      <Item 
        id={codeup.id}
        title={codeup.title} 
        subtitle={codeup.subtitle} 
        description={codeup.description} 
        imageUrl={codeup.imageUrl} 
        address={codeup.address} 
        email={codeup.contactEmail} 
        isFavorite={codeup.isFavorite}
        
        on:edit
        on:showdetails
        on:close
      />
    </div>
  {/each}
</section>

<style>
  #codeups {
    margin: 0 auto; 
	}
  /* #codeups-controls {
		width: 100%;
		text-align: center;
	} */
  .codeup-controls {
		display: flex;
    padding: 1rem; 
    justify-content: space-between;
	}

section {
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  overflow-y: scroll;
}

@media (min-width: 768px) {
  section {
    grid-gap: 0;
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>