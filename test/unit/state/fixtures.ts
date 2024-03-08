import {time, Time} from "../../../src/types";
import {Cat, CatImpl} from "../../../src/cat";
import {World, WorldImpl} from "../../../src/world";

type CatArgs = { feedingTime?: Time };

export function cat({ feedingTime }: CatArgs): Cat {
  if (!feedingTime) {
    feedingTime = time(12, 0);
  }
  return new CatImpl(feedingTime);
}


type WorldArgs = { cats?: Cat[] }

export function world({ cats }: WorldArgs): World {
  if (!cats) {
    cats = [
      cat({ feedingTime: time(11, 30) }),
      cat({ feedingTime: time(12, 0) }),
      cat({ feedingTime: time(12, 30) })]
  }
  return new WorldImpl(cats);
}
