import { TodayProps } from "../types/DayTypes";
import { format, getISOWeek, getDay, isSaturday, isSunday } from "date-fns";
import { nb } from "date-fns/locale";
import { Card } from "./Card";

const Today = ({ dagensDato, walkingSchedule }: TodayProps) => {
  const dagsnavn = format(dagensDato, "eeee", { locale: nb });
  const ukenummer: string = getISOWeek(dagensDato).toString();
  const ukedag: number = getDay(dagensDato) - 1;

  const heading = (
    <h2>
      I dag er det <span className={"dagsnavn"}>{dagsnavn}</span>
    </h2>
  );
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return (
      <Card>
        <span className={"dato"}>
          {format(dagensDato, "dd.MM.yyyy", { locale: nb })}
        </span>
        {heading}
        <p>Da har vi fri!</p>
      </Card>
    );
  }
  return (
    <Card>
      <span className={"dato"}>
        {format(dagensDato, "dd.MM.yyyy", { locale: nb })}
      </span>
      {heading}
      <p></p>
      <p>{walkingSchedule[ukenummer][ukedag].familie1}</p>
      <p>{walkingSchedule[ukenummer][ukedag].familie2}</p>
    </Card>
  );
};

export { Today };
