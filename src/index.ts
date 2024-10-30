import createApp from "./components/app/createApp.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

const appContent = createApp();
root.appendChild(appContent);
