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
import { Lunch } from "./Assets";
import { Card } from "./Card";

const Tomorrow = ({ dagensDato, walkingSchedule }: TomorrowProps) => {
  const iMorgen = addDays(dagensDato, 1);
  const dagsnavn = format(iMorgen, "eeee", { locale: nb });
  const ukenummer: string = getISOWeek(iMorgen).toString();
  const ukedag: number = getDay(iMorgen) - 1;
  const heading = (
    <h2>
      I morgen er det <span className={"dagsnavn"}>{dagsnavn}</span>
      {walkingSchedule[ukenummer].dager?.[ukedag].matservering ? <Lunch /> : ""}
    </h2>
  );
  if (isSaturday(iMorgen) || isSunday(iMorgen)) {
    return (
      <Card>
        <span className={"dato"}>
          {format(iMorgen, "dd.MM.yyyy", { locale: nb })}
        </span>
        {heading}
        <p>Da har vi fri!</p>
      </Card>
    );
  }
  return (
    <Card>
      <span className={"dato"}>
        {format(iMorgen, "dd.MM.yyyy", { locale: nb })}
      </span>
      {heading}
      <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie1}</p>
      <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie2}</p>
    </Card>
  );
};

export { Tomorrow };
