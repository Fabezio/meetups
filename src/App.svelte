<script>
	// Modules
	import Header from './UI/Header.svelte'
	import Button from './UI/Button.svelte'
	import MeetupGrid from './Meetups/MeetupGrid.svelte'
	import EditMeetup from './Meetups/EditMeetup.svelte'

	// Variables
	export let mainTitle;
	let primaryKey = 0

	let meetups = [
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
	function addMeetup(event) {
		primaryKey += 1
		const newMeetup = {
			id: primaryKey.toString(),
			title: event.detail.title, 
			subtitle: event.detail.subtitle, 
			description: event.detail.description, 
			imageUrl: event.detail.imageUrl, 
			address: event.detail.address, 
			contactEmail: event.detail.email
		}
		
		meetups = [...meetups, newMeetup]
		editMode = null
	}
	function toggleFavorite(event) {
		const id = event.detail
		const updatedMeetup = {...meetups.find(el => el.id === id)}
		updatedMeetup.isFavorite = !updatedMeetup.isFavorite
		const meetupIndex = meetups.findIndex(el => el.id == id)
		const updatedMeetups = [...meetups]
		updatedMeetups[meetupIndex] = updatedMeetup
		meetups = updatedMeetups
	}
	

	// Reactivity
	$: console.log('welcome!')
</script>

<svelte:head>
	<title>{mainTitle}</title>
</svelte:head>

<Header title={mainTitle} />

<main>
	<div class="meetup-controls">
		<Button on:click={() => editMode = 'add' } caption="new Meetup" /> 
	</div>
	{#if editMode === 'add'}
	<EditMeetup  on:save={addMeetup} />
	{:else}
	<MeetupGrid {meetups} on:toggle-favorite={toggleFavorite} />
	{/if}
	
</main>

<style>
	main {
		margin: 5em auto;
	}
	.meetup-controls {
		width: 100%;

		margin: O auto;
	}

	
	
</style>