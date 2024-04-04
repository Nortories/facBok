<script>
    import { groups, isAuthenticated } from "../store.js";
    import { fetchGroups } from "../groupJoin.mjs";
    import Group from "./GroupDisplay.svelte";

    fetchGroups();
</script>

<div>
    {#if $isAuthenticated}
        {#each $groups as group}
        <Group {group}></Group>
        {/each}
    {/if}
</div>