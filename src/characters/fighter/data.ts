import Fighter from "./Fighter/Fighter.js";

export const jaime: Fighter = new Fighter(
  {
    name: "Jaime",
    lastName: "Lannister",
    age: 43,
    image: "images/jaime.webp",
  },
  "Oathkeeper",
  10,
);

export const daenerys: Fighter = new Fighter(
  {
    name: "Daenerys",
    lastName: "Targaryen",
    age: 16,
    image: "images/daenerys.webp",
  },
  "Drogon",
  9,
);
