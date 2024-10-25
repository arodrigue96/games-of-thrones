import createAdvisor from "../advisor/factory/createAdvisor";
import { type Advisor } from "../advisor/types";
import createFighter from "../fighter/factory/createFighter";
import { type Fighter } from "../fighter/types";
import createKing from "../king/factory/createKing";
import { type King } from "../king/types";

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

export const tyrion: Advisor = createAdvisor(
  {
    name: "Tyrion",
    lastName: "Lannister",
    age: 32,
  },
  daenerys,
);
