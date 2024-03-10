import { loadHeaderFooter } from "./utils.mjs";
import SignUp from "./components/SignUp.svelte";

loadHeaderFooter();
new SignUp({
  target: document.querySelector(".signUP-form"),
});
