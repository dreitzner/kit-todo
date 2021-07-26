<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
    
    import supabase from "$lib/db"
    import { onMount } from 'svelte';

    let email, password, error
    
    async function signIn(){
        const { user, session, error:er } = await supabase.auth.signIn({
            email,
            password,
        })
        if(er) error = 'Invalid credentials!';
    }

    onMount(async () => {
        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    });

</script>


<div class="row">
	<div class="col-lg col-12 mr-5 my-5 px-3 small">
		<img class="mx-auto d-block w-50" src="/logo.svg" alt="Logo"/>
		<h1 class="mb-3">Welcome to the awesome To&nbsp;Do&nbsp;List</h1>
		<p class="text-center px-5">Keep track of the things you need to do with this awesome to do list. It features priotity, due date, and a short description of the task for each entry.</p>
	</div>
    <div class="col-lg col-12 mx-4 small">
		<div class="card darkgrey text-white h-100">
		<div class="card-body">
        	<h1 class="mb-5">Log-In</h1>
            <form class="needs-validation" novalidate on:submit|preventDefault={signIn}>
                {#if error}
                    <div class="form-group d-block text-center">
                        <div class="text-danger">{error}</div>
                    </div>
                {/if}
                <div class="form-group d-block">
                    <input bind:value={email} type="email" class="form-control py-3" placeholder="Email" required>
                    <div class="invalid-feedback">
                        Please enter your email adress.
                    </div>
                </div>
                <div class="form-group d-block">
                    <input bind:value={password} type="password" class="form-control py-3" placeholder="Password" required>
                    <div class="invalid-feedback">
                        Please enter your password.
                    </div>
                </div>
                <div class="form-group d-block">
                    <button class="btn btn-blue" type="submit">Sign In</button>
                </div>
                <div class="mx-auto w-50 text-center">
                    <a href="/sign_up">You haven't made an account yet? Sign Up here</a>
                </div>
            </form>
		</div>
		</div>
    </div>
</div>

<style>

	img {height: 13em;}
	.form-group{
        margin: 1.8rem auto 0 auto;
        width: 60%;
    }

	.card-body{
        padding: 8% 0;
    }

	@media (max-width: 991.98px) { 
		.small {
			margin: 5% 0 !important;
		}
		.card{
        	margin: 0 5%;
    	}
	}

</style>
