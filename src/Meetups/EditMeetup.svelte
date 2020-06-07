<script>
  import { createEventDispatcher } from 'svelte'
  import TextInput from '../UI/TextInput.svelte'
  import Button from '../UI/Button.svelte'

  let title = ""
	let subtitle = ""
	let description = ""
	let imageUrl = ""
	let email = ""
  let address = ""
  const dispatch = createEventDispatcher()

  function submitForm() {
    dispatch('save', {
      title,
      subtitle,
      description,
      imageUrl,
      email,
      address
    })
  } 

</script>

<form on:submit|preventDefault={ submitForm } >
  <TextInput on:input={event => (title = event.target.value)} label="Title" id={title} />
  <TextInput on:input={event => (subtitle = event.target.value)} label="Subtitle" id={subtitle} />
  <TextInput on:input={event => (address = event.target.value)} label="Address" id={address} />
  <TextInput on:input={event => (imageUrl = event.target.value)} label="Image path" id={imageUrl} />
  <TextInput on:input={event => (email = event.target.value)} label="Email" id={email} controlType="email" />
  <TextInput on:input={event => (description = event.target.value)} label="Description" id={description} controlType="textarea" />
  <Button classType="success outline" type="submit" caption="submit" />
</form>

<style>
  form {
		max-width: 90%;;
		width: 30rem;
    margin: auto;
	}
</style>