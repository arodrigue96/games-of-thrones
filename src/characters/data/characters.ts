import createFighter from "../fighter/factory/createFighter.js";
import { type Fighter } from "../fighter/types";
import createKing from "../king/factory/createKing.js";
import { type King } from "../king/types.js";

export const joffrey: King = createKing(
  {
    name: "Joffrey",
    lastName: "Baratheon",
    age: 13,
  },
  2,
);

export const jaime: Fighter = createFighter(
  { name: "Jaime", lastName: "Lannister", age: 43 },
  10,
  "Oathkeeper",
);

export const daenerys: Fighter = createFighter(
  { name: "Daenerys", lastName: "Targaryen", age: 16 },
  9,
  "Drogon",
);
