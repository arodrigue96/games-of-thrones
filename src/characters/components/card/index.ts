import createCardsList from "../../../components/cardsList/createCardsList.js";
import { characters } from "../../data/characters.js";
import { type Character } from "../../character/types.js";

export const createCardContainer = (): HTMLElement => {
  const cardContainer = document.createElement("main");
  cardContainer.classList.add("card-container");
  cardContainer.appendChild(createCardsList(characters));

  return cardContainer;
};

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
