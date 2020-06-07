<script>
	// Modules
	import Header from './UI/Header.svelte'
	import Button from './UI/Button.svelte'
	import CodeupGrid from './Codeups/CodeupGrid.svelte'
	import EditCodeup from './Codeups/EditCodeup.svelte'

	// Variables
	export let mainTitle;
	let primaryKey = 0

	let codeups = [
		{
			id: 'm1',
			title: 'Hello!',
			subtitle: 'Learn to code quickly',
			description: 'Because time is money, you will need to learn to be reaaaally efficiency',
			imageUrl: 'https://th.bing.com/th/id/OIP.6KmniewXDmmYxJRysPRDvAHaI6?pid=Api&w=149.4809688581315&h=180&c=7&dpr=1,3',
			address: '0001 CodeJS Road, MIT',
			contactEmail: 'max.academind@dev-svelte.info',
			isFavorite: false
		},
		{
			id: 'm2',
			title: 'Pssst',
			subtitle: 'Django is better',
			description: 'If you seek a backend webdev framework, Django is really cool!',
			imageUrl: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/3/formation-django.png',
			address: 'Monty street',
			contactEmail: 'unchained-development@outlook.us',
			isFavorite: false
		}
	]
	let editMode

	// Functions:
	function addCodeup(event) {
		primaryKey += 1
		const newCodeup = {
			id: primaryKey.toString(),
			title: event.detail.title, 
			subtitle: event.detail.subtitle, 
			description: event.detail.description, 
			imageUrl: event.detail.imageUrl, 
			address: event.detail.address, 
			contactEmail: event.detail.email
		}
		
		codeups = [...codeups, newCodeup]
		editMode = null
	}
	function toggleFavorite(event) {
		const id = event.detail
		const updatedCodeup = {...codeups.find(el => el.id === id)}
		updatedCodeup.isFavorite = !updatedCodeup.isFavorite
		const codeupIndex = codeups.findIndex(el => el.id == id)
		const updatedCodeups = [...codeups]
		updatedCodeups[codeupIndex] = updatedCodeup
		codeups = updatedCodeups
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
	<EditCodeup  on:save={addCodeup} />
	{:else}
	<CodeupGrid {codeups} on:toggle-favorite={toggleFavorite} />
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
		margin: O auto;
		text-align: center;
	}
	section {
		overflow-y: scroll;
	}

	
	
</style>