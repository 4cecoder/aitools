<!-- src/lib/Login.svelte -->

<script>
    import login from "./component/firebase"
    import { onMount } from 'svelte';

    let email = '';
    let password = '';
    let isLoggedIn = false;
    let showCard = false;

    function handleLogin() {
        login(email, password).then(() => {
            isLoggedIn = true;
            showCard = true;
            setTimeout(() => {
                showCard = false;
            }, 2000);
        });

        console.log('Email:', email);
        console.log('Password:', password);
    }

    onMount(() => {
        isLoggedIn = false;
    });
</script>

<!-- src/lib/Login.svelte -->

<style>
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #000;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 10px;
        color: #000;
    }

    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #333;
        background-color: #fff;
    }

    @-moz-document url-prefix() {
        input[type="email"],
        input[type="password"],
        h2,
        label {
            -moz-appearance: none !important;
            color: #000 !important;
        }
    }

    button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

    .card {
        margin-top: 20px;
        padding: 10px;
        background-color: #4CAF50;
        color: #fff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card-loading-bar {
        width: 100px;
        height: 8px;
        background-color: #fff;
        border-radius: 4px;
        margin-left: 10px;
        animation: loading 1s infinite ease-in-out;
    }

    @keyframes loading {
        0% {
            width: 0;
        }
        50% {
            width: 50px;
        }
        100% {
            width: 100px;
        }
    }
</style>


<div class="container">
    <h2>Login</h2>
    {#if isLoggedIn}
        {#if showCard}
            <div class="card">
                <div>Login successful!</div>
                <div class="card-loading-bar"></div>
            </div>
        {:else}
            <!-- Show logged in content -->
            <div>You are logged in!</div>
        {/if}
    {:else}
        <form on:submit|preventDefault={handleLogin}>
            <label>
                Email:
                <input type="email" bind:value={email} />
            </label>
            <label>
                Password:
                <input type="password" bind:value={password} />
            </label>
            <button type="submit">Log In</button>
        </form>
    {/if}
</div>
