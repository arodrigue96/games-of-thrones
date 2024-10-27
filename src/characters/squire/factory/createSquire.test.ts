import { daenerys } from "../../data/characters";
import { type Squire } from "../types";
import { createSquire } from "./createSquire";

describe("Given the createSquire function", () => {
  describe("When called", () => {
    const name = "Aniol";
    const lastName = "Rodriguez";
    const age = 28;
    const image = "images/bronn.webp";
    const pelotismLevel = 9;
    const servedCharacter = daenerys;

    test("Then it should return an alive Squire", () => {
      const newSquire: Squire = createSquire(
        { name, lastName, age, image },
        pelotismLevel,
        servedCharacter,
      );

      expect(newSquire.isAlive).toBeTruthy();
    });

    test("Then it should return a Squire who says 'Soy un looser'", () => {
      const expectedPhrase = "Soy un loser";

      const newSquire: Squire = createSquire(
        { name, lastName, age, image },
        pelotismLevel,
        servedCharacter,
      );

      expect(newSquire.phrase).toBe(expectedPhrase);
    });

    test("Then it should return a Squire who can die", () => {
      const newSquire: Squire = createSquire(
        { name, lastName, age, image },
        pelotismLevel,
        servedCharacter,
      );

      newSquire.die();
      const isSquireAlive = newSquire.isAlive;

      expect(isSquireAlive).toBeFalsy();
    });

    test("Then it should return a Squire who serves a Fighter", () => {
      const newSquire: Squire = createSquire(
        { name, lastName, age, image },
        pelotismLevel,
        servedCharacter,
      );

      expect(newSquire.servedCharacter).toBe(servedCharacter);
    });
  });
});
