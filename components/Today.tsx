import { TodayProps, WalkingScheduleType } from "../types/DayTypes";
import { format, getISOWeek, getDay, isSaturday, isSunday } from "date-fns";
import { nb } from "date-fns/locale";
import { Card } from "./Card";
import { LunchDisplay } from "./LunchDisplay";

const Today = ({ dagensDato, walkingSchedule }: TodayProps) => {
  const dagsnavn = format(dagensDato, "eeee", { locale: nb });
  const ukenummer: string = getISOWeek(dagensDato).toString();
  const ukedag: number = getDay(dagensDato) - 1;
  const heading = (
    <h2>
      I dag er det <span className={"dagsnavn"}>{dagsnavn}</span>
      <LunchDisplay
        walkingSchedule={walkingSchedule}
        ukedag={ukedag}
        ukenummer={ukenummer}
      />
    </h2>
  );
  if (walkingSchedule[ukenummer].erFerieUke) {
    return (
      <Card>
        <span className={"dato"}>
          {format(dagensDato, "dd.MM.yyyy", { locale: nb })}
        </span>
        {heading}
        Fri hele uka!
      </Card>
    );
  }
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
      <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie1}</p>
      <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie2}</p>
    </Card>
  );
};

export { Today };
