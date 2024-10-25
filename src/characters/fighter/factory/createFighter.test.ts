import { type Fighter } from "../types";
import createFighter from "./createFighter";

describe("Given the createFighter function", () => {
  describe("When it's called", () => {
    const name = "Aniol";
    const lastName = "Rodriguez";
    const age = 28;
    const skillLevel = 10;
    const weapon = "Bitcoin";

    test("Then it should return an alive fighter", () => {
      const newFighter: Fighter = createFighter(
        { name, lastName, age },
        skillLevel,
        weapon,
      );

      expect(newFighter.isAlive).toBeTruthy();
    });

    test("Then it should return a fighter who says 'Primero pego y luego pregunto'", () => {
      const expectedPhrase = "Primero pego y luego pregunto";

      const newFighter: Fighter = createFighter(
        { name, lastName, age },
        skillLevel,
        weapon,
      );

      const phrase = newFighter.speak();

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return a fighter who can die", () => {
      const newFighter: Fighter = createFighter(
        { name, lastName, age },
        skillLevel,
        weapon,
      );

      newFighter.die();
      const isFighterAlive = newFighter.isAlive;

      expect(isFighterAlive).toBeFalsy();
    });
  });
});
