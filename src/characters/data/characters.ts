import createAdvisor from "../advisor/factory/createAdvisor.js";
import { type Advisor } from "../advisor/types";
import createFighter from "../fighter/factory/createFighter.js";
import { type Fighter } from "../fighter/types";
import createKing from "../king/factory/createKing.js";
import { type King } from "../king/types";
import { createSquire } from "../squire/factory/createSquire.js";
import { type Squire } from "../squire/types";
import type { Character } from "../character/types";

export const joffrey: King = createKing(
  {
    name: "Joffrey",
    lastName: "Baratheon",
    age: 13,
    image: "images/joffrey.webp",
  },
  2,
);

export const jaime: Fighter = createFighter(
  {
    name: "Jaime",
    lastName: "Lannister",
    age: 43,
    image: "images/jaime.webp",
  },
  10,
  "Oathkeeper",
);

export const daenerys: Fighter = createFighter(
  {
    name: "Daenerys",
    lastName: "Targaryen",
    age: 16,
    image: "images/daenerys.webp",
  },
  9,
  "Drogon",
);

export const tyrion: Advisor = createAdvisor(
  {
    name: "Tyrion",
    lastName: "Lannister",
    age: 32,
    image: "images/tyrion.webp",
  },
  daenerys,
);

export const bronn: Squire = createSquire(
  { name: "Bronn", age: 40, image: "images/bronn.webp" },
  8,
  jaime,
);

export const characters: Character[] = [
  joffrey,
  jaime,
  daenerys,
  tyrion,
  bronn,
];
