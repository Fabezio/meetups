<script>
  import { createEventDispatcher } from 'svelte'
  import codeups from './codeup-store'
  
  import { isEmpty, isValidEmail } from '../helpers/validation'
  import TextInput from '../UI/TextInput.svelte'
  import Button from '../UI/Button.svelte'
  import Modal from '../UI/Modal.svelte'

  export let id = null

  let title = ""
  let subtitle = ""
  let description = ""
  let imageUrl = ""
  let email = ""
  let address = ""

  if (id) {
    const unsubscribe = codeups.subscribe(items => {
      const selectedCodeup = items.find(i => i.id === id)
      title = selectedCodeup.title 
      subtitle = selectedCodeup.subtitle 
      description = selectedCodeup.description 
      imageUrl = selectedCodeup.imageUrl 
      email = selectedCodeup.email 
      address = selectedCodeup.address 
    })
    unsubscribe()
  }

  let formIsValid = false
  
  const dispatch = createEventDispatcher()

  function submitForm() {
    const codeupData = {
			// id: event.detail.id,
			title: title, 
			subtitle: subtitle, 
			description: description, 
			imageUrl: imageUrl, 
			address: address, 
			contactEmail: email
		}
		if(id) {
      codeups.updateCodeup(id, codeupData)
    } else {
      codeups.addCodeup(codeupData)
    }
    dispatch('save')
  } 

  function cancel () {
    dispatch('cancel')
  }

  $: titleValid = !isEmpty(title)
  $: subtitleValid = !isEmpty(subtitle)
  $: descValid = !isEmpty(description)
  $: imgValid = !isEmpty(imageUrl)
  $: addressValid = !isEmpty(address)
  /*
       ^
  //  /!\ email validation 
     _____
 */
  $: emailValid = isValidEmail(email)
  $: formIsValid = titleValid && subtitleValid && descValid && imgValid && addressValid && emailValid

</script>

<Modal title="Edit Codeup Data" on:cancel>
  <form on:submit|preventDefault={ submitForm } >
    <TextInput 
      id=''
      value={title} 
      valid={titleValid} 
      validityMessage="Please enter a valid title" 
      on:input={event => (title = event.target.value)} 
      label="Title" 
    />
    <TextInput 
      id=''
      value={subtitle} 
      valid={subtitleValid} 
      validityMessage="Please enter a valid subtitle" 
      on:input={event => (subtitle = event.target.value)} 
      label="Subtitle" 
    />
    <TextInput 
      id=''
      value={address} 
      valid={addressValid} 
      validityMessage="Please enter a valid address" 
      on:input={event => (address = event.target.value)} 
      label="Address" 
    />
    <TextInput 
      id=''
      value={imageUrl} 
      valid={imgValid} 
      validityMessage="Please enter a valid path" 
      on:input={event => (imageUrl = event.target.value)} 
      label="Image path"
      />
    <TextInput 
      id=''
      valid={emailValid} 
      validityMessage="Please enter a valid email" 
      on:input={event => (email = event.target.value)} 
      label="Email" 
      value={email} 
      controlType="email" />
    <TextInput 
      id=''
      valid={descValid} 
      validityMessage="Please enter a valid description" 
      bind:value={description}
      label="Description" 
      controlType="textarea" />
  </form>
  <div slot="footer">
    <Button 
      mode="success" 
      type="button" 
      on:click={submitForm} 
      disabled={!formIsValid}
     >save</Button>
    <Button color="outline" type="button" on:click={cancel}  >cancel</Button>
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