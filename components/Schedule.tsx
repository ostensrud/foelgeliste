import { getISODay, getISOWeek, isSaturday, isSunday } from "date-fns";
import { ScheduleProps } from "../types/DayTypes";
import { WeekSchedule } from "./WeekSchedule";

const Schedule = ({ dagensDato, walkingSchedule }: ScheduleProps) => {
  const dagsnummer = getISODay(dagensDato);
  const ukenummer = getISOWeek(dagensDato);
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return (
      <WeekSchedule
        currentDay={dagsnummer}
        displayWeek={ukenummer + 1}
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
