<script>
  import { user, newGroupForm } from "../store";

  let groupName = "";
  let groupDescription = "";

  async function createGroup() {
    const groupData = {
      name: groupName,
      description: groupDescription,
      users: user.name || "any", // Replace 'any' with the actual user data
    };

    try {
      const response = await fetch("https://facebok-2q7r.onrender.com/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(groupData),
      });

      if (response.ok) {
        // Group created successfully
        console.log("Group created!");
        newGroupForm.set(false);
      } else {
        // Error creating group
        console.log("Group failed!");
        console.error("Failed to create group");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
</script>

<div>
  <button class="close-button" on:click={() => newGroupForm.set(false)}
    >X</button
  >
  <form on:submit|preventDefault={createGroup}>
    <label for="groupName">Group Name:</label>
    <input type="text" id="groupName" bind:value={groupName} required />

    <label for="groupDescription">Group Description:</label>
    <textarea id="groupDescription" bind:value={groupDescription} required
    ></textarea>

    <button type="submit">Create</button>
  </form>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-weight: bold;
  }

  input,
  textarea {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 1rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem;
    background-color: transparent;
    color: #ccc;
    border: none;
    cursor: pointer;
    font-weight: 800;
  }
</style>
