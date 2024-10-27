import { type Character } from "../../../../../characters/character/types";
import createCardAge from "./createCardAge.js";
import createCardTitle from "./createCardTitle.js";

const createCardInfo = (character: Character): HTMLDivElement => {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");

  const cardTitle = createCardTitle(character);
  const cardAge = createCardAge(character);

  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardAge);

  return cardInfo;
};

export default createCardInfo;
