import { type Character } from "../../../../characters/character/types";

const createCard = (character: Character): HTMLElement => {
  const card = document.createElement("article");
  card.classList.add("card");

  card.innerText = `${character.name} ${character.lastName}`;

  return card;
};

export default createCard;
