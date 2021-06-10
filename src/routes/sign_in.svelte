<script>
    
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzA1OTI4NSwiZXhwIjoxOTM4NjM1Mjg1fQ.9OiUIjKysUqWz_Y2IToCtMz6Wim2PdM1kq0HalmGsec'
    const SUPABASE_URL = "https://zyujhjqnioinakawkpfu.supabase.co"

    import { Auth, Typography, Button , Input} from '@supabase/ui'
    import { createClient } from '@supabase/supabase-js'

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    let password = '';
    let email = '';
    
    
    
    
    async function signUp(){
        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })
        console.log(user,error)
        password = '';
        email = '';
    }

</script>


<input bind:value={email} placeholder="Gebe hier deine Email ein">
<input bind:value={password} placeholder="Gehe hier dein Passwort ein">

<button on:click={signUp}>Signup</button>


