type Hour = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

type MinuteTick = 0 | 30

export type Time = {
  hour: Hour;
  minute: MinuteTick;
};

export const Past = "past";
export const Present = "present";
export const Future = "future";

export type TimeComparison = "past" | "present" | "future";

export function time(hour: Hour, minute: MinuteTick): Time {
  return { hour, minute };
}

function numberify({ hour, minute }: Time): number {
  return hour * 60 + minute;
}

export function compare(reference: Time, comparison: Time): TimeComparison {
  const diff = numberify(comparison) - numberify(reference);
  if (diff === 0) {
    return Present;
  } else if (diff < 0) {
    return Past;
  } else {
    return Future;
  }
}

export function next({ hour, minute }: Time): Time {
  if (minute === 30) {
    if (hour === 23) {
      hour = 0;
    } else {
      hour += 1;
    }
    minute = 0;
  } else {
    minute = 30;
  }

  return time(hour, minute);
}