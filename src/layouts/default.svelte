<script>
	import '../styles/theme.css';
	import '../styles/global.css';
</script>


<slot name="header" />
<slot name="nav" />
<main data-grid>
	<slot />
</main>
<slot name="footer" />
