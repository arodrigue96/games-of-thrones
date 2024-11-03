import { type Character } from "../../character/Character/Character";
import createCharactersCardsList from "../charactersCardsList/createCharactersCardsList.js";
import createFullName from "./createFullName.js";

export const createCardContainer = (characters: Character[]): HTMLElement => {
  const cardContainer = document.createElement("main");
  cardContainer.classList.add("character-card-container");
  cardContainer.appendChild(createCharactersCardsList(characters));

  return cardContainer;
};

const createCardImage = (
  character: Character,
  isLazyLoaded?: boolean,
): HTMLImageElement => {
  const { name, lastName, image } = character.characterData;
  const { isAlive } = character;

  const cardImage = document.createElement("img");
  cardImage.classList.add("character-card__image");
  cardImage.src = image;
  cardImage.alt = `Character image of ${createFullName(name, lastName)}`;
  cardImage.width = 340;
  cardImage.height = 250;

  if (isLazyLoaded) {
    cardImage.loading = "lazy";
  }

  if (!isAlive) {
    cardImage.classList.add("character-card__image--dead");
  }

  return cardImage;
};

const createCardInfo = (character: Character): HTMLDivElement => {
  const { name, lastName } = character.characterData;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("character-card__full-info");

  cardInfo.innerHTML = `
  <h2 class="character-card__title">${createFullName(name, lastName)}</h2>`;

  const cardAge = createCardAge(character);
  const cardState = createCardState(character);

  cardInfo.appendChild(cardAge);
  cardInfo.appendChild(cardState);

  return cardInfo;
};

const createCardAge = (character: Character): HTMLElement => {
  const { age } = character.characterData;

  const cardAge = document.createElement("span");
  cardAge.textContent = `Age: ${age} years`;

  return cardAge;
};

const createCardState = (character: Character): HTMLDivElement => {
  const { isAlive } = character;
  const characterState = `icons/${isAlive ? "thumb-up-fill.svg" : "thumb-down-fill.svg"}`;
  const characterAlt = `${isAlive ? "Character is alive" : "Character is dead"}`;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("character-card__info");

  cardInfo.innerHTML = `
  <span>
    State:
    <img
      src="${characterState}"
      alt="${characterAlt}"
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
  characterEmoji.classList.add("character-card__type");

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
  characterCard.classList.add("character-card");

  const cardImage = createCardImage(character, isLazyLoaded);
  const cardInfo = createCardInfo(character);

  characterCard.appendChild(cardImage);
  characterCard.appendChild(cardInfo);

  card.appendChild(characterCard);

  return card;
};

export default createCharacterCard;
