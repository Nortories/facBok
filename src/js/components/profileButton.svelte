<script>
  import { onMount } from "svelte";
  import auth from "../authService.mjs";
  import {
    isAuthenticated,
    user,
    newGroupForm,
    darkMode,
    blueTheme,
    greenTheme,
  } from "../store";

  let auth0Client;

  onMount(() => {
    const dropdownElements = document.querySelectorAll("[data-dropdown]");
    const dropdowns = {};

    dropdownElements.forEach((element, index) => {
      const dropdown = { element };

      dropdown.button = dropdown.element.querySelector(
        "[data-dropdown-button]",
      );
      dropdown.items = dropdown.element.querySelector("[data-dropdown-list]");
      dropdowns[index] = dropdown;

      dropdown.button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const dropdownBreakpoint = window.innerWidth < 401;

        const list = dropdown.items;
        const button = dropdown.button;
        const allLists = document.querySelectorAll("[data-dropdown-list]");
        const listActive = list.classList.contains("active");
        const listUp = list.classList.contains("appears-top");
        const listRight = list.classList.contains("appears-right");
        const sendUp = -list.offsetHeight;
        const sendLeft = -list.offsetWidth + button.offsetWidth;

        if (listActive) {
          list.classList.remove("active");
          list.style.display = "none";
        } else if (listUp && listRight) {
          list.style.top = `${sendUp}px`;
          list.style.left = `${sendLeft}px`;
          allLists.forEach((list) => (list.style.display = "none"));
          list.classList.add("active");
          list.style.display = "block";

          if (dropdownBreakpoint) {
            list.style.top = "0";
            list.style.left = "0";
          }
        } else if (listUp) {
          list.style.top = `${sendUp}px`;
          allLists.forEach((list) => (list.style.display = "none"));
          list.classList.add("active");
          list.style.display = "block";

          if (dropdownBreakpoint) {
            list.style.top = "0";
          }
        } else if (listRight) {
          list.style.left = `${sendLeft}px`;
          allLists.forEach((list) => (list.style.display = "none"));
          list.classList.add("active");
          list.style.display = "block";

          if (dropdownBreakpoint) {
            list.style.left = "0";
          }
        } else {
          allLists.forEach((list) => (list.style.display = "none"));
          list.classList.add("active");
          list.style.display = "block";
        }
      });
    });

    document.addEventListener("click", (e) => {
      const target = e.target;
      const dropdownList = document.querySelectorAll("[data-dropdown-list]");

      if (Array.from(dropdownList).includes(target)) {
        return;
      } else {
        dropdownList.forEach((list) => {
          list.classList.remove("active");
          list.style.display = "none";
        });
      }
    });
  });

  onMount(async () => {
    // create an Auth0 client
    auth0Client = await auth.createClient();
    // check to see if we are currently authenticated
    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
    const token = await auth0Client.getTokenSilently();
    localStorage.setItem("token", token);
  });

  function logout() {
    localStorage.clear();
    auth.logout(auth0Client);
  }

  function handleDarkModeClick() {
    // Code to switch to dark mode goes here
    blueTheme.set(false);
    greenTheme.set(false);
    darkMode.update((darkMode) => !darkMode);
  }

  function handleBlueModeClick() {
    // Code to switch to blue mode goes here
    darkMode.set(false);
    greenTheme.set(false);
    blueTheme.update((blueTheme) => !blueTheme);
  }
  function handleGreenModeClick() {
    // Code to switch to blue mode goes here
    darkMode.set(false);
    blueTheme.set(false);
    greenTheme.update((greenTheme) => !greenTheme);
    console.log($user.sub);
  }

  import CreateGroup from "./createGroup.svelte";
  function groupForm() {
    newGroupForm.set(!$newGroupForm);
    console.log($newGroupForm);
  }
</script>

<div class="form-popup">
  {#if $newGroupForm}
    <div id="myform">
      <CreateGroup />
    </div>
  {/if}
</div>

<div class="center">
  {$user.name}

  <div class="dropdown" data-dropdown="">
    <a class="dropdown-button" data-dropdown-button="" href="#">
      <span
        ><img class="userPic" src={$user.picture} alt="Profile Picture" />
      </span>Profile</a
    >
    <ul class="dropdown-list" data-dropdown-list="">
      <div class="arrow"></div>
      <li class="has-border close" data-dropdown-close="">
        <span class="title">Profile Menu</span>
        <a class="fa fa-close" href="#"></a>
      </li>
      <li class="title has-border">Welcome {$user.name}!</li>
      <!-- <li class="has-border">
      <a href="#">Public Profile</a>
    </li> -->
      <li class="has-border">
        <a class="list-button" on:click={handleDarkModeClick}>Dark Mode</a>
      </li>

      <li class="has-border">
        <a class="list-button" on:click={handleBlueModeClick}>Blue Theme</a>
      </li>
      <li class="has-border">
        <a class="list-button" on:click={handleGreenModeClick}>Green Theme</a>
      </li>

      <!-- <li class="has-border">
      <a href="#">Document Uploads</a>
    </li> -->
      <!-- <li class="has-border">
      <a href="#">Read for Free</a>
    </li> -->
      <li class="has-border">
        <a class="list-button" on:click={groupForm}>Create new Group</a>
      </li>
      <li class="has-border">
        <a class="list-button" on:click={logout}>Sign Out</a>
      </li>
    </ul>
  </div>
</div>

<style>
  @charset "UTF-8";
  .dropdown {
    display: inline-block;
    position: initial;
  }
  #myform {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 32em;
    padding: 3em;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(179, 175, 175, 0.9);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border: #0056b3 2em solid;
    border-radius: 10px;
  }
  .center {
    align-items: center;
    justify-content: center;
  }
  .dropdown-button {
    color: #00293f;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex-direction: column;
  }
  .dropdown-button:hover {
    opacity: 0.8;
  }

  /* .dropdown-button::after {
    align-self: center;
    content: "";
    font-family: "FontAwesome";
    margin-left: 0.5rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #007bff;
    background-image: url({idImg});
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
  } */
  .userPic {
    border-radius: 50%;
    box-shadow: #007bff 0 0 0 2px;
  }

  .dropdown-list {
    background: white;
    display: none;
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    max-height: unset;
    overflow: scroll;
  }
  .dropdown-list.wide {
    width: 100vw;
  }
  .dropdown-list.wider {
    width: 100vw;
  }
  .dropdown-list li a {
    padding: 0.75rem 0.75rem;
    max-width: 100%;
    display: block;
    font-size: 14px;
  }

  .dropdown-list li a:focus {
    opacity: 0.8;
  }
  .dropdown-list li a:hover {
    opacity: 0.8;
  }
  .dropdown-list li a.fa {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 401px) {
    .dropdown-list {
      border-radius: 4px;
      height: unset;
      left: unset;
      max-height: 500px;
      overflow: visible;
      top: unset;
      width: 200px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.075);
    }
  }

  .dropdown-list .close {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dropdown-list .close a {
    display: flex;
    color: #00293f;
  }
  @media screen and (min-width: 400px) {
    .dropdown-list .close {
      display: none;
    }
    .dropdown-list .close a {
      display: none;
    }
  }

  .dropdown-list .title {
    padding: 0.75rem 0.75rem;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: #007bff;
  }

  .dropdown-list .has-border {
    border-bottom: 3px solid #007bff;
  }

  .list-button {
    cursor: pointer;
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    margin-left: 0.2em;
    width: 80%;
    height: 34px;
    background-color: seashell;
    border-radius: 34px;
    color: black;
    font-weight: 600;
  }
  .list-button:hover {
    background-color: #007bff;
  }

  html,
  body {
    font-family: "Source Sans Pro", sans-serif;
  }

  .container {
    max-width: 1024px;
    margin: 2rem auto;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
  .container .light-wrap {
    background: inherit;
    padding: 1rem;
  }
  .container .dark-wrap {
    background: #001a27;
    padding: 1rem;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .fa-facebook {
    color: blue;
  }

  .fa-twitter {
    color: skyblue;
  }

  .fa-pinterest {
    color: red;
  }

  .fa-envelope {
    color: black;
  }
</style>
