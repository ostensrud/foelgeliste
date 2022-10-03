import { addDays, getDay } from "date-fns";
import { walkingSchedule } from "../../resources/schedule";
import { Today } from "./../Today";
import { Tomorrow } from "./../Tomorrow";
import { Schedule } from "./../Schedule";
import { Summary } from "./../Summary";

const Walkers = () => {
  const dagensDato = new Date();

  const ukedag = getDay(dagensDato);
  const nesteDag = addDays(dagensDato, 1);

  return (
    <>
      <Summary dagensDato={dagensDato} />
      <Today dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
      <Tomorrow dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
      <Schedule dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
    </>
  );
};

export { Walkers };
