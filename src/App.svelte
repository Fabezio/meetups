<script>
	// Modules
	import codeups from './Codeups/codeup-store'
	import Header from './UI/Header.svelte'
	import Button from './UI/Button.svelte'
	import Modal from './UI/Modal.svelte'
	import CodeupGrid from './Codeups/CodeupGrid.svelte'
	import EditCodeup from './Codeups/EditCodeup.svelte'

	// Variables
	export let mainTitle;
	
	let editMode

	// Functions:
	function addCodeup(event) {
		const codeupData = {
			// id: event.detail.id,
			title: event.detail.title, 
			subtitle: event.detail.subtitle, 
			description: event.detail.description, 
			imageUrl: event.detail.imageUrl, 
			address: event.detail.address, 
			contactEmail: event.detail.email
		}
		
		codeups.addCodeup(codeupData)
		editMode = null
	}
	function toggleFavorite(event) {
		const id = event.detail
		codeups.toggleFavorite(id)
	}
	function cancelEdit () {
		editMode = null
	}
	

	// Reactivity
	$: console.log('welcome!')
</script>

<svelte:head>
	<title>{mainTitle}</title>
</svelte:head>

<Header title={mainTitle} />

<main>
	<div id="codeup-controls">
		<Button on:click={() => editMode = 'add' }>new codeup</Button>
	</div>
	<section>
	{#if editMode === 'add'}
	<EditCodeup on:save={addCodeup} on:cancel={cancelEdit} />
	{:else}
	<CodeupGrid codeups={$codeups} on:toggle-favorite={toggleFavorite} />
	{/if}
	</section>
	
</main>

<style>
	main {
		margin: 5em auto;
	}
	#codeup-controls {
		width: 100%;
		display: block;
		/* margin: O auto; */
		text-align: center;
	}
	section {
		overflow-y: scroll;
	}

	
	
</style>