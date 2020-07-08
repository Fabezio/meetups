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
  border-color: var(--red) #fff var(--red) #fff;
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

</style>

<!-- <div class="loading">
  <p>Loading...</p>
</div> -->

<div class="loading">
  <div class="lds-dual-ring">
    <div />
    <div />
    <div />
    <div />
  </div>
</div>