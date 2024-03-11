import MainFooter from "./components/MainFooter.svelte";
import MainHeader from "./components/MainHeader.svelte";

/**
 * Retrieves data from local storage.
 *
 * @param {string} key - The key of the data to retrieve.
 * @returns {any} - The retrieved data, or null if the key does not exist.
 */
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

/**
 * Saves data to local storage.
 *
 * @param {string} key - The key to associate with the data.
 * @param {any} data - The data to save.
 */
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Removes data from local storage.
 *
 * @param {string} key - The key of the data to remove.
 */
export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

/**
 * Retrieves the value of a query parameter from the URL.
 *
 * @param {string} param - The name of the query parameter.
 * @returns {string|null} - The value of the query parameter, or null if it does not exist.
 */
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

/**
 * Loads the main header and footer components.
 */
export function loadHeaderFooter() {
  new MainHeader({
    target: document.querySelector("#main-header"),
  });
  new MainFooter({
    target: document.querySelector("#main-footer"),
  });
}

/**
 * Converts form data to JSON format.
 *
 * @param {HTMLFormElement} formElement - The form element containing the data.
 * @returns {Object} - The converted JSON object.
 */
export function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};
  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });
  return convertedJSON;
}
