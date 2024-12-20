import createMainHeader from "../header/createMainHeader.js";
import { type Character } from "../../characters/character/Character/Character.js";
import { createCharacterCardContainer } from "../../characters/components/characterCard/index.js";

const createApp = (characters: Character[]): HTMLElement => {
  const appContainer = document.createElement("div");
  appContainer.classList.add("main-container");

  const mainHeader = createMainHeader();
  const characterCardContainer = createCharacterCardContainer(characters);

  appContainer.appendChild(mainHeader);
  appContainer.appendChild(characterCardContainer);

  return appContainer;
};

export default createApp;
