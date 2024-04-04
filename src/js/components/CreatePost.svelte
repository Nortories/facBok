<script>
  import { isAuthenticated, user } from "../store.js";

  async function createPost() {
    const newPostContent = document.getElementById("new-post-content").value;
    console.log(newPostContent);
    const post = {
      user_id: user.id || "any",
      group_id: "any",
      content: newPostContent,
      likes: "any",
      comments: "any",
    };
    try {
      const response = await fetch("https://facebok-2q7r.onrender.com/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
        // Group created successfully
        console.log("Post created!");
        newPostContent.value = "";
      } else {
        // Error creating group
        console.log("Post failed!");
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
</script>

{#if $isAuthenticated}
  <!-- ↑↑↑↑↑↑ only show posts if logged in -->
  <form id="new-post" on:submit|preventDefault={createPost}>
    <label for="new-post-content"><b>So what's up?</b></label>
    <textarea name="new-post-content" id="new-post-content" required></textarea>
    <button type="submit" class="new-post-btn">Create Post</button>
  </form>
{/if}

<style>
  #new-post {
    border: 3px solid #0056b3;
    border-radius: 15px;
    margin-top: 1.5em;
    padding: 1.5em;
    background-color: rgba(136, 132, 132, 0.5);
  }

  #new-post label {
    display: block;
    font-size: 2em;
  }

  #new-post-content {
    border: 1px solid black;
    border-radius: 15px;
    padding: 0.5em;
    margin: 1em auto;
    width: 100%;
  }
  .new-post-btn {
    padding: 1rem 1rem;
    margin-left: 2em;
    width: 10em;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .new-post-btn:hover {
    background-color: #0056b3;
  }
</style>
