<style>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  
  .lds-dual-tiny-ring {
  position: relative;
  top: -19px;
  display: inline-block;
  width: 32px;
  height: 0px;
  margin: auto;
}
.lds-dual-tiny-ring:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  margin: auto;
  border-radius: 50%;
  border: 3px solid var(--rg);
  border-color: var(--rg) transparent var(--rg) transparent;
  animation: lds-dual-tiny-ring 0.7s linear infinite;
}

@keyframes lds-dual-tiny-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

<!-- <div class="loading">
  <p>Loading...</p>
</div> -->

<div class="">
    <div class="lds-dual-tiny-ring" />
</div>