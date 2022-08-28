import { getDay, getISOWeek } from "date-fns";
import { WeekScheduleProps } from "../types/DayTypes";
import { Card } from "./Card";

const WeekSchedule = ({ dagensDato, walkingSchedule }: WeekScheduleProps) => {
  const dager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
  const ukenummer = getISOWeek(dagensDato);
  const dagnummer = getDay(dagensDato);

  return (
    <Card>
      <section>
        <h2>Ukesoversikt for uke {ukenummer}</h2>
        <table>
          <thead>
            <tr>
              <th>Dag</th>
              <th colSpan={2}>Ansvarlig</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(walkingSchedule[ukenummer]).map((dag: string) => {
              const classes = () => {
                if (dagnummer === parseInt(dag, 10)) {
                  return "current";
                }
                if (dagnummer > parseInt(dag, 10)) {
                  return "past_day";
                }
                return "";
              };
              return (
                <tr key={dag} className={classes()}>
                  <td>{dager[dag - 1]}</td>
                  <td>{walkingSchedule[ukenummer][dag].fam1}</td>
                  <td>{walkingSchedule[ukenummer][dag].fam2}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </Card>
  );
};

export { WeekSchedule };
