<script>

    import { onMount } from 'svelte';
    import supabase from "$lib/db"

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

    let password, email, firstName, lastName;
    
    async function signUp(){
        const { user, session, error } = await supabase.auth.signUp({
            email,
            password
        })
    }

</script>

<div class="row">
    <div class="col"></div>
    <div class="col-12 col-lg-6">
        <div class="card darkgrey text-white">
        <div class="card-body m-4">
            <h1 class="mb-5">Register</h1>
            <form class="needs-validation" novalidate on:submit|preventDefault={signUp}>
                <div class="form-group d-block">
                    <input bind:value={firstName} type="text" minlength="1" class="form-control py-3" placeholder="First Name" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please fill out this field.
                    </div>
                </div>
                <div class="form-group d-block">
                    <input bind:value={lastName} type="text" minlength="1" class="form-control py-3" placeholder="Last Name" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please fill out this field.
                    </div>
                </div>
                <div class="form-group d-block">
                    <input bind:value={email} type="email" class="form-control py-3" placeholder="Email" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please enter a valid email adress.
                    </div>
                </div>
                <div class="form-group d-block">
                    <input bind:value={password} type="password" minlength="6" class="form-control py-3" placeholder="Password" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please enter a valid password. It needs to be at least 6 characters long!
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-blue">Register</button>
                </div>
                <div class="mx-auto w-25 text-center">
                    <a href="/">Go back to Log-In</a>
                </div>
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