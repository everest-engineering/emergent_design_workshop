import {World, WorldImpl} from "./world";
import {CatImpl} from "./cat";
import {time} from "./time";
import {FeedingSchedule} from "./schedule";
import {HumanImpl} from "./human";

export function assembleWorld(): World {
  const schedule1: FeedingSchedule = [[time(0, 30), new HumanImpl()]]
  const schedule2: FeedingSchedule = [[time(11, 0), new HumanImpl()]]

  const greedyCatSchedule: FeedingSchedule = [
    [time(15, 30), new HumanImpl()],
    [time(16, 30), new HumanImpl()],
    [time(17, 30), new HumanImpl()],
  ]

  const cats = [
    new CatImpl(schedule1),
    new CatImpl(schedule2),
    new CatImpl(greedyCatSchedule)
  ];

  return new WorldImpl(cats);
}