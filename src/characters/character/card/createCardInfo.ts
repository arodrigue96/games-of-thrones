import { type Character } from "../types";
import createCardAge from "./createCardAge.js";
import createCardState from "./createCardState.js";
import createCardTitle from "./createCardTitle.js";

const createCardInfo = (character: Character): HTMLDivElement => {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__full-info");

  const cardTitle = createCardTitle(character);
  const cardAge = createCardAge(character);
  const cardState = createCardState(character);

  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardAge);
  cardInfo.appendChild(cardState);

  return cardInfo;
};

export default createCardInfo;
