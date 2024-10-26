import createCardsContainer from "./components/cards/createCardsContainer.js";
import createMainHeader from "./components/createMainHeader.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

root.appendChild(createMainHeader());
root.appendChild(createCardsContainer());
