<!--src/lib/Login.svelte-->
<!--<script>-->
<!--    import { onMount } from 'svelte';-->
<!--    import PocketBase from 'pocketbase';-->
<!--    import {isLoggedIn, isSigningUp} from './store.js';  -->
<!--    let pocketbase;-->
<!--    let username = '';-->
<!--    let password = '';-->
<!--    let loginError = false;  // Add this line-->

<!--    onMount(async () => {-->
<!--        pocketbase = new PocketBase('http://localhost:8090');-->
<!--    });-->

<!--    const login = async () => {-->
<!--        try {-->
<!--            const authData = await pocketbase.admins.authWithPassword(username, password);-->

<!--            if (authData) {-->
<!--                // "logout" the last authenticated account-->
<!--                pocketbase.authStore.clear();-->
<!--                isLoggedIn.set(true);  // Set isLoggedIn to true-->
<!--                loginError = false;  // Reset login error-->
<!--            } else {-->
<!--                loginError = true;  // Set login error to true if login is invalid-->
<!--            }-->

<!--            console.log(authData);-->
<!--        } catch (error) {-->
<!--            console.error(error);-->
<!--            loginError = true;  // Set login error to true if there's an error-->
<!--        }-->
<!--    };-->

<!--    const signup = () => {-->
<!--        isSigningUp.set(true);  // Set isSigningUp to true when the signup button is clicked-->
<!--    };-->
<!--</script>-->


<!--<div class="login-form">-->
<!--    &lt;!&ndash;    <h2 class="login-msg">Login</h2>&ndash;&gt;-->
<!--    <input class="input-field" bind:value={username} placeholder="Username" />-->
<!--    <input class="input-field" bind:value={password} placeholder="Password" type="password" />-->
<!--    <button class="login-btn" on:click={login}>Login</button>-->
<!--    <button class="signup-btn" on:click={signup}>Signup</button>-->
<!--    {#if loginError}-->
<!--        <p class="error-message">Invalid username or password. Please try again.</p>-->
<!--    {/if}-->
<!--</div>-->

<!--<style>-->
<!--    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');-->
<!--    .login-msg{-->
<!--        color:black;-->
<!--    }-->
<!--    .login-form {-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        background-color: #F3F3F3;-->
<!--        width: 300px;-->
<!--        margin: 0 auto;-->
<!--        padding: 1rem;-->
<!--        border: 1px solid #ccc;-->
<!--        border-radius: 4px;-->
<!--        font-family: 'Roboto', sans-serif;-->
<!--    }-->

<!--    .input-field {-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        background-color: #FFFFFF;-->
<!--        margin: 0.5rem;-->
<!--        color: #333;-->
<!--        font-size: 14px;-->
<!--        padding: 0.5rem;-->
<!--        border: 1px solid #ccc;-->
<!--        border-radius: 4px;-->
<!--    }-->

<!--    .login-form button {-->
<!--        margin-top: 1rem;-->
<!--        padding: 0.5rem;-->
<!--        font-size: 14px;-->
<!--        font-weight: 500;-->
<!--        border-radius: 4px;-->
<!--        transition: all 0.2s ease-in-out;-->
<!--    }-->

<!--    .login-btn {-->
<!--        background-color: #3498DB;-->
<!--        color: #FFFFFF;-->
<!--        border: none;-->
<!--    }-->

<!--    .signup-btn {-->
<!--        background-color: transparent;-->
<!--        color: #333;-->
<!--        border: 1px solid #ccc;-->
<!--    }-->

<!--    .login-btn:hover,-->
<!--    .signup-btn:hover {-->
<!--        cursor: pointer;-->
<!--        opacity: 0.8;-->
<!--    }-->

<!--    .input-field:focus {-->
<!--        outline: none;-->
<!--        border-color: #3498DB;-->
<!--    }-->

<!--    .error-message {-->
<!--        color: red;-->
<!--        margin-top: 1rem;-->
<!--        font-size: 12px;-->
<!--    }-->
<!--</style>-->

