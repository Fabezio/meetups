<script>
  import Item from './Item.svelte'
  import Filter from './Filter.svelte'
  export let codeups

  let favsOnly = false
  // let filteredCodeups


  $: filteredCodeups = favsOnly ? codeups.filter(m => m.isFavorite) : codeups ;
  // $:  console.log (codeups.isFavorite)
      
  function setFilter(event) {
    return favsOnly = event.detail === 1
    // console.log(favsOnly)
  }
  
</script>

<section id="codeups-controls">
  <Filter on:select={setFilter} />
</section>
<section id="codeups">
  {#each filteredCodeups as codeup}
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
  {/each}
</section>

<style>
  #codeups {
    margin: 0 auto; 
	}
  #codeups-controls {
    margin: 1rem; 
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