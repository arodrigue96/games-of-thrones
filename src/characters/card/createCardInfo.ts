import { type Character } from "../../characters/character/types";
import createCardAge from "../character/card/createCardAge.js";
import createCardState from "../character/card/createCardState.js";
import createCardTitle from "../character/card/createCardTitle.js";

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