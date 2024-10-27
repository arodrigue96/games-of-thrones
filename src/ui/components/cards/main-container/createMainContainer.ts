import { characters } from "../../../../characters/data/characters.js";
import createCardsList from "../cards-list/createCardsList.js";

const createMainContainer = (): HTMLElement => {
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main-container");
  mainContainer.appendChild(createCardsList(characters));

  return mainContainer;
};

export default createMainContainer;
