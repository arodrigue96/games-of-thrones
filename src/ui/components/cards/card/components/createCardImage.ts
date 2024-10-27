import { type Character } from "../../../../../characters/character/types";

const createCardImage = (character: Character): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = character.image;
  cardImage.alt = `Imagen del personaje ${character.name} ${character.lastName ?? ""}`;
  cardImage.width = 340;

  return cardImage;
};

export default createCardImage;
