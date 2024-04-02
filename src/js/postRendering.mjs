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
    } else if (type == "group") {
        
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/3");
        const data = await response.json();
        posts.set(data);
        console.log("posts fetched");
        console.log(data);
    } else if (type == "mine") {
        const data = [];
        posts.set(data);
        console.log(`fetching my posts`);
        
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
