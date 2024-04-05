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
        const response = await fetch("https://facebok-2q7r.onrender.com/posts/" + group);
        const data = await response.json();
        posts.set(data);
        console.log("fetching group posts");
        console.log(data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
export async function joinGroup(group, user) {
    try {
        const token = localStorage.getItem('token');
        const options = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                groupId: group
            }),
        }
        const response = await fetch(`https://facebok-2q7r.onrender.com/users/addGroup/${user}`, options);
        console.log(response);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}