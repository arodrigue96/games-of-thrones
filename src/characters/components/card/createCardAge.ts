import { type Character } from "../../character/types";

const createCardAge = (character: Character): HTMLElement => {
  const cardAge = document.createElement("span");
  cardAge.classList.add("card__age");
  cardAge.textContent = `Age: ${character.age} years`;

  return cardAge;
};

export default createCardAge;
