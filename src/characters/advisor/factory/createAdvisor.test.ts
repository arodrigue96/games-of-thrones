import createAdvisor from "./createAdvisor";
import { type Advisor } from "../types";
import { daenerys } from "../../fighter/data";

describe("Given the createAdvisor function", () => {
  const name = "Aniol";
  const lastName = "Rodriguez";
  const age = 28;
  const image = "images/tyrion.webp";

  describe("When called", () => {
    test("Then it should return an alive Advisor", () => {
      const newAdvisor: Advisor = createAdvisor(
        { name, lastName, age, image },
        daenerys,
      );

      expect(newAdvisor.isAlive).toBeTruthy();
    });

    test("Then it should return an Advisor who says 'No sé por qué, pero creo que voy a morir pronto'", () => {
      const expectedPhrase = "No sé por qué, pero creo que voy a morir pronto";

      const newAdvisor: Advisor = createAdvisor(
        { name, lastName, age, image },
        daenerys,
      );

      expect(newAdvisor.phrase).toBe(expectedPhrase);
    });

    test("Then it should return an Advisor who can die", () => {
      const newAdvisor: Advisor = createAdvisor(
        { name, lastName, age, image },
        daenerys,
      );

      newAdvisor.die();
      const isAdvisorAlive = newAdvisor.isAlive;

      expect(isAdvisorAlive).toBeFalsy();
    });
  });
});
