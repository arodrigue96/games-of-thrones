import Advisor from "./Advisor/Advisor";
import { daenerys } from "../fighter/data";

describe("Given the Advisor class", () => {
  const name = "Aniol";
  const lastName = "Rodriguez";
  const age = 28;
  const image = "";

  describe("When called", () => {
    test("Then it should return an alive Advisor", () => {
      const newAdvisor: Advisor = new Advisor(
        { name, lastName, age, image },
        daenerys,
      );

      expect(newAdvisor.isAlive).toBeTruthy();
    });

    test("Then it should return an Advisor who says 'No sé por qué, pero creo que voy a morir pronto'", () => {
      const expectedPhrase = "No sé por qué, pero creo que voy a morir pronto";

      const newAdvisor: Advisor = new Advisor(
        { name, lastName, age, image },
        daenerys,
      );

      expect(newAdvisor.speak()).toBe(expectedPhrase);
    });

    test("Then it should return an Advisor who can die", () => {
      const newAdvisor: Advisor = new Advisor(
        { name, lastName, age, image },
        daenerys,
      );

      newAdvisor.die();
      const isAdvisorAlive = newAdvisor.isAlive;

      expect(isAdvisorAlive).toBeFalsy();
    });
  });
});
