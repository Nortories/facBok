import { loadHeaderFooter } from "./utils.mjs";
import Feed from "./components/Feed.svelte";
import Landing from "./components/Landing.svelte";

// Load the main header and footer
loadHeaderFooter();
new Landing({
  target: document.querySelector("#main-content"),
});
// Load the feed component
new Feed({
  target: document.querySelector("#main-content"),
});
