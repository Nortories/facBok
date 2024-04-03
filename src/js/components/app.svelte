<script>
import CreatePost from "./CreatePost.svelte"
import PostNavbar from "./PostNavbar.svelte";
import Feed from "./Feed.svelte";
import Landing from "./Landing.svelte";
import MainFooter from "./MainFooter.svelte";
import MainHeader from "./MainHeader.svelte";
import { darkMode } from "../store.js";

</script>

<MainHeader> </MainHeader>
<CreatePost></CreatePost>
<PostNavbar></PostNavbar>
<Feed></Feed>
<Landing></Landing>
<MainFooter></MainFooter>