import {
  addWeeks,
  getISODay,
  getISOWeek,
  getWeek,
  getYear,
  isSaturday,
  isSunday,
} from "date-fns";

import { AarType, DagType, ScheduleProps, UkeType } from "../types/DayTypes";
import { WeekSchedule } from "./WeekSchedule";

const getNextWeek = (dagensDato: Date): number => {
  return getISOWeek(addWeeks(dagensDato, 1));
};

const getWeekSchedule = (
  ukenummer: number,
  naar: number,
  walkingSchedule: AarType[]
): DagType[] | undefined =>
  walkingSchedule
    .find((aar) => aar.year === naar)
    ?.weeks?.find((uke) => uke.weekNumber === ukenummer)?.days;

const Schedule = ({ dagensDato, walkingSchedule }: ScheduleProps) => {
  const dagsnummer = getISODay(dagensDato);
  const ukenummer = getISOWeek(dagensDato);
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return (
      <WeekSchedule
        currentDay={dagsnummer}
        displayWeek={getNextWeek(dagensDato)}
        currentWeek={ukenummer}
        weekSchedule={getWeekSchedule(
          ukenummer + 1,
          getYear(dagensDato),
          walkingSchedule
        )}
      />
    );
  }
  return (
    <>
      <WeekSchedule
        currentDay={dagsnummer}
        displayWeek={ukenummer}
        currentWeek={ukenummer}
        weekSchedule={getWeekSchedule(
          ukenummer,
          getYear(dagensDato),
          walkingSchedule
        )}
      />
    </>
  );
};

export { Schedule };
