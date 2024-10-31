import { type Character } from "../../character/types";
import createFighter from "../../fighter/factory/createFighter.js";
import { type Fighter } from "../../fighter/types";
import createKing from "../../king/factory/createKing.js";
import { type King } from "../../king/types";
import createCardsList from "./createCardsList.js";

const screen = document.createElement("div");
afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the componenet cardsList", () => {
  describe("When it receives the characters Pepe and Luis", () => {
    const pepe: Fighter = createFighter(
      {
        name: "Pepe",
        lastName: "Laemaez",
        age: 22,
        image: "",
      },
      9,
      "Drogon",
    );

    const luis: King = createKing(
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
      const charactersCards = createCardsList(characters);

      screen.appendChild(charactersCards);
      const images = [...screen.querySelectorAll("img")];

      const doesPepeImageExists = images.some(
        (image) =>
          image.alt ===
          `Character image of ${pepe.name} ${pepe.lastName ?? ""}`,
      );

      const doesLuisImageExists = images.some(
        (image) =>
          image.alt ===
          `Character image of ${luis.name} ${luis.lastName ?? ""}`,
      );

      expect(doesPepeImageExists).toBeTruthy();
      expect(doesLuisImageExists).toBeTruthy();
    });

    test("Then it should show Pepe Laemaez y Luis Luisez name's inside a heading", () => {
      const charactersCards = createCardsList(characters);

      screen.appendChild(charactersCards);

      const fullNames = screen.querySelectorAll("h2");

      const pepeNameExists = [...fullNames].some(
        (heading) =>
          heading.textContent === `${pepe.name} ${pepe.lastName ?? ""}`,
      );

      const luisNameExists = [...fullNames].some(
        (heading) =>
          heading.textContent === `${luis.name} ${luis.lastName ?? ""}`,
      );

      expect(pepeNameExists).toBeTruthy();
      expect(luisNameExists).toBeTruthy();
    });
  });
});
