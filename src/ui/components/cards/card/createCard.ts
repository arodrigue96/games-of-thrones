import { type Character } from "../../../../characters/character/types";
import createCardImage from "./components/createCardImage.js";
import createCardInfo from "./components/createCardInfo.js";

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  const cardImage = createCardImage(character);
  const cardInfo = createCardInfo(character);

  card.appendChild(cardImage);
  card.appendChild(cardInfo);

  return card;
};

export default createCard;
