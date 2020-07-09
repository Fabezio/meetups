<script>
  import { createEventDispatcher } from 'svelte'
  import codeups from './codeup-store'
  
  import { isEmpty, isValidEmail, onMount } from '../helpers/validation'
  import TextInput from '../UI/TextInput.svelte'
  import Button from '../UI/Button.svelte'
  import Modal from '../UI/Modal.svelte'

  export let id = null
  export let myUrl
  const updateMounted = onMount(()=>{
    fetch(`https://codeups.firebaseio.com/codeups/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(codeupData),
        headers: {
          'Content-Type': 'application/json'
       }
      })
      .then( res => {
        if(!res.ok) throw new Error('oh, no!')
        console.log(`data ${id} updated`)
        codeups.updateCodeup(id, codeupData)
      })
      .catch ( err =>  console.log(err))
  })
  const addCodeupMounted = (() => {

      fetch(myUrl, {
        method: 'POST',
        body: JSON.stringify({...codeupData, isFavorite: false}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then( res => {
        if(!res.ok) throw new Error('Oops, Problem! Try again...')
        console.log('data sent to', myUrl)
        return res.json()
      })
      .then( data => {
        codeups.addCodeup({
          ...codeupData,
          isFavorite: false,
          id: data.name
        })
        console.table(data)
      })
      .catch( err => {
        console.log(err)
      })
      codeups.addCodeup(codeupData)
  })

  let title = ""
  let subtitle = ""
  let description = ""
  let imageUrl = ""
  let contactEmail = ""
  let address = ""

  if (id) {
    const unsubscribe = codeups.subscribe(items => {
      const selectedCodeup = items.find(i => i.id === id)
      title = selectedCodeup.title 
      subtitle = selectedCodeup.subtitle 
      description = selectedCodeup.description 
      imageUrl = selectedCodeup.imageUrl 
      contactEmail = selectedCodeup.contactEmail 
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
			contactEmail: contactEmail
		}
		if(id) {
      updateMounted()
      
    } else {
      addCodeupMounted()
    }
    dispatch('save')
  } 

  function cancel () {
    dispatch('cancel')
  }
  function deleteCodeup () {
    fetch(`https://codeups.firebaseio.com/codeups/${id}.json`, {
        method: 'DELETE'
      })
      .then( res => {
        if(!res.ok) throw new Error('Oops! Please try again.')
        console.log(`data ${id} deleted`)
        codeups.removeCodeup(id)
      })
      .catch ( err =>  console.log(err))
    dispatch('save')
  }

  $: console.log('address:', myUrl)
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
  $: emailValid = isValidEmail(contactEmail)
  $: formIsValid = titleValid && subtitleValid && descValid && imgValid && addressValid && emailValid

</script>

<Modal title="Edit Codeup Data" on:cancel>
  <form on:submit|preventDefault={ submitForm } >
    <TextInput 
      type='text'
      id='title'
      value={title} 
      valid={titleValid} 
      validityMessage="Please enter a valid title" 
      on:input={event => (title = event.target.value)} 
      label="Title" 
    />
    <TextInput 
      type='text'
      id='subtitle'
      value={subtitle} 
      valid={subtitleValid} 
      validityMessage="Please enter a valid subtitle" 
      on:input={event => (subtitle = event.target.value)} 
      label="Subtitle" 
    />
    <TextInput 
      type='text'
      id='address'
      value={address} 
      valid={addressValid} 
      validityMessage="Please enter a valid address" 
      on:input={event => (address = event.target.value)} 
      label="Address" 
    />
    <TextInput 
      type='text'
      id='image'
      value={imageUrl} 
      valid={imgValid} 
      validityMessage="Please enter a valid path" 
      on:input={event => (imageUrl = event.target.value)} 
      label="Image path"
      />
    <TextInput 
      type='email'
      id='email'
      valid={emailValid} 
      validityMessage="Please enter a valid email" 
      label="Email" 
      value={contactEmail} 
      on:input={event => (contactEmail = event.target.value)} 
      />
    <TextInput 
      type='text'
      id='description'
      valid={descValid} 
      validityMessage="Please enter a valid description" 
      label="Description" 
      controlType="textarea" 
      value={description} 
      on:input={event => (description = event.target.value)} 
    />
  </form>
  <div slot="footer">
    <Button 
      mode="success" 
      type="button" 
      on:click={submitForm} 
      disabled={!formIsValid}
     >save</Button>
    <Button color="outline" type="button" on:click={cancel}  >cancel</Button>
    {#if id}
      <Button on:click={deleteCodeup}>delete</Button>
    {/if}
  </div>
</Modal>



<style>
  form {
		max-width: 100%;;
		width: 30rem;
    margin: auto;
	}
</style>