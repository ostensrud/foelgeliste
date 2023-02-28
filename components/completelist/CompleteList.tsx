import { getISOWeek, getYear } from "date-fns";
import { walkingSchedule } from "../../resources/schedule";
import { WeekRow } from "./weekrow";

const CompleteList = () => {
  const plan = walkingSchedule;
  const aarsliste = Object.keys(plan);
  const innevaerendeUke = getISOWeek(new Date());
  const innevaerendeAar = getYear(new Date());

  return (
    <main className={"komplett"}>
      {aarsliste
        .filter((aar) => Number.parseInt(aar, 10) >= innevaerendeAar)
        .map((aar) => {
          return (
            <section key={aar}>
              <h2>{aar}</h2>
              {Object.keys(plan[aar]).map((ukenummer) => (
                <WeekRow
                  aar={aar}
                  ukenummer={ukenummer}
                  key={aar + "::" + ukenummer}
                  innevaerendeUke={innevaerendeUke.toString()}
                  walkingSchedule={walkingSchedule}
                />
              ))}
            </section>
          );
        })}
    </main>
  );
};

export { CompleteList };
