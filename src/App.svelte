<script>
	// Modules
	
	import codeups from './Codeups/codeup-store'
	import Grid from './Codeups/Grid.svelte'
	import Edit from './Codeups/Edit.svelte'
	import Detail from './Codeups/Detail.svelte'
	import Header from './UI/Header.svelte'
	import Button from './UI/Button.svelte'
	import Modal from './UI/Modal.svelte'

	// Variables
	export let mainTitle;
	let tabTitle = 'Codeups main mage'
	let loadedCodeups = codeups
	
	let editMode
	// export let id
	let page = 'overview'
	const pageData = {}

	// Functions:
	function addCodeup(event) {
		
		editMode = null
	}
	function toggleFavorite(event) {
		const id = event.detail
		loadedCodeups.toggleFavorite(id)
	}
	function cancelEdit () {
		editMode = null
	}
	function showDetails (event) {
		tabTitle = "detail"
		page = 'details'
		pageData.id = event.detail
		return pageData.id
		// console.log(pageData)
	}

	// Reactivity
	$: console.log('welcome!')

</script>

<svelte:head>
	<title>{tabTitle}</title>
</svelte:head>

<Header title={mainTitle} />

<main>
	{#if page === 'overview'}
		<div id="codeup-controls">
			<Button on:click={() => editMode = 'add' }>new codeup</Button>
		</div>
		{#if editMode === 'add'}
			<Edit on:save={addCodeup} on:cancel={cancelEdit} />
		{/if}
			<Grid on:showdetails={showDetails} codeups={$loadedCodeups} />
	{:else }
		<Detail id={pageData.id} />
	{/if}

	

	<section>
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
	/* section {
		overflow-y: scroll;
	} */
	
</style>