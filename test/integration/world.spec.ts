import {assembleWorld} from "../../src/assembly";
import {compare, Past, Time} from "../../src/types";
import {World} from "../../src/world";

describe("Feeding cats", () => {
  let world: World;

  beforeEach(() => {
    world = assembleWorld();
  })

  describe("across a full day", () => {
    const start: Time = {
      hour: 0,
      minute: 0,
    }

    const end: Time = {
      hour: 23,
      minute: 30,
    };

    it("feeds all the cats", () => {
      const cats = world.run(start, end);

      expect(cats.length).toBeGreaterThanOrEqual(1);

      expect(cats.every((cat) => cat.isFed())).toBe(true);
    })
  })

  describe("over a limited period", () => {
    const start: Time = {
      hour: 0,
      minute: 0,
    }

    const end: Time = {
      hour: 11,
      minute: 30,
    };

    it("feeds only the cats whose feeding time has passed", () => {
      const cats = world.run(start, end);

      const fedCats = cats.filter((cat) => cat.isFed())
      expect(fedCats.length).toBeLessThan(cats.length);

      expect(fedCats.every((cat) => compare(end, cat.feedingTime) === Past)).toBe(true);
    })
  })
})