<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	let toDo;

  	onMount(() => {
    	toDo = window.location.pathname;
  	})

</script>

{#if toDo == '/to-do'}
<Header />
{/if}

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
		margin: 0 0.6rem;
		box-sizing: border-box;
	}

	@media (max-width: 991.98px) { 
		main {
			margin: 0;
		}
	}
	
</style>
