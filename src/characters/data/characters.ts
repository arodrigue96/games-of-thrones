import createFighter from "../fighter/factory/createFighter.js";
import { type Fighter } from "../fighter/types";

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
