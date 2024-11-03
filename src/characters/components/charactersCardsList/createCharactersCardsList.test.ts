import { type Character } from "../../character/Character/Character";
import Fighter from "../../fighter/Fighter/Fighter";
import King from "../../king/King/King.js";
import createFullName from "../characterCard/createFullName";
import createCharactersCardsList from "./createCharactersCardsList.js";

const screen = document.createElement("div");

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the componenet characterCardsList", () => {
  describe("When it receives the characters Pepe and Luis", () => {
    const pepe: Fighter = new Fighter(
      {
        name: "Pepe",
        lastName: "Laemaez",
        age: 22,
        image: "",
      },
      "Drogon",
      9,
    );

    const luis: King = new King(
      {
        name: "Luis",
        lastName: "Luisez",
        age: 15,
        image: "",
      },
      2,
    );

    const characters: Character[] = [pepe, luis];

    test("Then it should show Pepe and Luis images", () => {
      const charactersCards = createCharactersCardsList(characters);

      screen.appendChild(charactersCards);
      const images = [...screen.querySelectorAll("img")];

      const doesPepeImageExist = images.some(
        (image) =>
          image.alt ===
          `Character image of ${createFullName(pepe.characterData.name, pepe.characterData.lastName)}`,
      );

      const doesLuisImageExist = images.some(
        (image) =>
          image.alt ===
          `Character image of ${createFullName(luis.characterData.name, luis.characterData.lastName)}`,
      );

      expect(doesPepeImageExist).toBeTruthy();
      expect(doesLuisImageExist).toBeTruthy();
    });

    test("Then it should show Pepe Laemaez y Luis Luisez name's inside a heading", () => {
      const charactersCards = createCharactersCardsList(characters);

      screen.appendChild(charactersCards);

      const fullNames = [...screen.querySelectorAll("h2")];

      const doesPepeNameExist = fullNames.some(
        (heading) =>
          heading.textContent ===
          `${createFullName(pepe.characterData.name, pepe.characterData.lastName)}`,
      );

      const doesLuisNameExist = fullNames.some(
        (heading) =>
          heading.textContent ===
          `${createFullName(luis.characterData.name, luis.characterData.lastName)}`,
      );

      expect(doesPepeNameExist).toBeTruthy();
      expect(doesLuisNameExist).toBeTruthy();
    });
  });
});
