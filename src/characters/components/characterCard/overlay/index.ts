import Advisor from "../../../advisor/Advisor/Advisor.js";
import { type Character } from "../../../character/Character/Character";
import Fighter from "../../../fighter/Fighter/Fighter.js";
import King from "../../../king/King/King.js";
import Squire from "../../../squire/Squire/Squire.js";
import createFullName from "../createFullName.js";

export const createCharacterCardOverlay = (
  character: Character,
): HTMLElement => {
  const characterCard = document.createElement("div");
  characterCard.classList.add("character-card__overlay");

  const overlayCharacterData = createOverlayCharacterData(character);
  characterCard.appendChild(overlayCharacterData);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.innerHTML = `

    <button class="overlay__button">speak</button>
    <button class="overlay__button">die</button>
  `;

  characterCard.appendChild(buttonContainer);

  return characterCard;
};

export const createOverlayCharacterData = (
  character: Character,
): HTMLElement => {
  const characterData = document.createElement("div");
  characterData.classList.add("character-card__overlay-info");

  if (character instanceof King) {
    characterData.innerHTML = `
    <span>Years of reign: ${character.yearsOfReign}</span>
    `;
  }

  if (character instanceof Fighter) {
    characterData.innerHTML = `
    <span>Weapon: ${character.weapon}</span>
    <span>Skill Level: ${character.skillLevel}</span>
    `;
  }

  if (character instanceof Advisor) {
    const { name, lastName } = character.advisedCharacter.characterData;

    characterData.innerHTML = `
    <span>Advised Character: ${createFullName(name, lastName)} </span>
    `;
  }

  if (character instanceof Squire) {
    const { name, lastName } = character.servedCharacter.characterData;

    characterData.innerHTML = `
    <span>Pelotism Level: ${character.pelotismLevel}</span>
    <span>Served Character: ${createFullName(name, lastName)}</span>
    `;
  }

  return characterData;
};
