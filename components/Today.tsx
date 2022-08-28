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
import { Card } from "./Card";

const Today = ({ dagensDato, walkingSchedule }: TodayProps) => {
  const dagsnavn = format(dagensDato, "eeee", { locale: nb });
  const ukenummer = getISOWeek(dagensDato);
  const ukedag = getDay(dagensDato);
  const heading = (
    <h2>
      I dag er det <span className={"dagsnavn"}>{dagsnavn}</span>
      <span className={"dato"}>
        ({format(dagensDato, "dd.MM.yyyy", { locale: nb })})
      </span>
    </h2>
  );
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
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

export { Today };
