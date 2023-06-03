<script lang="ts">
	export let text: string;
	export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	export let styledAs: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | null = null;

	const _styledAs = styledAs || `h${level}`;
</script>

<svelte:options immutable={true} />


<svelte:element 
	this={`h${level}`}
	class={_styledAs}
>
	{text}
</svelte:element>


<style type="scss">
	.h1 {
		color: red;
		font-size: 3rem;
	}

	.h2 {
		color: blue;
		font-size: 2.5rem;
	}

	.h3 {
		color: green;
		font-size: 2rem;
	}

	.h4 {
		color: black;
		font-size: 1.6rem;
	}
</style>
