<script context="module">
    import { isAuthenticated, user, newGroupForm } from "../store";
    import { fetchPosts } from "../postRendering.mjs";

    function setupTabs () {
        document.querySelectorAll(".tabs-button").forEach(button => {
            button.addEventListener("click", () => {
                const tabsBar = button.parentElement;
                const tabNumber = button.dataset.forTab;
                
                fetchPosts(tabNumber);
                console.log(tabNumber);
                tabsBar.querySelectorAll(".tabs-button").forEach(button => {
                    button.classList.remove("tabs-button-active");
                });
                button.classList.add("tabs-button-active");
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        setupTabs();
        document.querySelector(".tabs-bar .tabs-button").click();
        
    });

</script>
<!-- {#if $isAuthenticated} giving errors - commented out for now-->
<div class="tabs-bar">
    <button class="tabs-button" data-for-tab="all">For You</button>
    <button class="tabs-button" data-for-tab="group">Group Posts</button>
    <button class="tabs-button" data-for-tab="mine">My Posts</button>
</div>
<!-- {/if} -->
<style>
    .tabs-bar {
        flex-shrink: 0;
        background: #cccccc;
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