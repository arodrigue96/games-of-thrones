import createMainHeader from "../header/createMainHeader.js";
import { createCardContainer } from "../../characters/components/characterCard/createCharacterCard.js";
import { type Character } from "../../characters/character/Character/Character.js";

const createApp = (characters: Character[]): HTMLElement => {
  const appContainer = document.createElement("div");
  appContainer.classList.add("main-container");

  const mainHeader = createMainHeader();
  const cardContainer = createCardContainer(characters);

  appContainer.appendChild(mainHeader);
  appContainer.appendChild(cardContainer);

  return appContainer;
};

export default createApp;
