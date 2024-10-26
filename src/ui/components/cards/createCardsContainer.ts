const createCardsContainer = (): HTMLElement => {
  const cardsContainer = document.createElement("main");
  cardsContainer.classList.add("cards-container");

  return cardsContainer;
};

export default createCardsContainer;
