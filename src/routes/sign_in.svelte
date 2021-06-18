<script lang="ts">
    import { supabase } from '$lib/Services/supabase';
    import { auth, users } from '$lib/Services/supabase';
    import { session } from '$app/stores';

	let email = '';
    let password = '';
    let authentication;
    let authenticatedUser;
    
    async function signIn(){
        const { user, session, error } = await supabase.auth.signIn({
            email: email,
            password: password
        })
        
        if (authenticatedUser !== undefined) window.location.href='/about'
    }

    function dumbSignIn(){
        authentication = $auth;
        authenticatedUser = $users;
        signIn();
    }
    
</script>

<div class="container login-container">
    <div class="row">
        <div class="col-md-6 login-form">
            <h3>Login</h3>
            <form>
                <div class="form-group">
                    <input bind:value={email} type="email" class="form-control" placeholder="Gebe hier deine Email ein">
                </div>
                <div class="form-group">
                    <input bind:value={password} type="password" class="form-control" placeholder="Gebe hier dein Passwort ein">
                </div>
                <div class="form-group">
                    <button on:click={dumbSignIn}>Einloggen</button>
                </div>
                <div class="form-group">
                    <a href="/sign_up" class="ForgetPwd">Sie sind noch nicht registriert?</a>
                </div>
            </form>
        </div>
    </div>
</div>


