import {FeedingSchedule} from "./schedule";

export interface Cat {
  readonly feedingSchedule: FeedingSchedule;

  isFed(): boolean;
  feed(): void;
  numberFeeds(): number;
}

export class CatImpl implements Cat{
  public readonly feedingSchedule: FeedingSchedule;
  private fed: boolean = false;
  private feeds: number = 0;

  constructor(feedingSchedule: FeedingSchedule) {
    this.feedingSchedule = feedingSchedule;
  }

  isFed(): boolean {
    return this.fed;
  }

  feed(): void {
    this.fed = true;
    this.feeds++;
  }

  numberFeeds(): number {
    return this.feeds;
  }
}