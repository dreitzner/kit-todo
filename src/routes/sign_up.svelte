<script>
import { session } from '$app/stores';

    
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzA1OTI4NSwiZXhwIjoxOTM4NjM1Mjg1fQ.9OiUIjKysUqWz_Y2IToCtMz6Wim2PdM1kq0HalmGsec'
    const SUPABASE_URL = "https://zyujhjqnioinakawkpfu.supabase.co"

    import { createClient } from '@supabase/supabase-js'
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    let password = '';
    let email = '';
    let firstName = '';
    let lastName = '';
    
    async function signUp(){
        const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })
        console.log('Done')
    }

    async function saveData(){
        const { data, error } = await supabase
        .from('users')
        .insert([{   
            firstName: firstName, 
            lastName: lastName 
        }])
    }

    function checkCredentials(){
        // check name
        if (firstName !== '' && 
            lastName !== '' &&
            email !== '' &&
            password !== '')
        {
            saveData();
            signUp();
        }
    }

</script>

<div class="container login-container">
    <div class="row">
        <div class="col-md-6 login-form">
            <h3>Registrieren</h3>
            <form>
                <div class="form-group">
                    <input bind:value={firstName} type="text" minlength="1" class="form-control" placeholder="Vorname" required>
                </div>
                <div class="form-group">
                    <input bind:value={lastName} type="text" minlength="1" class="form-control" placeholder="Nachname" required>
                </div>
                <div class="form-group">
                    <input bind:value={email} type="email" class="form-control" placeholder="Gebe hier deine Email ein" required>
                </div>
                <div class="form-group">
                    <input bind:value={password} type="password" minlength="6" class="form-control" placeholder="Das Passwort muss mindestens 6 Charakter haben" required>
                </div>
                <div class="form-group">
                    <button on:click={checkCredentials}>Registrieren</button>
                </div>
            </form>
        </div>
    </div>
</div>