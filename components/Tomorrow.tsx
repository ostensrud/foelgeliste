import { TomorrowProps } from "../types/DayTypes";
import {
  format,
  getISOWeek,
  getDay,
  addDays,
  isSaturday,
  isSunday,
} from "date-fns";
import { nb } from "date-fns/locale";

const Tomorrow = ({ dagensDato, walkingSchedule }: TomorrowProps) => {
  const iMorgen = addDays(dagensDato, 1);
  const dagsnavn = format(iMorgen, "eeee", { locale: nb });
  const ukenummer = getISOWeek(iMorgen);
  const ukedag = getDay(iMorgen);
  if (isSaturday(iMorgen) || isSunday(iMorgen)) {
    return (
      <>
        <h2>
          I morgen er det <span className={"dagsnavn"}>{dagsnavn}</span>
        </h2>
        <p>Da har vi fri!</p>
      </>
    );
  }
  return (
    <div>
      <h2>
        I morgen er det <span className={"dagsnavn"}>{dagsnavn}</span>
      </h2>
      <p>{walkingSchedule[ukenummer][ukedag].fam1}</p>
      <p>{walkingSchedule[ukenummer][ukedag].fam2}</p>
    </div>
  );
};

export { Tomorrow };
