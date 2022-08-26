import { TodayProps } from "../types/DayTypes";
import {
  format,
  getISOWeek,
  getDay,
  addDays,
  isSaturday,
  isSunday,
} from "date-fns";
import { nb } from "date-fns/locale";

const Today = ({ dagensDato, walkingSchedule }: TodayProps) => {
  const dagsnavn = format(dagensDato, "eeee", { locale: nb });
  const ukenummer = getISOWeek(dagensDato);
  const ukedag = getDay(dagensDato);
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return (
      <>
        <h2>
          I dag er det <span className={"dagsnavn"}>{dagsnavn}</span>
        </h2>
        <p>Da har vi fri!</p>
      </>
    );
  }
  return (
    <div>
      <h2>
        I dag er det <span className={"dagsnavn"}>{dagsnavn}</span>
      </h2>
      <p>{walkingSchedule[ukenummer][ukedag].fam1}</p>
      <p>{walkingSchedule[ukenummer][ukedag].fam2}</p>
    </div>
  );
};

export { Today };
