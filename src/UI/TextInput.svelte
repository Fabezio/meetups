<script>
  export let value
  export let label
  export let controlType = "input"
  export let valid = true
  export let validityMessage = ''
  
  let touched = false
  

  // $: if (!id.length) valid = false
  //    else valid = true
  
</script>

<div class="form-control">
  <label for={value}>{label}: </label>
  {#if controlType == 'textarea'}
  <textarea class:invalid={!valid && touched} type="text" rows="3" bind:value on:input on:blur={() => touched = true } />
  {:else if controlType == 'email'}
  <input class:invalid={!valid && touched} type="email" value={label} on:input on:blur={() => touched = true } />
  {:else}
  <input class:invalvalue={!value && touched} type="text" value={label} on:input  on:blur={() => touched = true } />
  {/if}
  {#if validityMessage && !valid && touched}
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
  background: rgba(255, 0,0, 0.25);
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