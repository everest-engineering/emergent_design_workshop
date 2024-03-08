import {cat, world} from "./fixtures";
import {time} from "../../../src/types";
import {Cat} from "../../../src/cat";
import {World} from "../../../src/world";

describe("WorldImpl", () => {
  let cat1: Cat;
  let cat2: Cat;
  let cat3: Cat;

  let catWorld: World;

  const midnight = time(0, 0);
  const endOfDay = time(23, 30);

  const midday = time(12, 0);

  beforeEach(() => {
    cat1 = cat({ feedingTime: time(0, 0)})
    cat2 = cat({ feedingTime: time(12, 0)})
    cat3 = cat({ feedingTime: time(23, 30)})

    const cats = [cat1, cat2, cat3]
    catWorld = world({ cats })
  })

  describe("running simulation for full day period", () => {

    it("should trigger all cats to be fed", () => {

      catWorld.run(midnight, endOfDay)

      expect(cat1.isFed()).toBe(true);
      expect(cat2.isFed()).toBe(true);
      expect(cat3.isFed()).toBe(true);
    })
  })
  describe("running simulation for part day period", () => {

    it("should trigger those cats whose feeding time has passed", () => {
      catWorld.run(midnight, midday)

      expect(cat1.isFed()).toBe(true);
      expect(cat2.isFed()).toBe(true);
      expect(cat3.isFed()).toBe(false);
    })
  })
});