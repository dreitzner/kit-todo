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

<div class="row">
    <div class="col"></div>
    <div class="col-12 col-sm-6">
        <div class="card darkgrey text-white">
        <div class="card-body">
            <h1 class="mb-5">Register</h1>
            <form>
            <div class="form-group">
                <input bind:value={firstName} type="text" minlength="1" class="form-control lightgrey" placeholder="First Name" required>
            </div>
            <div class="form-group">
                <input bind:value={lastName} type="text" minlength="1" class="form-control lightgrey" placeholder="Last Name" required>
            </div>
            <div class="form-group">
                <input bind:value={email} type="email" class="form-control lightgrey" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input bind:value={password} type="password" minlength="6" class="form-control lightgrey" placeholder="Password" required>
            </div>
            <div>
                <button type="button" class="btn" on:click={checkCredentials}>Register</button>
            </div>
            <div class="mx-auto" style="width: 128px;">
                <a href="/">Go back to Log-In</a>
            </div>
            </form>
        </div>
        </div>
    </div>
    <div class="col"></div>
</div>

<style> 
    .form-group{
        display: block;
        margin: 1.2rem auto 0 auto;
        width: 65%;
    }
    .card-body{
        margin: 5%;
    }
    @media (max-width: 767.98px) {
        .form-group{
            width: 100%;
            margin: 1.2rem  0;
        }
    }

</style>