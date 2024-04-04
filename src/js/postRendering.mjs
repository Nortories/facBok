import { isAuthenticated, user, popupOpen, posts } from "./store";

export async function fetchPosts(type, user = null) {
  const token = localStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    if (type == "all") {
      console.log(`fetching all posts`);
      const response = await fetch("https://facebok-2q7r.onrender.com/posts/");
      const data = await response.json();
      posts.set(data);
      console.log("all posts fetched");
      console.log(data);
    } else if (type == "group") {
      const data = [];
      const response = await fetch(
        `https://facebok-2q7r.onrender.com/users/${user.sub}`,
        options
      );
      const userData = await response.json();
      const groups = userData.groups;
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          const result = await fetch(
            "https://facebok-2q7r.onrender.com/posts/" + groups[i]
          );
          for (var i = 0; i < result.length; i++) {
            posts.push(result);
          }
        }
      } else {
        console.log("No groups found");
      }
      posts.set(data);
      console.log("fetching group posts");
      console.log(posts);
    } else if (type == "mine") {
      console.log(user);

      const response = await fetch(
        `https://facebok-2q7r.onrender.com/posts/user/${user.sub}`,
        options
      );

      const data = await response.json();
      posts.set(data);
      console.log(data);
      console.log(`fetching my posts`);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
