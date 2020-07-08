<style>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }

  .lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  /* background: var(--red); */
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--red);
  border-color: var(--red) transparent var(--red) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  .lds-dual-tiny-ring {
  position: relative;
  top: 20px;
  left: 19px;
  display: inline-block;
  width: 40px;
  height: 0px;
}
.lds-dual-tiny-ring:after {
  content: " ";
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  border: 4px solid var(--red);
  border-color: var(--red) transparent var(--red) transparent;
  animation: lds-dual-tiny-ring 0.8s linear infinite;
}

@keyframes lds-dual-tiny-ring {
  0% {
    transform: rotate(0deg);
  }
  /* 25% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  75% {
    transform: rotate(-270deg);
  } */
  100% {
    transform: rotate(-360deg);
  }
}

</style>

<!-- <div class="loading">
  <p>Loading...</p>
</div> -->

<div class="loading">
  <div class="lds-dual-ring">
    <div class="lds-dual-tiny-ring" />
    <div />
    <div />
    <div />
  </div>
</div>