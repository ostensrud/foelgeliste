import {
  addWeeks,
  getISODay,
  getISOWeek,
  isSaturday,
  isSunday,
} from "date-fns";

import { ScheduleProps } from "../types/DayTypes";
import { WeekSchedule } from "./WeekSchedule";

const getNextWeek = (dagensDato: Date): number => {
  return getISOWeek(addWeeks(dagensDato, 1));
};

const Schedule = ({ dagensDato, walkingSchedule }: ScheduleProps) => {
  const dagsnummer = getISODay(dagensDato);
  const ukenummer = getISOWeek(dagensDato);
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return (
      <WeekSchedule
        currentDay={dagsnummer}
        displayWeek={getNextWeek(dagensDato)}
        currentWeek={ukenummer}
        walkingSchedule={walkingSchedule}
      />
    );
  }
  return (
    <>
      <WeekSchedule
        currentDay={dagsnummer}
        displayWeek={ukenummer}
        currentWeek={ukenummer}
        walkingSchedule={walkingSchedule}
      />
    </>
  );
};

export { Schedule };
