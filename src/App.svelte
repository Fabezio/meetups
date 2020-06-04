<script>
	// Modules
	import Header from './UI/Header.svelte'
	import TextInput from './UI/TextInput.svelte'
	
	import MeetupGrid from './Meetups/MeetupGrid.svelte'

	// Variables
	export let mainTitle;
	let primaryKey = 0

	let title = ""
	let subtitle = ""
	let description = ""
	let imageUrl = ""
	let email = ""
	let address = ""
	
	// const meetup = {
	// 	// title: title, 
	// 	// subtitle: , 
	// 	// imageUrl: , 
	// 	// description: , 
	// 	// contactEmail: , 
	// 	// adress: 
	// }
		
	let meetups = [
		{
			id: 'm1',
			title: 'Hello!',
			subtitle: 'Learn to code quickly',
			description: 'Because time is money, you will need to know how to to be reaaaally efficiency',
			imageUrl: 'https://th.bing.com/th/id/OIP.6KmniewXDmmYxJRysPRDvAHaI6?pid=Api&w=149.4809688581315&h=180&c=7&dpr=1,3',
			address: '0001 CodeJS Road, MIT',
			contactEmail: 'max.academind@dev-svelte.info'
		},
		{
			id: 'm2',
			title: 'Hey everybody',
			subtitle: 'Django is better',
			description: 'If you seek a backend framework based on python, choose Django',
			imageUrl: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/3/formation-django.png',
			address: 'Monty street',
			contactEmail: 'unchained-development@outlook.us'
		}
	]

	// Functions:
	function addMeetup() {
		primaryKey += 1
		const newMeetup = {
			id: primaryKey.toString(),
			title, 
			subtitle, 
			description, 
			imageUrl, 
			address, 
			contactEmail: email
		}
		
		meetups = [...meetups, newMeetup]
	}
	

	// Reactivity
	$: console.log('welcome!')
</script>

<svelte:head>
	<title>{mainTitle}</title>
</svelte:head>

<Header title={mainTitle} />

<main>
	<form on:submit|preventDefault={addMeetup}>
		<TextInput type="text" on:input={event => (title = event.target.value)} label="Title" id={title} />
		<TextInput type="text" on:input={event => (subtitle = event.target.value)} label="Subtitle" id={subtitle} />
		<TextInput type="text" on:input={event => (address = event.target.value)} label="Address" id={address} />
		<TextInput type="text" on:input={event => (imageUrl = event.target.value)} label="Image path" id={imageUrl} />
		<TextInput type="text" on:input={event => (description = event.target.value)} label="Description" id={description} controlType="textarea" />
		<TextInput type="email" on:input={event => (email = event.target.value)} label="Email" id={email} />
		<button type="submit" >Send</button>

	</form>
	<MeetupGrid {meetups} />
</main>

<style>
	main {
		padding: 3em;
		/* max-width: 240px; */
		margin: 3 auto;
	}

	form {
		margin-top: 3em;
	}
	
</style>