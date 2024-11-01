import { daenerys } from "../fighter/data.js";
import createAdvisor from "./factory/createAdvisor.js";
import { type Advisor } from "./types";

export const tyrion: Advisor = createAdvisor(
  {
    name: "Tyrion",
    lastName: "Lannister",
    age: 32,
    image: "images/tyrion.webp",
  },
  daenerys,
);
