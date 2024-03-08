import {Time} from "./types";

export interface Cat {
  readonly feedingTime: Time;

  isFed(): boolean;
  feed(): void;
}

export class CatImpl implements Cat{
  public readonly feedingTime: Time;
  private fed: boolean = false;

  constructor(feedingTime: Time) {
    this.feedingTime = feedingTime;
  }

  isFed(): boolean {
    return this.fed;
  }

  feed(): void {
    this.fed = true;
  }
}