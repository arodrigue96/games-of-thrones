import { type Character } from "../../../../characters/character/types";

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = character.image;
  cardImage.alt = `Imagen del personaje ${character.name} ${character.lastName ?? ""}`;
  cardImage.width = 340;
  card.appendChild(cardImage);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = `${character.name} ${character.lastName ?? ""}`;
  cardInfo.appendChild(cardTitle);

  card.appendChild(cardInfo);

  return card;
};

export default createCard;
