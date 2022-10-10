import { addDays, getDay, getYear } from "date-fns";
import { walkingSchedule } from "../../resources/schedule";
import { Today } from "../Today";
import { Tomorrow } from "../Tomorrow";
import { Schedule } from "./../Schedule";
import { Summary } from "./../Summary";

const Walkers = () => {
  const dagensDato = new Date();
  const aar = getYear(dagensDato);

  return (
    <>
      <Today dagensDato={dagensDato} walkingSchedule={walkingSchedule[aar]} />
      <Tomorrow
        dagensDato={dagensDato}
        walkingSchedule={walkingSchedule[aar]}
      />
      <Schedule
        dagensDato={dagensDato}
        walkingSchedule={walkingSchedule[aar]}
      />
    </>
  );
};

export { Walkers };
