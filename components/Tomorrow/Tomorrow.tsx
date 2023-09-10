import {
  addDays,
  format,
  getDay,
  getISOWeek,
  getYear,
  isSaturday,
  isSunday,
} from "date-fns";
import { nb } from "date-fns/locale";
import { DagType, TomorrowProps } from "../../types/DayTypes";
import { Card } from "../Card";
import { LunchDisplay } from "../LunchDisplay";

const Tomorrow = ({ dagensDato, walkingSchedule }: TomorrowProps) => {
  const iMorgen = addDays(dagensDato, 1);
  const ukenummer = getISOWeek(iMorgen);
  const innevaerendeAar = getYear(iMorgen);

  const dagsnavn = format(iMorgen, "eeee", { locale: nb });

  const dagenIMorgen: DagType | undefined = walkingSchedule
    .find((schedule) => schedule.year === innevaerendeAar)
    ?.weeks?.find((week) => week.weekNumber === ukenummer)
    ?.days?.find((days) => days.date === format(iMorgen, "yyyy-MM-dd"));

  const heading = (
    <h2>
      I morgen er det {dagsnavn}
      <LunchDisplay dato={iMorgen} />
    </h2>
  );

  let content;
  if (isSaturday(iMorgen) || isSunday(iMorgen)) {
    content = <p>Da har vi fri!</p>;
  } else if (dagenIMorgen?.isDayOff) {
    content = <p>{dagenIMorgen.dayOffDescription}</p>;
  } else {
    content = <p>{dagenIMorgen?.name}</p>;
  }
  // if (walkingSchedule[ukenummer].erFerieUke) {
  //   content = <p>Fri hele uka!</p>;
  // } else if (isSaturday(iMorgen) || isSunday(iMorgen)) {
  //   content = <p>Da har vi fri!</p>;
  // } else if (walkingSchedule[ukenummer].dager?.[ukedag].erFridag) {
  //   content = (
  //     <p>
  //       {walkingSchedule[ukenummer].dager?.[ukedag].beskrivelseAvFridag ||
  //         "Fridag"}
  //     </p>
  //   );
  // } else {
  //   content = (
  //     <>
  //       <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie1}</p>
  //       <p>{walkingSchedule[ukenummer].dager?.[ukedag].familie2}</p>
  //     </>
  //   );
  // }

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
