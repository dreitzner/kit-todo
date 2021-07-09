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
    <div class="col-12 col-lg-6">
        <div class="card darkgrey text-white">
        <div class="card-body m-4">
            <h1 class="mb-5">Register</h1>
            <form>
            <div class="form-group d-block">
                <input bind:value={firstName} type="text" minlength="1" class="form-control lightgrey py-3" placeholder="First Name" required>
            </div>
            <div class="form-group d-block">
                <input bind:value={lastName} type="text" minlength="1" class="form-control lightgrey py-3" placeholder="Last Name" required>
            </div>
            <div class="form-group d-block">
                <input bind:value={email} type="email" class="form-control lightgrey py-3" placeholder="Email" required>
            </div>
            <div class="form-group d-block">
                <input bind:value={password} type="password" minlength="6" class="form-control lightgrey py-3" placeholder="Password" required>
            </div>
            <div>
                <button type="button" class="btn btn-blue" on:click={checkCredentials}>Register</button>
            </div>
            <div class="mx-auto w-25">
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
        margin: 1.3rem auto 0 auto;
        width: 65%;
    }
    @media (max-width: 991.98px) {
        .form-group{
            width: 100%;
            margin: 1.3rem  0;
        }
    }

</style>