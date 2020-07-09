<script>
	// Modules
	import {onMount} from 'svelte'
	import codeups from '../components/Codeups/codeup-store'
	import Grid from '../components/Codeups/Grid.svelte'
	import Edit from '../components/Codeups/Edit.svelte'
	import Detail from '../components/Codeups/Detail.svelte'
	import Header from '../components/UI/Header.svelte'
	import Button from '../components/UI/Button.svelte'
	import Modal from '../components/UI/Modal.svelte'
	import Spinner from '../components/UI/LoadingSpinner.svelte'
	import Error from '../components/UI/Error.svelte'

	// Variables
	export let mainTitle;
	let tabTitle = 'Codeups main mage'
	let editMode
	let editedId
	let page = 'overview'
	const pageData = {}
	let myUrl = 'https://codeups.firebaseio.com/codeups.json'
	let isLoading = true
	let error
	// let codeups = codeups
	// export let id

	// fetch data
	onMount(() => {

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
					codeups.setCodeups(loadedCodeups.reverse())
					// codeups.setCodeups([])
				}, 100 )
			}
		})
		.catch( err => {
			isLoading = false
			error = err
			console.log(err)
		})
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
	function cancelError()  {
		error = null
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
	{#if error}
		<Error message={error.message} on:cancel={cancelError} />
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

<!-- <style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->
