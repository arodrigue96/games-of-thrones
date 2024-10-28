import { type Character } from "../types";

const getCharacterEmoji = (character: Character): HTMLDivElement => {
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

export default getCharacterEmoji;
