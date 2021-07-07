<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
    
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzA1OTI4NSwiZXhwIjoxOTM4NjM1Mjg1fQ.9OiUIjKysUqWz_Y2IToCtMz6Wim2PdM1kq0HalmGsec'
    const SUPABASE_URL = "https://zyujhjqnioinakawkpfu.supabase.co"

    import { createClient } from '@supabase/supabase-js'

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    let email = '';
    let password = '';
    
    async function signIn(){
        const { user, session, error } = await supabase.auth.signIn({
            email: email,
            password: password,
        }) 
    }
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
            <form>
                <div class="form-group d-block">
                    <input bind:value={email} type="text" class="form-control lightgrey py-3" placeholder="Email">
                </div>
                <div class="form-group d-block">
                    <input bind:value={password} type="text" class="form-control lightgrey py-3" placeholder="Password">
                </div>
                <div class="form-group d-block">
                    <button class="btn" on:click={signIn}>Log In</button>
                </div>
                <div class="mx-auto d-block w-50">
                    <a href="/sign_up" class="ForgetPwd text-center">No account yet? Sign Up here</a>
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
