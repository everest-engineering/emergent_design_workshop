import {Time} from "./time";
import {Human} from "./human";

export type FeedingTime = [Time, Human];

export type FeedingSchedule = FeedingTime[];