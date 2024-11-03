import { type Character } from "../../character/Character/Character";
import createCharactersCardsList from "../charactersCardsList/createCharactersCardsList.js";
import createFullName from "./createFullName.js";

export const createCharacterCardContainer = (
  characters: Character[],
): HTMLElement => {
  const characterCardContainer = document.createElement("main");
  characterCardContainer.classList.add("character-card-container");
  characterCardContainer.appendChild(createCharactersCardsList(characters));

  return characterCardContainer;
};

const createCharacterCardImage = (
  character: Character,
  isLazyLoaded?: boolean,
): HTMLImageElement => {
  const { name, lastName, image } = character.characterData;
  const { isAlive } = character;

  const characterCardImage = document.createElement("img");
  characterCardImage.classList.add("character-card__image");
  characterCardImage.src = image;
  characterCardImage.alt = `Character image of ${createFullName(name, lastName)}`;
  characterCardImage.width = 340;
  characterCardImage.height = 250;

  if (isLazyLoaded) {
    characterCardImage.loading = "lazy";
  }

  if (!isAlive) {
    characterCardImage.classList.add("character-card__image--dead");
  }

  return characterCardImage;
};

const createCharacterCardInfo = (character: Character): HTMLDivElement => {
  const { name, lastName } = character.characterData;

  const characterCardInfo = document.createElement("div");
  characterCardInfo.classList.add("character-card__full-info");

  characterCardInfo.innerHTML = `
  <h2 class="character-card__title">${createFullName(name, lastName)}</h2>`;

  const characterCardAge = createCharacterCardAge(character);
  const characterCardState = createCharacterCardState(character);

  characterCardInfo.appendChild(characterCardAge);
  characterCardInfo.appendChild(characterCardState);

  return characterCardInfo;
};

const createCharacterCardAge = (character: Character): HTMLElement => {
  const { age } = character.characterData;

  const characterCardAge = document.createElement("span");
  characterCardAge.textContent = `Age: ${age} years`;

  return characterCardAge;
};

const createCharacterCardState = (character: Character): HTMLDivElement => {
  const { isAlive } = character;
  const characterState = `icons/${isAlive ? "thumb-up-fill.svg" : "thumb-down-fill.svg"}`;
  const characterAlt = `${isAlive ? "Character is alive" : "Character is dead"}`;

  const characterCardInfo = document.createElement("div");
  characterCardInfo.classList.add("character-card__info");

  characterCardInfo.innerHTML = `
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

  characterCardInfo.appendChild(createCharacterCardEmoji(character));

  return characterCardInfo;
};

const createCharacterCardEmoji = (character: Character): HTMLElement => {
  const characterCardEmoji = document.createElement("span");
  characterCardEmoji.classList.add("character-card__type");

  const king = "Vais a morir todos";
  const fighter = "Primero pego y luego pregunto";
  const advisor = "No sé por qué, pero creo que voy a morir pronto";
  const squire = "Soy un loser";

  if (character.speak() === king) {
    characterCardEmoji.textContent = "👑";
  }

  if (character.speak() === fighter) {
    characterCardEmoji.textContent = "🗡";
  }

  if (character.speak() === advisor) {
    characterCardEmoji.textContent = "🎓";
  }

  if (character.speak() === squire) {
    characterCardEmoji.textContent = "🛡️";
  }

  return characterCardEmoji;
};

const createCharacterCard = (
  character: Character,
  isLazyLoaded?: boolean,
): HTMLLIElement => {
  const card = document.createElement("li");

  const characterCard = document.createElement("article");
  characterCard.classList.add("character-card");

  const characterCardImage = createCharacterCardImage(character, isLazyLoaded);
  const characterCardInfo = createCharacterCardInfo(character);

  characterCard.appendChild(characterCardImage);
  characterCard.appendChild(characterCardInfo);

  card.appendChild(characterCard);

  return card;
};

export default createCharacterCard;
