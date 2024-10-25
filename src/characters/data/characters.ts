import createFighter from "../fighter/factory/createFighter.js";
import { type Fighter } from "../fighter/types";

const skillLevel = 10;
const weapon = "Oathkeeper";

export const jaime: Fighter = createFighter(
  { name: "Jaime", lastName: "Lannister", age: 43 },
  skillLevel,
  weapon,
);

export const daenerys: Fighter = createFighter(
  { name: "Daenerys", lastName: "Targaryen", age: 16 },
  9,
  "Drogon",
);
