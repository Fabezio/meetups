<script>
  import {createEventDispatcher} from 'svelte'

  import codeups from './codeup-store'  

  import Button from '../UI/Button.svelte'
  import Badge from '../UI/Badge.svelte'
  import Spinner from '../UI/LoadingTinySpinner.svelte'

  export let id
  export let title
  export let subtitle
  export let imageUrl
  export let description
  export let address
  export let email
  export let isFavorite
  
  let isLoading = false

  const dispatch = createEventDispatcher()

  function toggleFavorite() {
    isLoading = true
    fetch(`https://codeups.firebaseio.com/codeups/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({isFavorite: !isFavorite}),
        headers: {
          'Content-Type': 'application/json'
       }
      })
      .then( res => {
        // isLoading = false
        if(!res.ok) throw new Error('Oops! Please try again.')
        console.log(`data ${id} favorite option updated`)
        	setTimeout(() => {
				isLoading = false
				// codeups.setCodeups(loadedCodeups.reverse())
        codeups.toggleFavorite(id)
				// codeups.setCodeups([])
			}, 500 )
        // codeups.updateCodeup(id, codeupData)
      })
      .catch ( err =>  {
          loading = false
          console.log(err)
        })
  }

  function descLengthHandle() {
    const wordLength = 10
    description.split(' ')
    console.log(description.length)
    return description
  }

  $: {let words = description.split(' ')
      const nb = 25
      if (words.length > nb){
      words.length = nb
      description = words.join(' ') + ' ...'}

      console.log(words.length)
    }

</script>

<article class="">
    <header>
      <h1 >
        {title}
        {#if isFavorite}
        <Badge>favorite</Badge>
        {/if}
      </h1>
      <h2>{subtitle}</h2>
      <p>{address}</p>
    </header> 

    <body>
      <div class="image">
        <img src={imageUrl} alt={title}>
      </div>
      <div class="content">
        <p>{description}</p>
      </div>
    </body>

    <footer>
      <!-- <Button href="mailto:{email}" >contact</Button> -->
      <!-- <a href="mailto:{email}">Contact</a> -->
      <Button mode='outline' type="button" on:click={() => dispatch('edit', id)} >
        Edit
      </Button>
      <Button on:click={() => dispatch('showdetails', id)} >show details</Button>
      
      <Button 
        mode="outline"
        color={isFavorite ? null : 'success'}
        on:click={toggleFavorite} 
      >
    {#if isLoading}
      <Spinner />
      <!-- --updating-- -->
    {:else}
        {isFavorite ? 'unfavorite' :'favorite' }
    {/if}
      </Button>
      <!-- <Filter /> -->
    </footer>
    

  </article>


<style>
  :root{--h-border: 1px ridge rgba(0,0,0,0.05);}
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }
  
  header,
  .content,
  footer {
    padding: 1rem;
  }
  .content {
    min-height: 5rem;
  }

  .content p {
    text-align: right;
  }

  .image {
    width: 100%;
    height: 18rem;
    border-top: var(--h-border);
    border-bottom: var(--h-border);
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1, h2, p {padding-left: 0.5rem;}
  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    font-family: "Roboto Slab", sans-serif;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }
  /* .fav-button {
    display: inline;
    max-width: 30rem;
  } */
</style>