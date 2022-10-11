import { isSaturday, isSunday } from "date-fns";
import { AarType } from "../types/DayTypes";
import { Lunch } from "./Assets";

interface LunchDisplayType {
  walkingSchedule: AarType;
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
