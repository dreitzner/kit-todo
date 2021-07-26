<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { session } from '$app/stores'
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'
	import supabase from "$lib/db"

	let showHeader;

  	onMount(() => {
    	showHeader = window.location.pathname;
  	})

	if(browser) {
		$session = supabase.auth.session();
		setTimeout( () => $session ? goto('/to-do') : goto('/'));
		supabase.auth.onAuthStateChange((event, sesh) => {
			$session = sesh;
			setTimeout( () => $session ? goToToDo() : goToToSignIn());
		})
	}

	function goToToDo() {
		goto('/to-do');
		showHeader = '/to-do';
	}

	function goToToSignIn() {
		goto('/');
		showHeader = '/';
	}


</script>

{#if showHeader == '/to-do'}
<Header />
{/if}

<main>
	<slot />
	<div>{JSON.stringify($session, null, 2)}</div>
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
