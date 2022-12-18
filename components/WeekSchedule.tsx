import { AarType, WalkingScheduleType } from "../types/DayTypes";
import { Lunch } from "./Assets";
import { Card } from "./Card";

interface Props {
  walkingSchedule: AarType;
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

  if (walkingSchedule[displayWeek.toString()].erFerieUke) {
    return (
      <Card>
        <h2>Ukesoversikt for uke {displayWeek}</h2>
        <div>Det er ferie!</div>
      </Card>
    );
  }

  return (
    <Card>
      <h2>Ukesoversikt for uke {displayWeek}</h2>
      <table className={"ukesoversikt"}>
        <thead>
          <tr>
            <th>Dag</th>
            <th colSpan={3}>Ansvarlig</th>
          </tr>
        </thead>
        <tbody>
          {walkingSchedule[displayWeek.toString()].dager?.map((dag, index) => {
            const classes = () => {
              if (currentDay === index + 1) {
                return "current";
              }
              if (currentDay > index + 1 && !isFutureWeek) {
                return "past_day";
              }
              return "";
            };
            if (dag.erFridag) {
              return (
                <tr key={dag.familie1 + dag.familie2 + index}>
                  <td className={"ukedag"}>{dager[index]}</td>
                  <td colSpan={3}>{dag.beskrivelseAvFridag}</td>
                </tr>
              );
            }
            return (
              <tr
                key={dag.familie1 + dag.familie2 + index}
                className={classes()}
              >
                <td className={"ukedag"}>{dager[index]}</td>
                <td>{dag.familie1}</td>
                <td>{dag.familie2}</td>
                <td>{index === 0 || index === 3 ? <Lunch /> : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export { WeekSchedule };
