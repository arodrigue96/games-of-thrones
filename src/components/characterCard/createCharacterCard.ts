import createCardInfo from "../../characters/character/card/createCardInfo.js";
import { createCardImage } from "../../characters/character/card/index.js";
import { type Character } from "../../characters/character/types";

const createCharacterCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  const cardImage = createCardImage(character);
  const cardInfo = createCardInfo(character);

  card.appendChild(cardImage);
  card.appendChild(cardInfo);

  return card;
};

export default createCharacterCard;
