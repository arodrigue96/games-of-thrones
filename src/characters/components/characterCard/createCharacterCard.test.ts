import Fighter from "../../fighter/Fighter/Fighter.js";
import createCharacterCard from "./index.js";

const screen = document.createElement("div");
afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the component characterCard", () => {
  describe("When it receives Jaime character", () => {
    const name = "Jaime";
    const lastName = "Lannister";
    const age = 43;
    const image = "";
    const weapon = "Oathkeeper";
    const skillLevel = 10;

    const jaime: Fighter = new Fighter(
      { name, lastName, age, image },
      weapon,
      skillLevel,
    );

    test("Then it should show Jaime's image", () => {
      const expectedCharacterAltImage = /Character image of Jaime Lannister/i;

      const characterCard = createCharacterCard(jaime);
      screen.appendChild(characterCard);
      const image = screen.querySelector("img");

      expect(image).not.toBeNull();
      expect(image?.alt).toMatch(expectedCharacterAltImage);
    });

    test("Then it should show 'Jaime Lannister' name inside a heading", () => {
      const expectedCharacterFullName = /Jaime Lannister/i;

      const characterCard = createCharacterCard(jaime);
      screen.appendChild(characterCard);
      const fullName = screen.querySelector("h2");

      expect(fullName).not.toBeNull();
      expect(fullName?.textContent).toMatch(expectedCharacterFullName);
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
