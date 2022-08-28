import { Card } from "./Card";

interface Props {
  walkingSchedule: Object;
  displayWeek: Number;
  currentDay: Number;
  currentWeek: Number;
}

const WeekSchedule = ({
  walkingSchedule,
  displayWeek,
  currentDay,
  currentWeek,
}: Props) => {
  const dager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
  const isCurrentWeek = displayWeek === currentWeek;
  const isFutureWeek = displayWeek > currentWeek;
  const isPastWeek = displayWeek < currentWeek;

  return (
    <Card>
      <h2>Ukesoversikt for uke {displayWeek}</h2>
      <table>
        <thead>
          <tr>
            <th>Dag</th>
            <th colSpan={2}>Ansvarlig</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(walkingSchedule[displayWeek]).map((dag: string) => {
            const classes = () => {
              if (currentDay === parseInt(dag, 10)) {
                return "current";
              }
              if (currentDay > parseInt(dag, 10) && !isFutureWeek) {
                return "past_day";
              }
              return "";
            };
            return (
              <tr key={dag} className={classes()}>
                <td>{dager[dag - 1]}</td>
                <td>{walkingSchedule[displayWeek][dag].fam1}</td>
                <td>{walkingSchedule[displayWeek][dag].fam2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export { WeekSchedule };
