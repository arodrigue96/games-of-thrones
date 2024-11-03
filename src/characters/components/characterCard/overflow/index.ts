const createCharacterCardOverlay = (): HTMLElement => {
  const characterCard = document.createElement("article");
  characterCard.classList.add("card__overlay");

  return characterCard;
};

export default createCharacterCardOverlay;
