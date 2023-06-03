<script lang="ts">
	import Default from '$default';
	import Card from '$comp/card.svelte';
	import Hero from '$comp/hero.svelte';

	export let data;

	const { content, meta } = data;
	const year = new Date().getFullYear();
</script>


<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
</svelte:head>


<Default>
	<Hero 
		heading={meta.title}
		copy={meta.description}
		slot="header"
	/>

	<nav slot="nav">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>

	<footer slot="footer">
		<p>&copy; {year}</p>
	</footer>


	{#each content as section (section.id)}
		<section>
			<h2>{section.heading}</h2>
				{#each section.cards as card (card.id)}
					<Card 
						heading={card.heading}
						copy={card.copy}
						image={card.image}
					/>
				{/each}
		</section>
	{/each}
</Default>
