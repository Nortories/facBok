<script>
  import { isAuthenticated, user } from "../store.js";
  import { fetchGroups } from "../groupJoin.mjs";

  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let groups = []; // Array to hold the list of groups
  //export let selectedGroup = writable(null); // Store to hold the selected group // When my store is used at multiple files
  let selectedGroup = "";
  let errorMessage = "";

  let newData = {
    user_id: $user.sub,
    content: "",  // Initialize content as empty string
  };

  // Function to fetch group data from the backend
  async function fetchGroupsData() {
    try {
      const response = await fetch('https://facebok-2q7r.onrender.com/groups/');
      groups = await response.json();
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  }

  // Call fetchGroupsData when the component mounts
  onMount(fetchGroupsData);

  // Function to handle the POST request
  async function postData() {
    try {
      // Check if a group is selected
      if (!selectedGroup) {
        errorMessage = "Please select a group before posting";
        console.error("This is your error")
        return;
      }
      
      newData.groupId = selectedGroup;
      const token = localStorage.getItem('token');

      const response = await fetch('https://facebok-2q7r.onrender.com/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

          // Add authorization headers if required by your backend
        },
        body: JSON.stringify(
          // groupId,
          // data: newData,
          newData
        )
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      console.log('Data posted successfully');
      // Reset post content after successful submission
      newData.content = "";
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

{#if $isAuthenticated}
  {JSON.stringify($user)}
  <form on:submit|preventDefault={postData} id="new-post" action="" method="post">
    <label for="new-post-content"><b>So what's up?</b></label>
    <textarea name="new-post-content" id="newpostcontent" bind:value={newData.content} required></textarea>
    <button type="submit" class="new-post-btn" value="Create New Post">Create New Post</button>
    <h1>Select the Group</h1>
    <select bind:value={selectedGroup}>
      {#each groups as group}
        <option value={group._id}>{group.name}</option>
      {/each}
    </select>
    <p style="color: red;">{errorMessage}</p>
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

  select:invalid + p {
  color: red;
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