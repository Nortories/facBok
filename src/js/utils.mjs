import MainFooter from "./components/MainFooter.svelte";
import MainHeader from "./components/MainHeader.svelte";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// remove data from local storage
export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}
export function getCartCount() {
  const cartItems = getLocalStorage("so-cart") ?? [];
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);
  return count;
}
export function loadHeaderFooter() {
  new MainHeader({
    target: document.querySelector("#main-header"),
  });
  new MainFooter({
    target: document.querySelector("#main-footer"),
  });
}
export function getCartTotal(key) {
  const cartItems = getLocalStorage(key) ?? [];
  const total = cartItems.reduce(
    (total, item) => total + item.FinalPrice * item.quantity,
    0
  );
  return total.toFixed(2);
}
export function getCartTotalItems() {
  const cartItems = getLocalStorage("so-cart") ?? [];
  const total = cartItems.reduce((total, item) => total + item.quantity, 0);
  return total;
}

// takes a form element and returns an object where the key is the "name" of the form input.
export function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => alert.remove());
}

export function packageItems(items) {
  const simpleItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: item.quantity,
    };
  });
  return simpleItems;
}
