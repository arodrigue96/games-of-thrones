import { jaime } from "../fighter/data.js";
import { createSquire } from "./factory/createSquire.js";
import { type Squire } from "./types";

export const bronn: Squire = createSquire(
  { name: "Bronn", age: 40, image: "images/bronn.webp" },
  8,
  jaime,
);
