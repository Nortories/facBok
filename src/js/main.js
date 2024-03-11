import { loadHeaderFooter } from "./utils.mjs";
import Feed from "./components/Feed.svelte";

// Load the main header and footer
loadHeaderFooter();

// Load the feed component
new Feed({
  target: document.querySelector("#main-content"),
});
