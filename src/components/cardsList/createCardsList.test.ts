import createCardsList from "./createCardsList";
import createFighter from "../../characters/fighter/factory/createFighter";
import createKing from "../../characters/king/factory/createKing";
import { type King } from "../../characters/king/types";
import { type Fighter } from "../../characters/fighter/types";

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
        image: "images/jaime.webp",
      },
      9,
      "Drogon",
    );

    const luis: King = createKing(
      {
        name: "Luis",
        lastName: "Luisez",
        age: 15,
        image: "images/joffrey.webp",
      },
      2,
    );
    const characters = [pepe, luis];

    test("Then it should show Pepe and Luis images", () => {
      const charactersCards = createCardsList(characters);

      screen.appendChild(charactersCards);
      const images = screen.querySelectorAll("img");

      images.forEach((image, position) => {
        console.log(`${position}: ${image.alt}`);
      });

      console.log(test);

      expect(images).not.toBeNull();
      expect(images[0]?.alt).toBe("Character image of Pepe Laemaez");
      expect(images[2].alt).toBe("Character image of Luis Luisez");
    });

    test("Then it should show Pepe Laemaez y Luis Luisez name's inside a heading", () => {
      const charactersCards = createCardsList(characters);

      screen.appendChild(charactersCards);

      const fullNames = screen.querySelectorAll("h2");

      expect(fullNames).not.toBeNull();
      expect(fullNames[0].textContent).toBe("Pepe Laemaez");
      expect(fullNames[1].textContent).toBe("Luis Luisez");
    });
  });
});
