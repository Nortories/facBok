import { loadHeaderFooter } from "./utils.mjs";
import CreatePost from "./components/CreatePost.svelte"
import PostNavbar from "./components/PostNavbar.svelte";
import Feed from "./components/Feed.svelte";
import Landing from "./components/Landing.svelte";
import GroupList from "./components/GroupList.svelte"

// Load the main header and footer
loadHeaderFooter();

new CreatePost({
  target: document.querySelector("#new-post")
})
// Load post navbar
new PostNavbar({
  target: document.querySelector("#post-navbar")
})

new Landing({
  target: document.querySelector("#main-content"),
});
// Load the feed component
new Feed({
  target: document.querySelector("#main-content"),
});
// groups
new GroupList({
  target: document.querySelector("#groups"),
});
