import { daenerys } from "../fighter/data";
import { joffrey } from "../king/data";
import getCharacterPhrases from "./getCharacterPhrases";

describe("Given the getCharacterPhrases function", () => {
  describe("When it receives a Fighter and a King character", () => {
    test("Then it should return the Fighter and King phrases", () => {
      const expectedPhrases = [
        "Vais a morir todos",
        "Primero pego y luego pregunto",
      ];
      const phrases = getCharacterPhrases([joffrey, daenerys]);

      expect(phrases).toStrictEqual(expectedPhrases);
    });
  });
});
