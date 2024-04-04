<script>
    import { isAuthenticated, user, newGroupForm, groups } from "../store";
    import { fetchGroupPosts, joinGroup } from "../groupJoin.mjs";
    import { onMount } from "svelte";
    export let group;
    let status = 'closed';
    function joinOption (join) {
        console.log('check');
        console.log(join);
        if (status == 'closed') {
            join.style.display = "block";
            status = 'open';
            console.log('open');
        } else {
            join.style.display = "none";
            status = 'closed';
            console.log('closed');
        }
    };
    function clickHandler (e) {
        const button = e.target;
        const id = button.dataset.forTab;
        console.log(button.dataset.forTab);
        // console.log(id);
        const join = document.body.querySelector("[data-id=" + CSS.escape(id) + "]");
        
        joinOption(join);
        fetchGroupPosts(button.dataset.forTab);
    }
    function groupToJoin() {
        const button = e.target;
        joinGroup(button.dataset.forTab);
    }
     
 



</script>
{#if $isAuthenticated}
<div class="group-set">
    <button class="groups-button" on:click={ clickHandler } data-for-tab={ group?._id }>{group?.name}</button>
    <button class="join-button" on:click={ groupToJoin } data-id={ group?._id }>Join Group</button>
</div>

{/if}
<style>
    .group-set {
        font-size: 0;
    }
    .groups-button{
        background-color: rgba(136, 132, 132, 0.5);
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
    }
    .join-button {
        color: white;
        background-color: #007bff;
        display: none;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
    }
</style>