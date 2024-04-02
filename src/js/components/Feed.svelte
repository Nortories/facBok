<script>
  import { posts, isAuthenticated } from "../store.js";
  import { fetchPosts } from "../postRendering.mjs";
  import { onMount } from "svelte";
  import Post from "./Post.svelte";

  onMount(async () => {
    if ($isAuthenticated) {
      await fetchPosts(type);
    }
  });
</script>

<div class="feed-container">

  {#if $isAuthenticated}
    <!-- ↑↑↑↑↑↑ only show posts if logged in -->
    
    <!-- <div class="feed-overlay"></div> -->
    {#each $posts as post}
      <Post {post}></Post>
      <div class="post-footer" id="post-footer-button">
        <button>Like</button>
        <button>Comment</button>
      </div>
    {/each}
  {/if}
</div>

<style>

  #post-footer-button {
    display: flexbox;
    grid-column: 2;
    width: 75%;
    justify-content: space-between;
    padding: 0.5em 0em 0em 0em;
    margin-left: 2em;
  }

  button {
    padding: 0.5rem 1rem;
    margin-bottom: 0.5em;
    margin-left: 3em;
    width: 10em;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }



  /* your existing styles for post-header, post-content, post-footer, etc. */
</style>
