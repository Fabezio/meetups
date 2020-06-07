<script>
  import { createEventDispatcher } from 'svelte'
  import TextInput from '../UI/TextInput.svelte'
  import Button from '../UI/Button.svelte'
  import Modal from '../UI/Modal.svelte'

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
  function cancel () {
    dispatch('cancel')
  }
</script>

<Modal title="Edit Codeup Data" on:cancel>
  <form on:submit|preventDefault={ submitForm } >
    <TextInput on:input={event => (title = event.target.value)} label="Title" id={title} />
    <TextInput on:input={event => (subtitle = event.target.value)} label="Subtitle" id={subtitle} />
    <TextInput on:input={event => (address = event.target.value)} label="Address" id={address} />
    <TextInput on:input={event => (imageUrl = event.target.value)} label="Image path" id={imageUrl} />
    <TextInput on:input={event => (email = event.target.value)} label="Email" id={email} controlType="email" />
    <TextInput on:input={event => (description = event.target.value)} label="Description" id={description} controlType="textarea" />
  </form>
  <div slot="footer">
    <Button mode="success" type="button" on:click={submitForm} >save</Button>
    <Button color="outline" type="button" on:click={cancel} >cancel</Button>
  </div>
  <!-- <span slot="\footer">alt footer</span> -->
</Modal>



<style>
  form {
		max-width: 100%;;
		width: 30rem;
    margin: auto;
	}
</style>