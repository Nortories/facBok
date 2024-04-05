<script>
    let users;
    let API_URL="https://facebok-2q7r.onrender.com/groups/";
    let groupData= [];
    import { onMount } from "svelte";
    import { isAuthenticated } from "../store.js";
// This is my get function
    export async function getAllItems() {
        try {
            const response = await fetch(API_URL);
            users = await response.json();
            console.log(users);

            return users;
        } catch (error) {
            console.error('Error fetching all items:', error);
            return null;
        }
    }

    onMount(getAllItems);

    async function joinGroup(groupId) {
        try {
            const response = await fetch(`https://facebok-2q7r.onrender.com/user/addGroup/${groupId}/join`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Failed to join group');
            }

            // Handle successful response, update UI or perform other actions
            console.log('Joined group successfully');

            // Optionally, you can redirect the user to a different page or perform other actions
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function addtoGroup(event) {
        const groupId = event.target.dataset.groupid;
        console.log(groupId);

        await joinGroup(groupId);
    }

    // Initialize user data here
    let user = {
        name: '',
        email: ''
    };

</script>

<h1>
    Here are all the existing groups. 
</h1>

{#if users}
    <ul>
        {#each users as user}
            <li> <button data-groupid={user._id} on:click={addtoGroup}>{user.name}</button></li>
        {/each}
    </ul>
{:else}
    <p>Loading users...</p>
{/if}

<h1>Join Group</h1>

<label>
    Name:
    <input type="text" bind:value="{user.name}" />
</label>

<label>
    Email:
    <input type="email" bind:value="{user.email}" />
</label>

<button on:click={joinGroup}>Join Group</button>
