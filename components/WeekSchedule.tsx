import { WalkingScheduleType } from "../types/DayTypes";
import { Card } from "./Card";

interface Props {
  walkingSchedule: WalkingScheduleType;
  displayWeek: number;
  currentDay: number;
  currentWeek: number;
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
          {walkingSchedule[displayWeek.toString()].map((dag, index) => {
            const classes = () => {
              if (currentDay === index + 1) {
                return "current";
              }
              if (currentDay > index + 1 && !isFutureWeek) {
                return "past_day";
              }
              return "";
            };
            return (
              <tr
                key={dag.familie1 + dag.familie2 + index}
                className={classes()}
              >
                <td className={"ukedag"}>{dager[index]}</td>
                <td>{dag.familie1}</td>
                <td>{dag.familie2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export { WeekSchedule };
