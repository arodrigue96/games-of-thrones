import { daenerys } from "../../fighter/data";
import Squire from "./Squire";

describe("Given the Squire class", () => {
  describe("When an instance is created", () => {
    const name = "Aniol";
    const lastName = "Rodriguez";
    const age = 28;
    const image = "";
    const pelotismLevel = 9;
    const servedCharacter = daenerys;

    test("Then it should return an alive Squire", () => {
      const newSquire: Squire = new Squire(
        { name, lastName, age, image },
        servedCharacter,
        pelotismLevel,
      );

      expect(newSquire.isAlive).toBeTruthy();
    });

    test("Then it should return a Squire who says 'Soy un looser'", () => {
      const expectedPhrase = "Soy un loser";

      const newSquire: Squire = new Squire(
        { name, lastName, age, image },
        servedCharacter,
        pelotismLevel,
      );

      expect(newSquire.speak()).toBe(expectedPhrase);
    });

    test("Then it should return a Squire who can die", () => {
      const newSquire: Squire = new Squire(
        { name, lastName, age, image },
        servedCharacter,
        pelotismLevel,
      );

      newSquire.die();
      const isSquireAlive = newSquire.isAlive;

      expect(isSquireAlive).toBeFalsy();
    });

    test("Then it should return a Squire who serves a Fighter", () => {
      const newSquire: Squire = new Squire(
        { name, lastName, age, image },
        servedCharacter,
        pelotismLevel,
      );

      expect(newSquire.servedCharacter).toBe(servedCharacter);
    });
  });
});
