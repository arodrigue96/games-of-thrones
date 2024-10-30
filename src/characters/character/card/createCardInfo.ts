import createCardAge from "../../components/card/createCardAge.js";
import createCardState from "../../components/card/createCardState.js";
import createCardTitle from "../../components/card/createCardTitle.js";
import { type Character } from "../types";

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
