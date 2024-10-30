import { type Character } from "../types";

export const createCardImage = (character: Character): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = character.image;
  cardImage.alt = `Character image of ${character.name} ${character.lastName ?? ""}`;
  cardImage.width = 340;
  cardImage.height = 250;

  if (!character.isAlive) {
    cardImage.classList.add("card__image--dead");
  }

  return cardImage;
};
