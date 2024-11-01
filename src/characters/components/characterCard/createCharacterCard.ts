import { type Character } from "../../character/types";
import createCardsList from "../cardsList/createCardsList.js";
import createFullName from "./createFullName.js";

export const createCardContainer = (characters: Character[]): HTMLElement => {
  const cardContainer = document.createElement("main");
  cardContainer.classList.add("card-container");
  cardContainer.appendChild(createCardsList(characters));

  return cardContainer;
};

const createCardImage = (
  character: Character,
  isLazyLoaded?: boolean,
): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = character.image;
  cardImage.alt = `Character image of ${createFullName(character.name, character.lastName)}`;
  cardImage.width = 340;
  cardImage.height = 250;

  if (isLazyLoaded) {
    cardImage.loading = "lazy";
  }

  if (!character.isAlive) {
    cardImage.classList.add("card__image--dead");
  }

  return cardImage;
};

const createCardInfo = (character: Character): HTMLDivElement => {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__full-info");

  cardInfo.innerHTML = `
  <h2 class="card__title">${createFullName(character.name, character.lastName)}</h2>`;

  const cardAge = createCardAge(character);
  const cardState = createCardState(character);

  cardInfo.appendChild(cardAge);
  cardInfo.appendChild(cardState);

  return cardInfo;
};

const createCardAge = (character: Character): HTMLElement => {
  const cardAge = document.createElement("span");
  cardAge.classList.add("card__age");
  cardAge.textContent = `Age: ${character.age} years`;

  return cardAge;
};

const createCardState = (character: Character): HTMLDivElement => {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");

  cardInfo.innerHTML = `
  <span class= "card__state">
    State:
    <img
      src="icons/${character.isAlive ? "thumb-up-fill.svg" : "thumb-down-fill.svg"}"
      alt="${character.isAlive ? "Character is alive" : "Character is dead"}"
      width="20"
      height="20"
    >
  </span>
  `;

  cardInfo.appendChild(createCharacterEmoji(character));

  return cardInfo;
};

const createCharacterEmoji = (character: Character): HTMLElement => {
  const characterEmoji = document.createElement("span");
  characterEmoji.classList.add("card__type");

  const king = "Vais a morir todos";
  const fighter = "Primero pego y luego pregunto";
  const advisor = "No sé por qué, pero creo que voy a morir pronto";
  const squire = "Soy un loser";

  if (character.speak() === king) {
    characterEmoji.textContent = "👑";
  }

  if (character.speak() === fighter) {
    characterEmoji.textContent = "🗡";
  }

  if (character.speak() === advisor) {
    characterEmoji.textContent = "🎓";
  }

  if (character.speak() === squire) {
    characterEmoji.textContent = "🛡️";
  }

  return characterEmoji;
};

const createCharacterCard = (
  character: Character,
  isLazyLoaded?: boolean,
): HTMLLIElement => {
  const card = document.createElement("li");

  const characterCard = document.createElement("article");
  characterCard.classList.add("card");

  const cardImage = createCardImage(character, isLazyLoaded);
  const cardInfo = createCardInfo(character);

  characterCard.appendChild(cardImage);
  characterCard.appendChild(cardInfo);

  card.appendChild(characterCard);

  return card;
};

export default createCharacterCard;
