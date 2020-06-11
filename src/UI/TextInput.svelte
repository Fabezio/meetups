<script>
  export let id
  export let label
  export let controlType = "input"
  export let valid = true
  export let validityMessage = ''

  // $: if (!id.length) valid = false
  //    else valid = true
  
</script>

<div class="form-control">
  <label for={id}>{label}: </label>
  {#if controlType == 'textarea'}
  <textarea class:invalid={!valid} type="text" rows="3"  id={id} bind:value={id} on:input />
  {:else if controlType == 'email'}
  <input class:invalid={!valid} type="email" id={label} bind:value={id} on:input />
  {:else}
  <input class:invalid={!valid} type="text" id={label} bind:value={id} on:input />
  {/if}
  {#if validityMessage && !valid}
    <p class="error-msg">{validityMessage}</p>
  {/if}
</div>

<style>
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 3px 3px 0 0;
  background: white;
  padding: 0.15rem 0.25rem;
  transition: border-color 0.1s ease-out;
}

input:focus,
textarea:focus {
  border-color: #e40763;
  outline: none;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
}

.form-control {
  padding: 0.5rem 0;
  width: 100%;
  margin: 0.25rem 0;
}

.invalid {
  border-radius: 3px;
  border: 1.5px solid red;
}
.error-msg {
  color: red;
}
.valid {
  border-radius: 3px;
  border: 1.5px solid green;
}
.success-msg {
  color: green;
}





</style>