import { type Character } from "../../../../characters/character/types";

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card_info");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = `${character.name} ${character.lastName ?? ""}`;

  cardInfo.appendChild(cardTitle);
  card.appendChild(cardInfo);

  return card;
};

export default createCard;
