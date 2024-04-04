<script>
    import { isAuthenticated, user, newGroupForm } from "../store";
    import { fetchPosts } from "../postRendering.mjs";
    import { onMount } from "svelte";


    function clickHandler (e) {
        const button = e.target;
        fetchPosts(button.dataset.forTab, $user.sub)
        setActiveTab(button);
    }

    function setActiveTab (button) {
        const tabsBar = button.parentElement;
        tabsBar.querySelectorAll(".tabs-button").forEach(button => {
            button.classList.remove("tabs-button-active");
        });
        button.classList.add("tabs-button-active");
    };
     
    onMount(() => {
        fetchPosts('all');
    });



</script>
{#if $isAuthenticated}
<div id="tabs-bar">
    <button class="tabs-button tabs-button-active" on:click={ clickHandler } data-for-tab="all">For You</button>
    <button class="tabs-button" on:click={  clickHandler} data-for-tab="group">Group Posts</button>
    <button class="tabs-button" on:click={  clickHandler } data-for-tab="mine">My Posts</button>
</div>
{/if}
<style>
    #tabs-bar {
        display: flex;
        margin-top: 40px;
        border-radius: 15px;
    }
    .tabs-button {
        padding: 10px;
        background: rgba(136, 132, 132, 0.5);
        border: none;
        outline: none;
        cursor: pointer;
        flex: 1;
        border-radius: 15px;
    }
    .tabs-button-active {
        background: #dddddd;
        font-weight: bold;
        border: 3px solid #0056b3;
    }
    .tabs-button:not(:last-of-type) {
        margin-right: 20px;
    }
</style>