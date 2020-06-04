<script>
	// Modules
	import Header from './UI/Header.svelte'
	import MeetupItem from './Meetups/MeetupItem.svelte'

	// Variables
	export let mainTitle;
	const meetups = [
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
			description: 'If you seek a backend framework, puthon is made for that, choose Django',
			imageUrl: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/3/formation-django.png',
			address: 'Monty street',
			contactEmail: 'unchained-development@outlook.us'
		}
	]

	// Reactivity
	$: console.log('welcome!')
</script>

<svelte:head>
	<title>{mainTitle}</title>
</svelte:head>

<main>
	<Header title={mainTitle} />

	<section id="meetups">
	{#each meetups as meetup}
		<MeetupItem data={meetup} />
	{/each}
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	

	#meetups {
		margin: 5em;
	}

	


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>