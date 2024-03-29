import {compare, next, Past, Present, Time} from "./time";
import {Cat} from "./cat";

export interface World {
  run(startTime: Time, endTime: Time): Readonly<Cat[]>
}

export class WorldImpl implements World {
  private cats: Cat[];

  constructor(cats: Cat[]) {
    this.cats = cats;
  }
  run(startTime: Time, endTime: Time): Readonly<Cat[]> {
    let currentTick = startTime;

    while (true) {
      this.cats.forEach((cat) => {
        cat.feedingSchedule.forEach(([feedingTime, human]) => {
          if (compare(feedingTime, currentTick) === Present) {
            cat.feed()
          }
        })
      });

      if (compare(currentTick, endTime) === Present) {
        break;
      } else {
        currentTick = next(currentTick)
      }
    }

    return this.cats;
  }
}