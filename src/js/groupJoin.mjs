import { groups, posts } from './store';

export async function fetchGroups() {
    try {
        const response = await fetch("https://facebok-2q7r.onrender.com/groups");
        const data = await response.json();
        groups.set(data);
        console.log("fetching groups");
        console.log(data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

export async function fetchGroupPosts(group) {
    try {
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/3");
        const data = await response.json();
        posts.set(data);
        console.log("fetching group posts");
        console.log(data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
export async function joinGroup(group) {
    try {
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/3");
        const data = await response.json();
        posts.set(data);
        console.log("fetching group posts");
        console.log(data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}