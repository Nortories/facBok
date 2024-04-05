<script>
import { isAuthenticated } from "../store.js";
</script>


{#if $isAuthenticated}
    <!-- ↑↑↑↑↑↑ only show posts if logged in -->
    <form id="new-post" action="" method="post">
        <label for="new-post-content"><b>So what's up?</b></label>
        <textarea name="new-post-content" id="new-post-content" required></textarea>
        <input type="submit" class="new-post-btn" value="Create New Post">
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