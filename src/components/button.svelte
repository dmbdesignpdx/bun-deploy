<script lang="ts">
	export let label: string;
	export let action: () => void;
	export let href: string | undefined = undefined;
</script>

<svelte:options immutable={true} />


<svelte:element 
	this={href ? 'a' : 'button'} 
	class="Button" 
	type={href ? undefined : 'button'}
	href={href}
	on:click|preventDefault={action}
>
	<span>{label}</span>
</svelte:element>


<style type="scss">
	button {
		min-inline-size: 2.75rem;
		min-block-size: 2.75rem;
		border-radius: 999px;

		&:hover,
		&:focus-visible {
			background: lightcoral;
		}

		&:active {
			background: red;
		}
	}
</style>
