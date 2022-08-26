import { walkingSchedule } from "../resources/schedule";
import {
  format,
  getISOWeek,
  getDay,
  addDays,
  isSaturday,
  isSunday,
} from "date-fns";
import { nb } from "date-fns/locale";

interface TodayProps {
  dagensDato: Date;
}

interface TomorrowProps extends TodayProps {}

const Today = ({ dagensDato }: TodayProps) => {
  const dagsnavn = format(dagensDato, "eeee", { locale: nb });
  const ukenummer = getISOWeek(dagensDato);
  const ukedag = getDay(dagensDato);
  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return (
      <>
        <h2>
          I dag er det <span className={"dagsnavn"}>{dagsnavn}</span>
        </h2>
        <p>Da har vi fri!</p>
      </>
    );
  }
  return (
    <div>
      <h2>
        I dag er det <span className={"dagsnavn"}>{dagsnavn}</span>
      </h2>
      <p>{walkingSchedule[ukenummer][ukedag].fam1}</p>
      <p>{walkingSchedule[ukenummer][ukedag].fam2}</p>
    </div>
  );
};

const Tomorrow = ({ dagensDato }: TomorrowProps) => {
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

const Walkers = () => {
  const dagensDato = new Date();

  const ukedag = getDay(dagensDato);
  const nesteDag = addDays(dagensDato, 1);

  return (
    <>
      <Today dagensDato={dagensDato} />
      <Tomorrow dagensDato={dagensDato} />
    </>
  );
};

export { Walkers };
