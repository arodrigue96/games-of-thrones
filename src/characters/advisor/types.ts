import type { Character } from "../character/types";

export interface Advisor extends Character {
  advisedCharacter: "king" | "fighter" | "squire";
  speak: () => "No sé por qué, pero creo que voy a morir pronto";
}
