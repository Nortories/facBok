<script>
  import { onMount } from "svelte";
  import {user} from "../store.js";

  let users;
  let error = false;
  export let post;

  onMount(async () => {
    // await getPostAuthor(post.user_id)
  });

  function formatDate(date) {
    let month;
    switch (date.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }

    let displayHours;
    const twentyfourHours = date.getHours();

    if (twentyfourHours == 0) {
      displayHours = 12;
    } else if (twentyfourHours > 12) {
      displayHours = twentyfourHours - 12;
    } else {
      displayHours = twentyfourHours;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let timeSuffix;
    if (twentyfourHours < 12) {
      timeSuffix = "am";
    } else {
      timeSuffix = "pm";
    }

    return `${month} ${date.getDate()}, ${date.getFullYear()}, ${displayHours}:${minutes}${timeSuffix}`;
  }

  //   async function getPostAuthor(userId) {
  //   try {
  //     let response = await fetch(`https://facebok-2q7r.onrender.com/users/${userId}`);
  //     user = await response.json();
  //     if (user.error) {
  //       throw new Error("User not found");
  //     }
  //     console.log(user);
  //   } catch(e) {
  //     console.log(`An error occured: ${e}`);
  //     error = true;
  //   }
  // }
  async function getUserInfo(userId) {
      try {
        const url = `https://facebok-2q7r.onrender.com/user/${userId}`

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error (`Failed to loading`)
        }
        const userDetails = await response.json();
        return userDetails
      }
      catch (error) {
        console.error("There is error")
        return null
      }
    }

    let userId = $user.sub;

    onMount(() => {
    users = getUserInfo(userId)
    
  });

 
</script>

<div class="post-container">
  <div class="post-header">
    {#if !error}
      <h3>{post?.user_id}</h3>
    {:else}
      <h3>Unknown User</h3>
    {/if}
    <p>{formatDate(new Date(post.createdAt))}</p>
  </div>
  <div class="post-content">
    <p>{post.content}</p>
  </div>
</div>

<style>
  .post-container {
    grid-column: span 6;
    border: 3px solid #0056b3;
    border-radius: 15px;
    padding: 1.5em;
    margin-bottom: 2em 0;
    background-color: rgba(136, 132, 132, 0.5);
  }

  .post-container:hover {
    background-color: rgba(136, 132, 132, 0.7);
  }

  .post-container p {
    margin: 0.5em 0em 0em 0em;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5em;
  }

  .post-content {
    background-color: seashell;
    border-radius: 7px;
    padding: 1em;
    margin-top: 0.5em;
  }

  /* @media (min-width: 708px) {
    .post-container {
      width: 90%; 
    }
  } */
</style>
