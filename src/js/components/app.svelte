<script>
  import CreatePost from "./CreatePost.svelte";
  import PostNavbar from "./PostNavbar.svelte";
  import Feed from "./Feed.svelte";
  import Landing from "./Landing.svelte";
  import MainFooter from "./MainFooter.svelte";
  import MainHeader from "./MainHeader.svelte";
  import Dark from "./Dark.svelte";
  import Light from "./Light.svelte";
  import BlueTheme from "./BlueTheme.svelte";
  import GreenTheme from "./GreenTheme.svelte";
  import { darkMode, blueTheme, greenTheme } from "../store";
</script>

{#if $darkMode}
  <Dark></Dark>
{:else if $blueTheme}
  <BlueTheme></BlueTheme>
{:else if $greenTheme}
  <GreenTheme></GreenTheme>
{:else}
  <Light></Light>
{/if}

<MainHeader></MainHeader>
<CreatePost></CreatePost>
<PostNavbar></PostNavbar>
<Feed></Feed>
<Landing></Landing>
<MainFooter></MainFooter>
