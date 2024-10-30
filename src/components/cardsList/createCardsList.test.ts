import createCardsList from "./createCardsList";
import createFighter from "../../characters/fighter/factory/createFighter";
import createKing from "../../characters/king/factory/createKing";
import { type King } from "../../characters/king/types";
import { type Fighter } from "../../characters/fighter/types";
import { type Character } from "../../characters/character/types";

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
      const images = screen.querySelectorAll("img");

      const pepeImageExists = [...images].some(
        (image) =>
          image.alt ===
          `Character image of ${pepe.name} ${pepe.lastName ?? ""}`,
      );

      const luisImageExists = [...images].some(
        (image) =>
          image.alt ===
          `Character image of ${luis.name} ${luis.lastName ?? ""}`,
      );

      expect(pepeImageExists).toBeTruthy();
      expect(luisImageExists).toBeTruthy();
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
