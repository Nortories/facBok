import { isAuthenticated, user, popupOpen, posts } from "./store";

export async function fetchPosts(type) {
  try {
    if (type == "all") {
        console.log(`fetching __ posts`);
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/");
        const data = await response.json();
        posts.set(data);
        console.log("posts fetched");
        console.log(data);
    } else if (type =="group") {
        const data = [];
        posts.set(data);
    } else if (type == "mine") {
        console.log(`fetching my posts`);
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/abc123");
        const data = await response.json();
        posts.set(data);
        console.log("posts fetched");
        console.log(data);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
