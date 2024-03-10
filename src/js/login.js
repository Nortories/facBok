import { loadHeaderFooter, getParam } from "./utils.mjs";
import LoginForm from "./components/LoginForm.svelte";

loadHeaderFooter();
new LoginForm({
  target: document.querySelector(".login-form"),
});
