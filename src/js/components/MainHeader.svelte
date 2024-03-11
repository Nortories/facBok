<script>
  import { getParam } from "../utils.mjs";
</script>

<div class="container">
  <div class="logo">
    <a href="/index.html"> Fac<span class="highlight">Bok</span></a>
  </div>
  <button
    on:click={() => {
      window.location.href = "/login.html";
    }}>Login</button
  >
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
</style>
