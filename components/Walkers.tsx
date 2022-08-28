import { addDays, getDay } from "date-fns";
import { walkingSchedule } from "../resources/schedule";
import { Today } from "./Today";
import { Tomorrow } from "./Tomorrow";
import { WeekSchedule } from "./WeekSchedule";
import { Summary } from "./Summary";

const Walkers = () => {
  const dagensDato = new Date();

  const ukedag = getDay(dagensDato);
  const nesteDag = addDays(dagensDato, 1);

  return (
    <>
      <Summary dagensDato={dagensDato} />
      <Today dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
      <Tomorrow dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
      <WeekSchedule dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
    </>
  );
};

export { Walkers };
