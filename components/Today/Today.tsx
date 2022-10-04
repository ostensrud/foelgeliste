import { TodayProps } from "../../types/DayTypes";
import { format, getISOWeek, getDay, isSaturday, isSunday } from "date-fns";
import { nb } from "date-fns/locale";
import { Card } from "../Card";
import { LunchDisplay } from "../LunchDisplay";

const Today = ({ dagensDato, walkingSchedule }: TodayProps) => {
  const dagsnavn = format(dagensDato, "eeee", { locale: nb });
  const ukenummer: string = getISOWeek(dagensDato).toString();
  const ukedag: number = getDay(dagensDato) - 1;
  let content;
  if (walkingSchedule[ukenummer].erFerieUke) {
    content = <p>Fri hele uka!</p>;
  } else if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    content = <p>Da har vi fri!</p>;
  } else {
    content = (
      <>
        <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie1}</p>
        <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie2}</p>
      </>
    );
  }
  const heading = (
    <h2>
      I dag er det {dagsnavn}
      <LunchDisplay
        walkingSchedule={walkingSchedule}
        ukedag={ukedag}
        ukenummer={ukenummer}
        dato={dagensDato}
      />
    </h2>
  );

  return (
    <Card>
      <span className={"dato"}>
        {format(dagensDato, "dd.MM.yyyy", { locale: nb })}
      </span>
      {heading}
      {content}
    </Card>
  );
};

export { Today };
