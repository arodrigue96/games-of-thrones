import { type Character } from "../../../../../characters/character/types";

const createCardState = (character: Character): HTMLDivElement => {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");

  const characterState = document.createElement("span");
  characterState.classList.add("card__state");
  characterState.textContent = "State:";
  cardInfo.appendChild(characterState);

  if (character.isAlive) {
    const thumbUp = document.createElement("img");
    thumbUp.classList.add("card__state--alive");
    thumbUp.src = "icons/thumb-up-fill.svg";
    cardInfo.appendChild(thumbUp);
    thumbUp.alt = "Character is alive";
    thumbUp.width = 20;
    thumbUp.height = 20;
  }

  if (!character.isAlive) {
    const thumbDown = document.createElement("img");
    thumbDown.classList.add("card__state--dead");
    thumbDown.src = "icons/thumb-down-fill.svg";
    cardInfo.appendChild(thumbDown);
    thumbDown.alt = "Character is dead";
    thumbDown.width = 20;
    thumbDown.height = 20;
  }

  return cardInfo;
};

export default createCardState;
