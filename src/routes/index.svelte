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
	<div class="col-md col-12 mr-5 px-3">
		<img class="mx-auto d-block w-50" src="/logo.svg" alt="Logo"/>
		<h1 class="mb-3">Welcome to the awesome To-Do List</h1>
		<p class="text-center">Keep track of the things you need to do with this awesome to do list.<br/>It features priotity, due date, and a short description of the task for each entry.</p>
	</div>
    <div class="col-md col-12 mx-4">
		<div class="card darkgrey text-white h-100">
		<div class="card-body">
        	<h1 class="mb-5">Log-In</h1>
            <form>
                <div class="form-group">
                    <input bind:value={email} type="text" class="form-control lightgrey" placeholder="Email">
                </div>
                <div class="form-group">
                    <input bind:value={password} type="text" class="form-control lightgrey" placeholder="Password">
                </div>
                <div class="form-group">
                    <button class="btn" on:click={signIn}>Log In</button>
                </div>
                <div class="mx-auto" style="width: 211px;">
                    <a href="/sign_up" class="ForgetPwd">No account yet? Sign Up here</a>
                </div>
            </form>
		</div>
		</div>
    </div>
</div>

<style>

	img {height: 14em;}
	.form-group{
        display: block;
        margin: 1.8rem auto 0 auto;
        width: 60%;
    }

	.card-body{
        padding: 8% 0;
    }

</style>
