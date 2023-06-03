<script lang="ts">
	import Heading from './heading.svelte';

	export let heading: string;
	export let copy: string;
</script>

<svelte:options immutable={true} />


<header data-wrap>
	<Heading text={heading} />
	<p>{copy}</p>
</header>


<style type="scss">
	header {
		display: flex;
		block-size: 33.3vh;
		justify-content: center;
		align-items: center;
		flex-flow: column wrap
	}
</style>
