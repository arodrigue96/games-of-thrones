import createMainContainer from "../../characters/character/card/createMainContainer.js";
import createMainHeader from "../header/createMainHeader.js";

const createApp = (): HTMLElement => {
  const appContainer = document.createElement("div");

  const mainHeader = createMainHeader();
  const mainContainer = createMainContainer();

  appContainer.appendChild(mainHeader);
  appContainer.appendChild(mainContainer);

  return appContainer;
};

export default createApp;
