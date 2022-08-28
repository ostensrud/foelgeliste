import {
  addDays,
  format,
  getDay,
  getISOWeek,
  isSaturday,
  isSunday,
} from "date-fns";
import { nb } from "date-fns/locale";
import { TomorrowProps } from "../types/DayTypes";
import { Card } from "./Card";

const Tomorrow = ({ dagensDato, walkingSchedule }: TomorrowProps) => {
  const iMorgen = addDays(dagensDato, 1);
  const dagsnavn = format(iMorgen, "eeee", { locale: nb });
  const ukenummer = getISOWeek(iMorgen);
  const ukedag = getDay(iMorgen);
  const heading = (
    <h2>
      I morgen er det <span className={"dagsnavn"}>{dagsnavn}</span>
      <span className={"dato"}>
        ({format(iMorgen, "dd.MM.yyyy", { locale: nb })})
      </span>
    </h2>
  );
  if (isSaturday(iMorgen) || isSunday(iMorgen)) {
    return (
      <Card>
        {heading}
        <p>Da har vi fri!</p>
      </Card>
    );
  }
  return (
    <Card>
      {heading}
      <p>{walkingSchedule[ukenummer][ukedag].fam1}</p>
      <p>{walkingSchedule[ukenummer][ukedag].fam2}</p>
    </Card>
  );
};

export { Tomorrow };
