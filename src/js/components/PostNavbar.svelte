<script>
    import { isAuthenticated, user, newGroupForm } from "../store";
    import { fetchPosts } from "../postRendering.mjs";
    import { onMount } from "svelte";


    function clickHandler (e) {
        const button = e.target;
        fetchPosts(button.dataset.forTab)
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
    })
    
    

</script>
{#if $isAuthenticated}
<div class="tabs-bar">
    <button class="tabs-button tabs-button-active" on:click={ clickHandler } data-for-tab="all">For You</button>
    <button class="tabs-button" on:click={  clickHandler} data-for-tab="group">Group Posts</button>
    <button class="tabs-button" on:click={  clickHandler } data-for-tab="mine">My Posts</button>
</div>
{/if}
<style>
    .tabs-bar {
        flex-shrink: 0;
        background: #cccccc;
        /* display: none; */
    }
    .tabs-button {
        padding: 10px;
        background: #eeeeee;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .tabs-button:active {
        background: #dddddd;
    }
    .tabs-button:not(:last-of-type) {
        border-right: 1px solid #cccccc;
    }
    :is(.tabs-button-active) {
        font-weight: bold;
        border-bottom: 2px solid #007bff;
        background: #dddddd;
    }

</style>