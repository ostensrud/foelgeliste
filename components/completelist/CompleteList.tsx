import { getISOWeek, getYear } from "date-fns";
import { useEffect, useRef } from "react";
import { walkingSchedule } from "../../resources/schedule";
import { WeekRow } from "./weekrow";

type RefListType = {
  [key: string]: HTMLDivElement | null;
};

const CompleteList = () => {
  const refList = useRef<RefListType>({ noop: null });

  const plan = walkingSchedule;
  const aarsliste = Object.keys(plan);
  const innevaerendeUke = getISOWeek(new Date());
  const innevaerendeAar = getYear(new Date());
  useEffect(() => {
    refList.current[innevaerendeUke.toString()]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [innevaerendeUke]);

  return (
    <main className={"komplett"}>
      {plan.map((aar) => {
        return (
          <section key={aar.year}>
            <h2>{aar.year}</h2>
            {aar.weeks?.map((uker) => (
              <div
                key={aar.year + "::" + uker.weekNumber}
                ref={(element: HTMLDivElement) =>
                  (refList.current[aar.year + "::" + uker.weekNumber] = element)
                }
                style={{ scrollMargin: "55px" }} // hoeyde paa header + 4px
              >
                <WeekRow
                  aar={aar.year}
                  innevaerendeUke={getISOWeek(new Date())}
                  ukeplan={uker}
                />
              </div>
            ))}
          </section>
        );
      })}
    </main>
  );
};

export { CompleteList };
