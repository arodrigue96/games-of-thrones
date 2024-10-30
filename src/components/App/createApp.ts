import { createCardContainer } from "../../characters/components/card/index.js";
import createMainHeader from "../header/createMainHeader.js";

const createApp = (): HTMLElement => {
  const appContainer = document.createElement("div");

  const mainHeader = createMainHeader();
  const cardContainer = createCardContainer();

  appContainer.appendChild(mainHeader);
  appContainer.appendChild(cardContainer);

  return appContainer;
};

export default createApp;
