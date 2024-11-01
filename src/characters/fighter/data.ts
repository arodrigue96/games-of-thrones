import createFighter from "./factory/createFighter.js";
import { type Fighter } from "./types";

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
