<script>
  import { isAuthenticated, user } from "../store.js";
  import { fetchGroups } from "../groupJoin.mjs";

  

  import { onMount } from 'svelte';
  import { writable } from 'svelte/store'; // Importing writable store for managing selected group

  let groups = []; // Array to hold the list of groups
  let selectedGroup = writable(null); // Store to hold the selected group

  let newData = {
    "user_id": $user.sub,
    "content": null,
    "likes": null,
    "comments": null
  };

  // Fetch the list of groups from the backend
  // async function fetchGroups() {
  //   try {
  //     const response = await fetch('https://facebok-2q7r.onrender.com/group/');
  //     groups = await response.json();
  //   } catch (error) {
  //     console.error('Error fetching groups:', error);
  //   }
  // }

  // Call fetchGroups when the component mounts to populate the dropdown
//    async function getMygroup() {
//     try {
//         const token = localStorage.getItem('token');
//         const userId = $user.sub
//         const options = {
//             method: 'GET',
//             headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//             },
            
//         }
//         const response = await fetch(`https://facebok-2q7r.onrender.com/users/${userId}`, options);
//         console.log(response);
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//     }
// }

// function handler() {
//         const button = e.target;
//         handler(button.dataset.id, $user.sub);
//     }

//   // onMount(fetchGroups);
//   onMount(async ()=>{
//     await getMygroup()
//   });

  // Function to handle the POST request
  async function postData() {
    try {
      // Get the selected group ID from the store
      const groupId = $selectedGroup;

      const response = await fetch('https://facebok-2q7r.onrender.com/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          groupId: groupId,
          data: newData,
         

        })
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      console.log('Data posted successfully');
      // Optionally reset form fields
      newData = {
        name: '',
        email: ''
      };
    } catch (error) {
      console.error('Error:', error);
    }
  }



</script>


{#if $isAuthenticated}
    <!-- ↑↑↑↑↑↑ only show posts if logged in -->
    {JSON.stringify($user)}
    <form on:submit|preventDefault={postData} id="new-post" action="" method="post">
        <label for="new-post-content"><b>So what's up?</b></label>
        <textarea name="new-post-content" id="newpostcontent" bind:value={newData.content} required></textarea>
        <button type="submit" class="new-post-btn" value="Create New Post">Creat New Post</button>
        <h1>Select the Group</h1>
  <select bind:value={$selectedGroup}>
    {#each groups as group}
      <option value={group.id}>{group.name}</option>
    {/each}
</select>
    </form>
{/if}



<!-- Input fields for name and email -->
<!-- <label>
  Name:
  <input type="text" bind:value="{newData.name}" />
</label>

<label>
  Email:
  <input type="email" bind:value="{newData.email}" />
</label> -->

<!-- Dropdown menu to select the group -->


<!-- Submit button to trigger the postData function -->
<!-- <button on:click={postData}>Submit</button> -->
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