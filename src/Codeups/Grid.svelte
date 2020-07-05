<script>
  export let codeups
  import Item from './Item.svelte'
</script>

<section id="codeups">
  {#each codeups as codeup}
    <Item 
      
      id={codeup.id}
      title={codeup.title} 
      subtitle={codeup.subtitle} 
      description={codeup.description} 
      imageUrl={codeup.imageUrl} 
      address={codeup.address} 
      email={codeup.contactEmail} 
      isFav={codeup.isFavorite}
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