import {assembleWorld} from "../../src/assembly";
import {compare, Past, time, Time} from "../../src/time";
import {World} from "../../src/world";

describe("Feeding cats", () => {
  let world: World;

  beforeEach(() => {
    world = assembleWorld();
  })

  describe("across a full day", () => {
    const start: Time = time(0, 0);
    const end: Time = time(23, 30);

    it("feeds all the cats", () => {
      const cats = world.run(start, end);

      expect(cats.length).toBeGreaterThanOrEqual(1);

      expect(cats.every((cat) => cat.isFed())).toBe(true);
    })
    it("feeds cats with multiple humans more than once", () => {
      const cats = world.run(start, end);

      expect(cats.length).toBeGreaterThanOrEqual(1);
      expect(cats.some((cat) => cat.numberFeeds() > 1)).toBe(true);
    })
  })

  describe("over a limited period", () => {
    const start: Time = time(0, 0);
    const end: Time = time(11, 30);

    it("feeds only the cats whose feeding time has passed", () => {
      const cats = world.run(start, end);

      const fedCats = cats.filter((cat) => cat.isFed())
      expect(fedCats.length).toBeLessThan(cats.length);

      expect(fedCats
        .every((cat) =>
          cat.feedingSchedule.every(([feedingTime, human]) =>
            compare(end, feedingTime) === Past)))
        .toBe(true);
    })
  })
})