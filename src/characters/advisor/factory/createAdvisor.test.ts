import createAdvisor from "./createAdvisor";
import { type Advisor } from "../types";
import { daenerys } from "../../data/characters";

describe("Given the createAdvisor function", () => {
  const name = "Aniol";
  const lastName = "Rodriguez";
  const age = 28;

  describe("When called", () => {
    test("Then it should return an alive Advisor", () => {
      const newAdvisor: Advisor = createAdvisor(
        { name, lastName, age },
        daenerys,
      );

      expect(newAdvisor.isAlive).toBeTruthy();
    });

    test("Then it should return an Advisor who says 'No sé por qué, pero creo que voy a morir pronto'", () => {
      const expectedPhrase = "No sé por qué, pero creo que voy a morir pronto";

      const newAdvisor: Advisor = createAdvisor(
        { name, lastName, age },
        daenerys,
      );

      expect(newAdvisor.phrase).toBe(expectedPhrase);
    });

    test("Then it should return an Advisor who can die", () => {
      const newAdvisor: Advisor = createAdvisor(
        { name, lastName, age },
        daenerys,
      );

      newAdvisor.die();
      const isAdvisorAlive = newAdvisor.isAlive;

      expect(isAdvisorAlive).toBeFalsy();
    });
  });
});
