<script>
	export let name;
	export let mainTitle;
	$: console.log('welcome!')
</script>

<svelte:head>
	<title>{mainTitle}</title>
</svelte:head>

<main>
	<header>
		<h1>Welcome to {mainTitle.toUpperCase()}.</h1>
	</header>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		height: 4em;
		background: #cf0056;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 2px 6px rgba(0,0,0,0.26);
	}

	/* section {
		position: absolute; 
		top: 0;

	} */

	h1 {
		/* color: #ff3e00; */
		/* text-transform: uppercase; */
		font-variant: small-caps;
		/* font-size: 4em; */
		font-weight: 300;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>