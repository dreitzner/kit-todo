<script lang="ts">
	import supabase from "$lib/db"

	async function signOut(){
		const {error} = await supabase.auth.signOut()
	}

	let uid = sessionStorage.getItem('uid');
	$: username = "User";
	getUser();

	async function getUser() {
		const { data, error } = await supabase
		.from('userData')
		.select('firstName, lastName')
		.eq('id', uid)
		username = data[0].firstName + " " + data[0].lastName;
	}
</script>

<header class="darkblue">
	<nav>
		<div class="nav d-flex text-white my-2 mx-4">
			<div class="nav-item mr-auto mr-md-0">
				<img class="nav-item" src="/logo.svg" alt="Logo"/>
			</div>
			<h2 class="nav-item ml-3 mr-auto align-self-center visibleLg">My To-Do-List</h2>
			<h2 class="nav-item ml-3 align-self-center visibleLg">Servus {username}</h2>
			<a class="nav item ml-3 nav-link align-self-center" href="/" on:click={signOut}>Log-Out</a>
		</div>
	</nav>
</header>

<style>
	img {height: 3em;}
	.nav-link{ font-size: 13pt;}

	@media (max-width: 767px) { 
		.visibleLg {
			display: none;
		}
	}

</style>