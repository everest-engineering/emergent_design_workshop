import {assembleWorld} from "../../src/assembly";
import {Time} from "../../src/types";

describe("Feeding cats", () => {
  const world = assembleWorld();

  const start: Time = {
    hour: 0,
    minute: 0,
  }

  const end: Time = {
    hour: 23,
    minute: 30,
  };

  it("feeds the cats", () => {
    const cats = world.run(start, end)

    expect(cats.length).toBeGreaterThanOrEqual(1)

    expect(cats.every((cat) => cat.isFed())).toBe(true);
  })
})