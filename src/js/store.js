// src/store.js
import { writable, derived } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();
export const posts = writable([]);
export const groups = writable([]);

export const newGroupForm = writable(false);

export const tasks = writable([]);
export const user_tasks = derived([tasks, user], ([$tasks, $user]) => {
  let logged_in_user_tasks = [];

  if ($user && $user.email) {
    logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email);
  }

  return logged_in_user_tasks;
});
export const darkMode = writable(false);
export const blueTheme = writable(false);
export const greenTheme = writable(false);
