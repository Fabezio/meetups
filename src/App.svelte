<script>
	// Modules
	import codeups from './Codeups/codeup-store'
	import Grid from './Codeups/Grid.svelte'
	import Edit from './Codeups/Edit.svelte'
	import Detail from './Codeups/Detail.svelte'
	import Header from './UI/Header.svelte'
	import Button from './UI/Button.svelte'
	import Modal from './UI/Modal.svelte'
	import Spinner from './UI/LoadingSpinner.svelte'

	// Variables
	export let mainTitle;
	let tabTitle = 'Codeups main mage'
	let editMode
	let editedId
	let page = 'overview'
	const pageData = {}
	let myUrl = 'https://codeups.firebaseio.com/codeups.json'
	let isLoading = true
	// let codeups = codeups
	// export let id

	// fetch data
	fetch(myUrl)
	.then( res => {
		if(!res.ok) throw new Error('Oops, Couldn\'t fetch data, please come back later...')
		console.log('Data fetched on', myUrl)
		return res.json()
	})
	.then( data => {
		const loadedCodeups = []
		for(const key in  data) {
			loadedCodeups.push({
				...data[key],
				id: key
			})
			setTimeout(() => {
				isLoading = false
				codeups.setCodeups(loadedCodeups)
				// codeups.setCodeups([])
			}, 500 )
		}
	})
	.catch( err => {
		isLoading = false
		console.log(err)
	})

	// Functions:
	function savedCodeup(event) {
		editMode = null
		editedId = null
	}
		
	function toggleFavorite(event) {
		const id = event.detail
		codeups.toggleFavorite(id)
	}
	function cancelEdit () {
		editMode = null
		editedId = null
	}
	function showDetails (event) {
		tabTitle = "detail"
		page = 'details'
		pageData.id = event.detail
		return pageData.id
		// console.log(pageData)
	}
	function startEdit (event) {
		editMode = 'edit'
		editedId = event.detail
	}
	function closeDetails() {
		page = 'overview'
		pageData = {}
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
		
		{#if editMode === 'edit'}
			<Edit 
				{myUrl}
				id={editedId} on:save={savedCodeup} on:cancel={cancelEdit} 
			/>
		{/if}
		{#if isLoading}
			<Spinner />
		{:else}
			<Grid 
				on:showdetails={showDetails} 
				codeups={$codeups} 
				on:edit={startEdit}
				on:add={() => editMode = 'edit'}
			/>
		{/if}
	{:else }
		<Detail id={pageData.id} 	on:close={closeDetails} />
	{/if}

	

	<section>
	</section>
	
</main>

<style>
	main {
		/* margin: 5em auto; */
	}
	
	/* section {
		overflow-y: scroll;
	} */
	
</style>