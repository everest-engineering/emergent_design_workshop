import {time, Time} from "../../../src/time";
import {Cat, CatImpl} from "../../../src/cat";
import {World, WorldImpl} from "../../../src/world";
import {HumanImpl} from "../../../src/human";
import {FeedingSchedule, FeedingTime} from "../../../src/schedule";

type CatArgs = { feedingTime?: Time, schedule?: FeedingSchedule };

export function human() {
  return new HumanImpl();
}

export function feedingSchedule(...times: Time[]) {
  return times.map((time) => [time, human()] as FeedingTime);
}

export function cat({ feedingTime, schedule }: CatArgs): Cat {
  if (!schedule) {
    if (!feedingTime) {
      feedingTime = time(12, 0);
    }
    schedule = feedingSchedule(feedingTime)
  }
  return new CatImpl(schedule);
}


type WorldArgs = { cats?: Cat[] }

export function world({ cats }: WorldArgs): World {
  if (!cats) {
    cats = [
      cat({ feedingTime: time(11, 30) }),
      cat({ feedingTime: time(12, 0) }),
      cat({ feedingTime: time(12, 30) })]
  }
  return new WorldImpl(cats);
}
