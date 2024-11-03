import Fighter from "./Fighter";

describe("Given the Fighter class", () => {
  describe("When an instance is created", () => {
    const name = "Aniol";
    const lastName = "Rodriguez";
    const age = 28;
    const image = "";
    const weapon = "Bitcoin";
    const skillLevel = 10;

    test("Then it should return an alive fighter", () => {
      const newFighter: Fighter = new Fighter(
        { name, lastName, age, image },
        weapon,
        skillLevel,
      );

      expect(newFighter.isAlive).toBeTruthy();
    });

    test("Then it should return a fighter who says 'Primero pego y luego pregunto'", () => {
      const expectedPhrase = "Primero pego y luego pregunto";

      const newFighter: Fighter = new Fighter(
        { name, lastName, age, image },
        weapon,
        skillLevel,
      );

      const phrase = newFighter.speak();

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return a fighter who can die", () => {
      const newFighter: Fighter = new Fighter(
        { name, lastName, age, image },
        weapon,
        skillLevel,
      );

      newFighter.die();
      const isFighterAlive = newFighter.isAlive;

      expect(isFighterAlive).toBeFalsy();
    });
  });
});
