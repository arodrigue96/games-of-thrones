const createMainHeader = (): HTMLElement => {
  const mainHeader = document.createElement("header");
  mainHeader.classList.add("main-header");

  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("main-header__title");
  headerTitle.textContent = "Game of Thrones";
  mainHeader.appendChild(headerTitle);

  return mainHeader;
};

export default createMainHeader;
