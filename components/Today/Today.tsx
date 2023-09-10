import { DagType, TodayProps } from "../../types/DayTypes";
import { format, getISOWeek, isSaturday, isSunday, getYear } from "date-fns";
import { nb } from "date-fns/locale";
import { Card } from "../Card";
import { LunchDisplay } from "../LunchDisplay";

const Today = ({ dagensDato, walkingSchedule }: TodayProps) => {
  const dagsnavn = format(dagensDato, "eeee", { locale: nb });
  const ukenummer = getISOWeek(dagensDato);
  const innevaerendeAar = getYear(dagensDato);

  const dagenIdag: DagType | undefined = walkingSchedule
    .find((schedule) => schedule.year === innevaerendeAar)
    ?.weeks?.find((week) => week.weekNumber === ukenummer)
    ?.days?.find((days) => days.date === format(dagensDato, "yyyy-MM-dd"));

  let content;
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    content = <p>Da har vi fri!</p>;
  } else if (dagenIdag?.isDayOff) {
    content = <p>{dagenIdag.dayOffDescription}</p>;
  } else {
    content = <p>{dagenIdag?.name}</p>;
  }

  const heading = (
    <h2>
      I dag er det {dagsnavn}
      <LunchDisplay dato={dagensDato} />
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
