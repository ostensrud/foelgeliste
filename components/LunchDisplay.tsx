import { WalkingScheduleType } from "../types/DayTypes";
import { Lunch } from "./Assets";

interface LunchDisplayType {
  walkingSchedule: WalkingScheduleType;
  ukenummer: string;
  ukedag: number;
}
export const LunchDisplay = ({
  walkingSchedule,
  ukenummer,
  ukedag,
}: LunchDisplayType) => {
  if (walkingSchedule[ukenummer].erFerieUke || ukedag === -1) {
    return null;
  } else if (walkingSchedule[ukenummer].dager?.[ukedag].matservering) {
    return <Lunch />;
  }
  return null;
};
