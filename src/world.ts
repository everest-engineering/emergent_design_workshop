import {Time} from "./types";
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
    return this.cats;
  }
}