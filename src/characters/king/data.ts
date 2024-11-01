import createKing from "./factory/createKing.js";
import { type King } from "./types";

export const joffrey: King = createKing(
  {
    name: "Joffrey",
    lastName: "Baratheon",
    age: 13,
    image: "images/joffrey.webp",
  },
  2,
);
