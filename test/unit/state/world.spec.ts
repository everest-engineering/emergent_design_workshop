import {cat, feedingSchedule, world} from "./fixtures";
import {time} from "../../../src/time";
import {Cat} from "../../../src/cat";
import {World} from "../../../src/world";

describe("WorldImpl (state)", () => {
  let cat1: Cat;
  let cat2: Cat;
  let greedyCat: Cat;

  let catWorld: World;

  const midnight = time(0, 0);
  const endOfDay = time(23, 30);

  const midday = time(12, 0);

  beforeEach(() => {
    const greedyCatSchedule = feedingSchedule(
      time(14, 30),
      time(15, 0),
      time(23, 30))

    cat1 = cat({ feedingTime: time(0, 0)})
    cat2 = cat({ feedingTime: time(12, 0)})
    greedyCat = cat({ schedule: greedyCatSchedule})

    const cats = [cat1, cat2, greedyCat]
    catWorld = world({ cats })
  })

  describe("running simulation for full day period", () => {

    it("should trigger all cats to be fed", () => {

      catWorld.run(midnight, endOfDay)

      expect(cat1.isFed()).toBe(true);
      expect(cat1.numberFeeds()).toEqual(1);
      expect(cat2.isFed()).toBe(true);
      expect(cat2.numberFeeds()).toEqual(1);
      expect(greedyCat.isFed()).toBe(true);
      expect(greedyCat.numberFeeds()).toEqual(3);
    })
  })
  describe("running simulation for part day period", () => {

    it("should trigger those cats whose feeding time has passed", () => {
      catWorld.run(midnight, midday)

      expect(cat1.isFed()).toBe(true);
      expect(cat2.isFed()).toBe(true);
      expect(greedyCat.isFed()).toBe(false);
    })
  })
});