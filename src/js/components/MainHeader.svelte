<script>
  import { getParam } from "../utils.mjs";
  import { onMount } from "svelte";
  import ProfileButton from "./profileButton.svelte";
  import { isAuthenticated, user, darkMode, popupOpen, newGroupForm } from "../store";
  import auth from "../authService.mjs";

  let auth0Client;

  onMount(async () => {
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });
  
  function login() {
    auth.loginWithPopup(auth0Client);
  }
  async function getuserdata() {
    console.log(await auth0Client.getUser());
    let name = await auth0Client.getUser();
    name = name.name;
    console.log(name);
  }
</script>
{#if $darkMode}
<h1>Dark Mode</h1>
{/if}
<div class="container">
  <div class="logo">
    <a href="/index.html"> Fac<span class="highlight">Bok</span></a>
  </div>
  {#if $isAuthenticated}
    <ProfileButton />
    <!-- Debugging buttonS ↓↓↓ used to check auth0Client.getUser() -->
    <!-- <button on:click={getuserdata}>Get User Data</button> -->
  {:else}
    <button on:click={login}>Login</button>
  {/if}
  <div class="spacing-300"></div>
</div>

<style>
  button {
    margin: 0.75rem 0;
    padding: 0.1rem 2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  .logo {
    line-height: 60px;
    width: 245px;
    overflow: hidden;
    display: flex;
    font-size: 30px;
    text-align: right;
    font-family: var(--font-headline);
  }
  .logo a {
    text-decoration: none;
    color: var(--font-body);
  }

  /* utility classes */
  .highlight {
    color: var(--tertiary-color);
  }
  .spacing-300 {
    margin-left: -300px;
  }
</style>
