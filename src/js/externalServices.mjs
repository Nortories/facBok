import { isAuthenticated, user, popupOpen, posts } from "./store";

export async function fetchPosts() {
  try {
    console.log("fetching posts");
    const response = await fetch("https://facebok-2q7r.onrender.com/posts/");
    const data = await response.json();
    posts.set(data);
    console.log("posts fetched");
    console.log(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
fetchPosts();
