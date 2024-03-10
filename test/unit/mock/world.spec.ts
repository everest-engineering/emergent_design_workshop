import {Cat} from "../../../src/cat";
import {World, WorldImpl} from "../../../src/world";
import {Time, time} from "../../../src/time";
import {FeedingSchedule} from "../../../src/schedule";


function mockCat(...feedingTimes: Time[]): Cat {
  const feedingSchedule: FeedingSchedule = feedingTimes.map((feedTime) => [feedTime, {}])
  return {
    feedingSchedule,
    isFed: jest.fn(),
    feed: jest.fn(),
    numberFeeds: jest.fn(),
  };
}

describe("WorldImpl (mock)", () => {
  let cat1: Cat;
  let cat2: Cat;
  let greedyCat: Cat;

  let catWorld: World;

  const midnight = time(0, 0);
  const endOfDay = time(23, 30);

  const midday = time(12, 0);

  beforeEach(() => {
    cat1 = mockCat(midnight)
    cat2 = mockCat(midday)
    greedyCat = mockCat(
      time(22, 30),
      time(23, 0),
      endOfDay)

    catWorld = new WorldImpl([cat1, cat2, greedyCat]);
  })

  describe("running simulation for full day period", () => {

    it("should trigger all cats to be fed", () => {

      catWorld.run(midnight, endOfDay)

      expect(cat1.feed).toBeCalledTimes(1);
      expect(cat2.feed).toBeCalledTimes(1);
      expect(greedyCat.feed).toBeCalledTimes(3);
    })
  })

  describe("running simulation for part day period", () => {

    it("should trigger those cats whose feeding time has passed", () => {
      catWorld.run(midnight, midday)

      expect(cat1.feed).toBeCalledTimes(1);
      expect(cat2.feed).toBeCalledTimes(1);
      expect(greedyCat.feed).toBeCalledTimes(0);
    })
  })
})