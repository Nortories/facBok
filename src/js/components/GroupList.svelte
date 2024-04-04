<script>
    import { groups, isAuthenticated } from "../store.js";
    import { fetchGroups } from "../groupJoin.mjs";
    import Group from "./GroupDisplay.svelte";

    fetchGroups();
</script>
{#if $isAuthenticated}
    <div id="groups">
        <h1>Suggested groups</h1>
        {#each $groups as group}
        <Group {group}></Group>
        {/each}
    </div>
{/if}
<style>
    #groups {
        background-color: rgba(136, 132, 132, 0.5);
        border: 3px solid #0056b3;
        border-radius: 15px;
        padding: 20px;
        margin-right: 20px;
    }
</style>