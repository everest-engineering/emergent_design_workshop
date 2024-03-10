import {cat} from "./fixtures";
import {Cat} from "../../../src/cat";

describe("CatImpl (state)", () => {
  describe("feed()", () => {
    let cat1: Cat;

    beforeEach(() => {
      cat1 = cat({});
    })

    it("should set the fed flag", () => {
      expect(cat1.isFed()).toBe(false);
      cat1.feed();
      expect(cat1.isFed()).toBe(true);
    });

    it("should count the feeds", () => {
      expect(cat1.numberFeeds()).toEqual(0);
      cat1.feed();
      expect(cat1.numberFeeds()).toEqual(1);
      cat1.feed();
      expect(cat1.numberFeeds()).toEqual(2);
    });
  })
})