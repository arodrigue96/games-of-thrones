import createMainHeader from "../header/createMainHeader.js";
import { createCardContainer } from "../../characters/components/card/index.js";

const createApp = (): HTMLElement => {
  const appContainer = document.createElement("div");
  appContainer.classList.add("main-container");

  const mainHeader = createMainHeader();
  const cardContainer = createCardContainer();

  appContainer.appendChild(mainHeader);
  appContainer.appendChild(cardContainer);

  return appContainer;
};

export default createApp;
