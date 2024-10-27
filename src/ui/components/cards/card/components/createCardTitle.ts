import { type Character } from "../../../../../characters/character/types";

const createCardTitle = (character: Character): HTMLHeadingElement => {
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = `${character.name} ${character.lastName ?? ""}`;

  return cardTitle;
};

export default createCardTitle;
