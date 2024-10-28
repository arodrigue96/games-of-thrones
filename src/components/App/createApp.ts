import createMainContainer from "../main-container/createMainContainer.js";
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
