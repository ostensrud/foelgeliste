import { isSaturday, isSunday } from "date-fns";
import { Lunch } from "./Assets";

interface LunchDisplayType {
  dato: Date;
}
export const LunchDisplay = ({ dato: dagensDato }: LunchDisplayType) => {
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return null;
  } else if (dagensDato.getDay() === 0 || dagensDato.getDay() === 3) {
    return <Lunch />;
  }
  return null;
};
