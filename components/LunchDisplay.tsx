import { isSaturday, isSunday } from "date-fns";
import { WalkingScheduleType } from "../types/DayTypes";
import { Lunch } from "./Assets";

interface LunchDisplayType {
  walkingSchedule: WalkingScheduleType;
  ukenummer: string;
  ukedag: number;
  dato: Date;
}
export const LunchDisplay = ({
  walkingSchedule,
  ukenummer,
  ukedag,
  dato: dagensDato,
}: LunchDisplayType) => {
  if (
    walkingSchedule[ukenummer].erFerieUke ||
    isSaturday(dagensDato) ||
    isSunday(dagensDato)
  ) {
    return null;
  } else if (walkingSchedule[ukenummer].dager?.[ukedag].matservering) {
    return <Lunch />;
  }
  return null;
};
