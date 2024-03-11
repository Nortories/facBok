<script>
  let firstName = "";
  let lastName = "";
  let username = "";
  let email = "";
  let password = "";

  function handleSubmit() {
    // stub for submitting form
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  }
</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" bind:value={firstName} required />

    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" bind:value={lastName} required />

    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />

    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <button type="submit">Sign Up</button>
  </form>
</main>

<style>
  main {
    padding: 1.5em;

    flex-direction: column;
    align-items: center;

    height: 100vh;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Updated: positioned to the left */
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #dddfe2;
  }

  button {
    padding: 0.75rem 2rem;

    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
  @media (max-width: 600px) {
    main {
      padding: 3em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    form {
      width: 87%;
      align-items: center;
    }
    button {
      padding: 1.5rem 2rem;
    }
  }
</style>
