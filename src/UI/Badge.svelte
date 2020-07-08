<script>
  import {slide} from 'svelte/transition'
</script>

<span transition:slide={{duration: 200}} id="fav">
  <slot />
</span>

<style>
  #fav {
    margin-left: .5rem;
    padding: .25rem 0.5rem;
    border-radius: 5px;
    background: var(--red);
    color: white;
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
    /* text-shadow: 0.5px 0.5px 2px #30ffa9; */
  }
</style>