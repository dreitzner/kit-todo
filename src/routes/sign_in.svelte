<script>
    
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzQ3MzYxMSwiZXhwIjoxOTQzMDQ5NjExfQ.VEXMVTldebz2i25StokNcigi8tsXWXeaBGpFWMCWTl4'
    const SUPABASE_URL = "https://eqjwumcxvxkwonxaennv.supabase.co"

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


<div class="container login-container text-white">
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
                    <button class="btn" on:click={signIn}>Einloggen</button>
                </div>
                <div class="form-group">
                    <a href="/sign_up" class="ForgetPwd">Sie sind noch nicht registriert?</a>
                </div>
            </form>
        </div>
    </div>
</div>


