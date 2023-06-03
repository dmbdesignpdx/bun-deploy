<script lang="ts">
	import Button from './button.svelte';
	import Heading from './heading.svelte';

	type Image = {
		src: string;
		alt: string;
	}

	export let heading: string;
	export let copy: string;
	export let image: Image | null = null;

	let root: HTMLElement | null = null;
	let count = 0;

	$: count_timesThree = count * 3;

	$: if (root) {
		root.style.borderColor = count > 2 ? 'red' : 'black';
	}

	const increase = () => { count += 1 };

	const decrease = () => { count -= 1 };

	const reset = () => { count = 0 };
</script>


<section bind:this={root} aria-label={heading}>
	{#if image}
		<img src={image.src} alt={image.alt} />
	{/if}
	<Heading 
		text={heading} 
		level={2} 
		styledAs="h4" 
	/>
	<p>{copy}</p>
	<p>Current count is: <output>{count}</output></p>
	<p>Count x 3 = <output>{count_timesThree}</output></p>
	<menu>
		<li><Button label="Increase" action={increase} />
		<li><Button label="Decrease" action={decrease} />
		<li><Button label="Reset" action={reset} />
	</menu>
</section>


<style type="scss">
	section {
		display: inline-flex;
		padding: 1rem;
		border-radius: 0.75rem;
		border: 3px solid;
		flex-flow: column wrap;
		gap: .5rem;
		background: var(--color-background);
	}

	menu {
		display: flex;
		flex-flow: column wrap;
		gap: .5rem;
	}

	p output {
		font-weight: 700;
	}

	section :global(button) {
		inline-size: 100%;
	}

	img {
		inline-size: 100%;
		aspect-ratio: 16/10;
		object-fit: cover;
		border-radius: 0.5rem;
	}
</style>
