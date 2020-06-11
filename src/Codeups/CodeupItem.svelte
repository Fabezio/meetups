<script>
import { createEventDispatcher } from 'svelte'
import Button from '../UI/Button.svelte'
import Badge from '../UI/Badge.svelte'

export let id
export let title
export let subtitle
export let imageUrl
export let description
export let address
export let email
export let isFav
const dispatch = createEventDispatcher()

function descLengthHandle() {
  const wordLength = 10
  description.split(' ')
  console.log(description.length)
  return description
}

// $: {
//     const nb = 100
//     if (description.length > nb)
//     {
//     description.length = nb
//     description += '...'}

//     console.log(description.length)
//   }
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
      {#if isFav}
      <Badge>&hearts;</Badge>
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
    <Button href="mailto:{email}" >contact</Button>
    <!-- <a href="mailto:{email}">Contact</a> -->
    <Button >show details</Button>
    <Button 
      mode="outline"
      color={isFav ? null : 'success'}
      on:click={() => dispatch('toggle-favorite', id)} 
    >
      {isFav ? 'unfavorite' :'favorite' }
    </Button>
  </footer>
  
</article>

<style>
  :root{--h-border: 2px ridge rgba(0,0,0,0.05);}
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }
  
  /* .codeup {
    grid-column: 1;
    grid-row: 1;
  } */

  header,
  .content,
  footer {
    padding: 1rem;
  }
  .content {
    /* float: right; */
    min-height: 5rem;
    /* overflow-y: scroll; */
  }

  .content p {
    text-align: right;
  }

  .image {
    width: 100%;
    height: 14rem;
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

  h1.is-favorite {
    background: #01a129;
    color: white;
    border-radius: 5px;
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
</style>