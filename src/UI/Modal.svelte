<script>
  import { createEventDispatcher } from 'svelte'
  import Button from './Button.svelte'
  export let title
  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('cancel')
  }

</script>

<div class="modal-backdrop" on:click={closeModal}></div>
<div class="modal">
  <h1>{title}</h1>
  <div class="content">
    <slot/>
    <!-- content -->
  </div>
  <footer>
    <slot name="footer">
      <Button on:click={closeModal}>close</Button>  
    </slot>
    <!-- footer -->
    </footer>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.75);
    z-index: 10;
  }
  
  .modal {
    position: fixed;
    /* margin: auto; */
    top: 10vh;
    left: 20%;
    width: 60%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    overflow: scroll;
  }

  h1, 
  .content, 
  footer {
    padding: 1rem;
  }
  h1 {
    margin: 0;
    border-bottom: 1px solid #ccc;
    font-family: 'Roboto Slab', sans-serif;
    text-align: center;
  }
  

  /* @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 2rem);
    }
  } */
</style>