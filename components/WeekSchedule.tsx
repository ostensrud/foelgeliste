import {
  format,
  isBefore,
  isMonday,
  isSameDay,
  isThursday,
  parse,
} from "date-fns";
import { DagType } from "../types/DayTypes";
import { Lunch } from "./Assets";
import { Card } from "./Card";
import nb from "date-fns/locale/nb";

interface Props {
  weekSchedule?: DagType[];
  displayWeek: number;
  currentDay: number;
  currentWeek: number;
}

const WeekSchedule = ({ weekSchedule, displayWeek, currentWeek }: Props) => {
  const now = new Date();

  if (!weekSchedule) {
    return <div>Ingen ukeplan for uke {displayWeek}</div>;
  }

  const classes = (date: string) => {
    const parsedDate = parse(date, "yyyy-MM-dd", now);
    if (isSameDay(parsedDate, now)) {
      return "current";
    }
    if (isBefore(parsedDate, now)) {
      return "past_day";
    }
    return "";
  };

  return (
    <Card>
      <h2>Ukesoversikt for uke {displayWeek}</h2>
      <table className={"ukesoversikt"}>
        <thead>
          <tr>
            <th>Dag</th>
            <th colSpan={2}>Ansvarlig</th>
          </tr>
        </thead>
        <tbody>
          {weekSchedule.map((dag, index) => {
            const parsedDate = parse(dag.date, "yyyy-MM-dd", new Date());
            return (
              <tr className={classes(dag.date)} key={index}>
                <td className="ukedag leadingUppercase">
                  {format(parsedDate, "eeee", { locale: nb })}
                </td>
                <td>{dag.name}</td>
                <td>
                  {isMonday(parsedDate) || isThursday(parsedDate) ? (
                    <Lunch />
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export { WeekSchedule };
