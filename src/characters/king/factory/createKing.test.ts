import createKing from "./createKing";
import { type King } from "../types";

describe("Given the createKing function", () => {
  describe("When called", () => {
    const name = "Aniol";
    const lastName = "Rodriguez";
    const age = 28;
    const image = "images/joffrey.webp";
    const yearsOfReign = 5;

    test("Then it should return an alive King", () => {
      const newKing: King = createKing(
        { name, lastName, age, image },
        yearsOfReign,
      );

      expect(newKing.isAlive).toBeTruthy();
    });

    test("Then it should return a King who says 'Vais a morir todos'", () => {
      const expectedPhrase = "Vais a morir todos";

      const newKing: King = createKing(
        { name, lastName, age, image },
        yearsOfReign,
      );

      expect(newKing.phrase).toBe(expectedPhrase);
    });

    test("Then it should return a King who can die", () => {
      const newKing: King = createKing(
        { name, lastName, age, image },
        yearsOfReign,
      );

      newKing.die();
      const isKingAlive = newKing.isAlive;

      expect(isKingAlive).toBeFalsy();
    });
  });
});
