<script>
export let title
</script>

<header>
  <h1>Welcome to {title.toUpperCase()}.</h1>
</header>

<style>

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
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
}

h1 {
	color: white;
	font-family: 'Roboto Slab', sans-serif;
	/* text-transform: uppercase; */
	font-variant: small-caps;
	/* font-size: 4em; */
	font-weight: 300;
	margin: 0;
}
</style>