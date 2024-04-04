import { isAuthenticated, user, popupOpen, posts } from "./store";

export async function fetchPosts(type, user = null) {
  try {
    if (type == "all") {
        console.log(`fetching __ posts`);
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/");
        const data = await response.json();
        posts.set(data);
        console.log("all posts fetched");
        console.log(data);
    } else if (type == "group") {
        
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/3");
        const data = await response.json();
        posts.set(data);
        console.log("fetching group posts");
        console.log(data);
    } else if (type == "mine") {
        const token = localStorage.getItem('token');
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        console.log(user)

        const response = await fetch(`https://facebok-2q7r.onrender.com/posts/post/${user}`, options);
        const data = await response.json();
        posts.set(data);
        console.log("posts fetched");
        
        console.log(data);
        console.log(`fetching my posts`);
        
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
