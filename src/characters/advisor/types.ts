import type { CharacterData } from "../character/types";

export interface Advisor extends CharacterData {
  advisedCharacter: "king" | "fighter" | "squire";
  speak: () => "No sé por qué, pero creo que voy a morir pronto";
}
