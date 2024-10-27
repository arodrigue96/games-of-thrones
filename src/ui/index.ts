import createMainContainer from "./components/cards/main-container/createMainContainer.js";
import createMainHeader from "./components/header/createMainHeader.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

root.appendChild(createMainHeader());
root.appendChild(createMainContainer());
