<script>
	// Modules
	import codeups from './Codeups/codeup-store'
	import CodeupGrid from './Codeups/CodeupGrid.svelte'
	import EditCodeup from './Codeups/EditCodeup.svelte'
	import Detail from './Codeups/CodeupDetail.svelte'
	import Header from './UI/Header.svelte'
	import Button from './UI/Button.svelte'
	import Modal from './UI/Modal.svelte'

	// Variables
	export let mainTitle;
	
	let editMode

	// Functions:
	function addCodeup(event) {
		
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
	<Detail/>
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
		text-align: center;
	}
	section {
		overflow-y: scroll;
	}
	
</style>