import { jaime } from "../../data/characters";
import createCharacterCard from "./createCharacterCard.js";

const screen = document.createElement("div");
afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the component characterCard", () => {
  describe("When it receives Jaime character", () => {
    test("Then it should show Jaime's image", () => {
      const expectedAltImage = /Character image of Jaime Lannister/i;

      const characterCard = createCharacterCard(jaime);
      screen.appendChild(characterCard);
      const image = screen.querySelector("img");

      expect(image).not.toBeNull();
      expect(image?.alt).toMatch(expectedAltImage);
    });

    test("Then it should show 'Jaime Lannister' name inside a heading", () => {
      const expectedFullName = /Jaime Lannister/i;

      const characterCard = createCharacterCard(jaime);
      screen.appendChild(characterCard);
      const fullName = screen.querySelector("h2");

      expect(fullName).not.toBeNull();
      expect(fullName?.textContent).toMatch(expectedFullName);
    });

    test("Then it should show thumb up if he is alive", () => {
      const jaimeStateAlt = /Character is alive/i;

      const characterCard = createCharacterCard(jaime);
      screen.appendChild(characterCard);

      const jaimeFullInformation = screen.querySelector("div");
      const jaimeState = jaimeFullInformation?.querySelector("img");

      expect(jaimeState?.alt).not.toBeNull();
      expect(jaimeState?.alt).toMatch(jaimeStateAlt);
    });
  });
});
