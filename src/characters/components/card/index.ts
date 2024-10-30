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

export const createCardTitle = (character: Character): HTMLHeadingElement => {
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = `${character.name} ${character.lastName ?? ""}`;

  return cardTitle;
};

export const createCardInfo = (character: Character): HTMLDivElement => {
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

export const createCardAge = (character: Character): HTMLElement => {
  const cardAge = document.createElement("span");
  cardAge.classList.add("card__age");
  cardAge.textContent = `Age: ${character.age} years`;

  return cardAge;
};

export const createCardState = (character: Character): HTMLDivElement => {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");

  cardInfo.innerHTML = `
  <span class= "card__state">
    State:
    <img
      src="icons/${character.isAlive ? "thumb-up-fill.svg" : "thumb-down-fill.svg"}"
      alt="Character is ${character.isAlive ? "Character is alive" : "Character is dead"}"
      width="20"
      height="20"
    >
  </span>
  `;

  cardInfo.appendChild(getCharacterEmoji(character));

  return cardInfo;
};

export const getCharacterEmoji = (character: Character): HTMLDivElement => {
  const emojiContainer = document.createElement("div");
  emojiContainer.classList.add("card__type");

  const addEmoji = document.createElement("span");
  addEmoji.classList.add("card__type");

  const king = "Vais a morir todos";
  const fighter = "Primero pego y luego pregunto";
  const advisor = "No sé por qué, pero creo que voy a morir pronto";
  const squire = "Soy un loser";

  if (character.speak() === king) {
    addEmoji.textContent = "👑";
  }

  if (character.speak() === fighter) {
    addEmoji.textContent = "🗡";
  }

  if (character.speak() === advisor) {
    addEmoji.textContent = "🎓";
  }

  if (character.speak() === squire) {
    addEmoji.textContent = "🛡️";
  }

  emojiContainer.appendChild(addEmoji);

  return emojiContainer;
};
