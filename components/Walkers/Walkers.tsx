import { getYear } from "date-fns";
import { ImportantDates } from "../importantdates/ImportantDates";
import { Today } from "../Today";
import { Tomorrow } from "../Tomorrow";
import { Schedule } from "./../Schedule";

import { walkingSchedule } from "../../resources/schedule";
import { importantDates } from "../../resources/importantDates";

const Walkers = () => {
  const dagensDato = new Date();
  const aar = getYear(dagensDato);

  return (
    <>
      <ImportantDates data={importantDates} />
      <Today dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
      <Tomorrow dagensDato={dagensDato} walkingSchedule={walkingSchedule} />
      {/* <Schedule
        dagensDato={dagensDato}
        walkingSchedule={walkingSchedule[aar]}
      /> */}
    </>
  );
};

export { Walkers };
