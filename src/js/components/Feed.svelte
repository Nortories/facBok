<script>
  export let feed = [
    {
      author: "John Doe",
      date: new Date(),
      content: "Hello, world!",
    },
    {
      author: "Jane Smith",
      date: new Date(2024, 0, 3, 0, 4, 0), //This date just makes sure that it's formatted correctly for midnight.
      content: "Blah blah blah",
    },
    {
      author: "Bob Johnson",
      date: new Date(),
      content: "Check out this cool post!",
    },
  ];

  function formatDate(date) {
    // Function to format the date
    // Implement your own logic here

    let month;
    switch(date.getMonth()) {
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
    }
    else if (twentyfourHours > 12) {
      displayHours = twentyfourHours - 12;
    }
    else {
      displayHours = twentyfourHours;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let timeSuffix;
    if (twentyfourHours < 12) {
      timeSuffix = "am";
    }
    else {
      timeSuffix = "pm";
    }

    return `${month} ${date.getDate()}, ${date.getFullYear()}, ${displayHours}:${minutes}${timeSuffix}`;
  }
</script>

<div class="feed-container">
  <form id="new-post" action="" method="post">
    <label for="new-post-content"><b>So what's up?</b></label>
    <textarea name="new-post-content" id="new-post-content" required></textarea>
    <input type="submit" class="new-post-btn" value="Create New Post">
  </form>
  <!-- <div class="feed-overlay"></div> -->
  {#each feed as post}
    <div class="post-container">
      <div class="post-header">
        <h3>{post.author}</h3>
        <p>{formatDate(post.date)}</p>
      </div>
      <div class="post-content">
        <p>{post.content}</p>
      </div>
    </div>
    <div class="post-footer" id="post-footer-button">
      <button>Like</button>
      <button>Comment</button>
    </div>
  {/each}
</div>

<style>
  .feed-container {
    height: 100vh;
  }

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

  .post-container {
    grid-column: span 6;
    border: 5px solid #0056b3;
    border-radius: 15px;
    width: 75%;
    padding: 1.5em;
    margin: 1.5em 2em 0em 2em;
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

  button:hover, .new-post-btn:hover {
    background-color: #0056b3;
  }

  @media (min-width: 708px) {
    .post-container {
      width: 90%;
    }
  }

  /* your existing styles for post-header, post-content, post-footer, etc. */
</style>
