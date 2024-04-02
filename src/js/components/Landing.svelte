<!-- FILEPATH: /c:/Users/sooae/Documents/Github Repos/facBok/src/js/components/landing.svelte -->
<script>
  import { isAuthenticated } from "../store";
</script>

{#if $isAuthenticated === false}
  <div class="container">
    <h1 class="title">Welcome to FacBok!</h1>
    <p class="description">
      An original social media platform unlike any other, and in no way
      affiliated or inspired by any other social media platform.
    </p>
    <p class="description">
      Formally known as FaceBok. However, to advoid any copyright infringement
      and due to my dyslexia.
    </p>
    <p class="description">We have rebranded to our fresh new name: FacBok.</p>
    <p class="description">Please log in above to continue.</p>
  </div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .description {
    font-size: 16px;
    margin-bottom: 24px;
  }

  .login-button {
    padding: 12px 24px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
