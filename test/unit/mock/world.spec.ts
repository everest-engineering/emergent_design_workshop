import {Cat} from "../../../src/cat";
import {World, WorldImpl} from "../../../src/world";
import {Time, time} from "../../../src/types";


function mockCat(feedingTime: Time): Cat {
  return {
    feedingTime: feedingTime,
    isFed: jest.fn(),
    feed: jest.fn(),
  };
}

describe("WorldImpl (mock)", () => {
  let cat1: Cat;
  let cat2: Cat;
  let cat3: Cat;

  let catWorld: World;

  const midnight = time(0, 0);
  const endOfDay = time(23, 30);

  const midday = time(12, 0);

  beforeEach(() => {
    cat1 = mockCat(midnight)
    cat2 = mockCat(midday)
    cat3 = mockCat(endOfDay)

    catWorld = new WorldImpl([cat1, cat2, cat3]);
  })

  describe("running simulation for full day period", () => {

    it("should trigger all cats to be fed", () => {

      catWorld.run(midnight, endOfDay)

      expect(cat1.feed).toBeCalledTimes(1);
      expect(cat2.feed).toBeCalledTimes(1);
      expect(cat3.feed).toBeCalledTimes(1);
    })
  })

  describe("running simulation for part day period", () => {

    it("should trigger those cats whose feeding time has passed", () => {
      catWorld.run(midnight, midday)

      expect(cat1.feed).toBeCalledTimes(1);
      expect(cat2.feed).toBeCalledTimes(1);
      expect(cat3.feed).toBeCalledTimes(0);
    })
  })


})