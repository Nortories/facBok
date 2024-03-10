<script>
	import { formDataToJSON } from '../utils.mjs';
	import { login } from '../auth.mjs';

	let username = '';
	let password = '';

	async function submit() {
		// Handle form submission here
		console.log('Username:', username);
		console.log('Password:', password);

		const cred = formDataToJSON(this);
		cred.email = username;
		cred.password = password;

		console.log('cred:', cred);

		await login(cred);
	}
</script>

<main>
	<h1>Login Form</h1>
	<form on:submit|preventDefault={submit}>
		<label for="username">Username:</label>
		<input type="text" id="username" bind:value={username} />

		<label for="password">Password:</label>
		<input type="password" id="password" bind:value={password} />

		<button type="submit">Login</button>
		<button type="button" on:click={() => (window.location.href = '/signup/index.html')}>
			Sign Up
		</button>
	</form>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label {
		font-weight: bold;
	}

	input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 0.5rem 1rem;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}

	/* Mobile view */
	@media (max-width: 600px) {
		main {
			padding: 1rem;
		}

		form {
			width: 100%;
		}

		input {
			width: 100%;
		}

		button {
			width: 100%;
		}
	}

	/* Desktop view */
	@media (min-width: 601px) {
		main {
			padding: 2rem;
		}

		form {
			width: 400px;
			margin: 0 auto;
		}
	}
</style>
