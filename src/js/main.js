import { loadHeaderFooter } from "./utils.mjs";
import CreatePost from "./components/CreatePost.svelte"
import PostNavbar from "./components/PostNavbar.svelte";
import Feed from "./components/Feed.svelte";

// Load the main header and footer
loadHeaderFooter();

new CreatePost({
  target: document.querySelector("#new-post")
})
// Load post navbar
new PostNavbar({
  target: document.querySelector("#post-navbar")
})

// Load the feed component
new Feed({
  target: document.querySelector("#main-content"),
});
