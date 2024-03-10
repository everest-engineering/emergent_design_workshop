import {compare, Future, next, Past, Present, time} from "../../src/time";

describe("compare()", () => {
  describe("when comparison time is in the past", () => {
    const ref = time(12, 0);
    const past = time(11, 30);

    it("should say time is in the past", () => {
      expect(compare(ref, past)).toEqual(Past)
    })
  })

  describe("when comparison time is in the present", () => {
    const ref = time(12, 0);
    const present = time(12, 0);

    it("should say time is in the past", () => {
      expect(compare(ref, present)).toEqual(Present)
    })
  })

  describe("when comparison time is in the future", () => {
    const ref = time(12, 0);
    const future = time(12, 30);

    it("should say time is in the past", () => {
      expect(compare(ref, future)).toEqual(Future)
    })
  })
})

describe("next()", () => {
  const midnight = time(0, 0);
  const midday = time(12, 0);
  const twelveThirty = time(12, 30);
  const onePM = time(13, 0);
  const endOfDay = time(23, 30);

  describe("when not at the boundaries", () => {
    it("gives the next time in series", () => {
      expect(compare(twelveThirty, next(midday))).toBe(Present)
      expect(compare(onePM, next(twelveThirty))).toBe(Present)
    })
  })

  describe("when at the end of day", () => {
    it("gives the next time in series", () => {
      expect(compare(midnight, next(endOfDay))).toBe(Present)
    })
  })

})