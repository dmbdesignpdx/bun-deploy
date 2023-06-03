<script lang="ts">
	export let data;
	
	const greet = 'bonjour';
</script>


<h1>Welcome to SvelteKit- About</h1>
<p>{greet} {data.title}</p>
<nav>
	<a href="/">Home</a>
</nav>
