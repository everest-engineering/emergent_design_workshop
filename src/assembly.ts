import {World, WorldImpl} from "./world";
import {CatImpl} from "./cat";
import {time} from "./types";

export function assembleWorld(): World {
  const cats = [
    new CatImpl(time(0, 30)),
    new CatImpl(time(11, 0)),
    new CatImpl(time(15, 30))
  ];

  return new WorldImpl(cats);
}