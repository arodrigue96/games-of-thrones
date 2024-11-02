import Advisor from "./Advisor/Advisor.js";
import { daenerys } from "../fighter/data.js";

export const tyrion: Advisor = new Advisor(
  {
    name: "Tyrion",
    lastName: "Lannister",
    age: 32,
    image: "images/tyrion.webp",
  },
  daenerys,
);
