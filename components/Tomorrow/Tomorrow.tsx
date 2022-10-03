import {
  addDays,
  format,
  getDay,
  getISOWeek,
  isSaturday,
  isSunday,
} from "date-fns";
import { nb } from "date-fns/locale";
import { TomorrowProps } from "../../types/DayTypes";
import { Card } from "../Card";
import { LunchDisplay } from "../LunchDisplay";

const Tomorrow = ({ dagensDato, walkingSchedule }: TomorrowProps) => {
  const iMorgen = addDays(dagensDato, 1);
  const dagsnavn = format(iMorgen, "eeee", { locale: nb });
  const ukenummer: string = getISOWeek(iMorgen).toString();
  const ukedag: number = getDay(iMorgen) - 1;
  const heading = (
    <h2>
      I morgen er det {dagsnavn}
      <LunchDisplay
        walkingSchedule={walkingSchedule}
        ukedag={ukedag}
        ukenummer={ukenummer}
        dato={iMorgen}
      />
    </h2>
  );

  let content;
  if (walkingSchedule[ukenummer].erFerieUke) {
    content = <p>Fri hele uka!</p>;
  } else if (isSaturday(iMorgen) || isSunday(iMorgen)) {
    content = <p>Da har vi fri!</p>;
  } else {
    content = (
      <>
        <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie1}</p>
        <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie2}</p>
      </>
    );
  }

  return (
    <Card>
      <span className={"dato"}>
        {format(iMorgen, "dd.MM.yyyy", { locale: nb })}
      </span>
      {heading}
      {content}
    </Card>
  );
};

export { Tomorrow };
