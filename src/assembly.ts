import {World, WorldImpl} from "./world";
import {CatImpl} from "./cat";

export function assembleWorld(): World {
  const cats = [new CatImpl(), new CatImpl(), new CatImpl()];

  return new WorldImpl(cats);
}