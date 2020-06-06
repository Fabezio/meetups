<!-- <h1>MeetupGrid</h1> -->
<script>
export let meetups
import MeetupItem from './MeetupItem.svelte'
</script>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem 
      title={meetup.title} 
      subtitle={meetup.subtitle} 
      description={meetup.description} 
      imageUrl={meetup.imageUrl} 
      address={meetup.address} 
      email={meetup.contactEmail} 
    />
  {/each}
</section>

<style>
#meetups {
		/* margin: 0 5em; */
	}

section {
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

@media (min-width: 768px) {
  section {
    grid-gap: 0;
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>