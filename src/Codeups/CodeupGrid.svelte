<!-- <h1>CodeupGrid</h1> -->
<script>
export let codeups
import CodeupItem from './CodeupItem.svelte'
</script>

<section id="codeups">
  {#each codeups as codeup}
    <CodeupItem 
      on:toggle-favorite
      id={codeup.id}
      title={codeup.title} 
      subtitle={codeup.subtitle} 
      description={codeup.description} 
      imageUrl={codeup.imageUrl} 
      address={codeup.address} 
      email={codeup.contactEmail} 
      isFav={codeup.isFavorite}
    />
  {/each}
</section>

<style>
#codeups {
  /* 
  */
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