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


<div class="container login-container">
    <div class="row">
        <div class="col-md-6 login-form">
            <h3>Login</h3>
            <form>
                <div class="form-group">
                    <input bind:value={email} type="text" class="form-control" placeholder="Gebe hier deine Email ein">
                </div>
                <div class="form-group">
                    <input bind:value={password} type="text" class="form-control" placeholder="Gebe hier dein Passwort ein">
                </div>
                <div class="form-group">
                    <button on:click={signIn}>Einloggen</button>
                </div>
                <div class="form-group">
                    <a href="/sign_up" class="ForgetPwd">Sie sind noch nicht registriert?</a>
                </div>
            </form>
        </div>
    </div>
</div>


