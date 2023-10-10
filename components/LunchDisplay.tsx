import { isMonday, isSaturday, isSunday, isWednesday } from "date-fns";
import { Lunch } from "./Assets";

interface LunchDisplayType {
  dato: Date;
}
export const LunchDisplay = ({ dato: dagensDato }: LunchDisplayType) => {
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return null;
  } else if (isMonday(dagensDato) || isWednesday(dagensDato)) {
    return <Lunch />;
  }
  return null;
};
