<script>
	import Header from './UI/Header.svelte'
	
	// export let name;
	export let mainTitle;
	$: console.log('welcome!')
</script>

<svelte:head>
	<title>{mainTitle}</title>
</svelte:head>

<main>
	<Header title={mainTitle} />
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	

	/* section {
		position: absolute; 
		top: 0;

	} */

	


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>