<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: auto;
		margin: 0 7rem;
		box-sizing: border-box;
	}

	@media (max-width: 991.98px) { 
		main {
			margin: 0;
		}
	}
	
</style>
