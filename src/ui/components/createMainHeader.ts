const createMainHeader = (): HTMLElement => {
  const mainHeader = document.createElement("header");
  mainHeader.classList.add("main-header");

  mainHeader.innerHTML = `
  <h1> Game of Thrones </h1>
  `;

  return mainHeader;
};

export default createMainHeader;
