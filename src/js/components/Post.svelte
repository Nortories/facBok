<script>
  export let title;
  export let content;
  export let author;
  export let date;
</script>

// Not yet implemented

<div class="post">
  <h2 class="title">{title}</h2>
  <p class="content">{content}</p>
  <p class="author">Author: {author}</p>
  <p class="date">Date: {date}</p>
</div>

<style>
  .post {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .content {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .author {
    font-size: 12px;
    color: #888;
    margin-bottom: 5px;
  }

  .date {
    font-size: 12px;
    color: #888;
  }
</style>
