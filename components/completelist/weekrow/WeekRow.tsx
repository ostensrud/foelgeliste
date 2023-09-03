import { getYear } from "date-fns";
import { UkeType } from "../../../types/DayTypes";
import { Hideaway } from "../../hideaway";
import { DayRow } from "../dayrow";

interface WeekProps {
  ukeplan: UkeType;
  aar: number;
  innevaerendeUke: number;
}

const WeekRow = (props: WeekProps) => {
  const { ukeplan, aar, innevaerendeUke } = props;
  const visUke =
    getYear(new Date()) === aar && ukeplan.weekNumber >= innevaerendeUke;

  if (!ukeplan.days) {
    return <div>OH NOES!</div>;
  }

  return (
    <Hideaway
      title={<h3>Uke {ukeplan.weekNumber}</h3>}
      classNames={`uke ${
        innevaerendeUke === ukeplan.weekNumber ? "currentWeek" : ""
      }`}
      isOpen={visUke}
    >
      <>
        <table>
          <thead>
            <tr>
              <th>Dag</th>
              <th>Ansvarlig</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ukeplan.days?.map((dag) => (
              <DayRow dag={dag} key={dag.date} />
            ))}
          </tbody>
        </table>
      </>
    </Hideaway>
  );
};

export { WeekRow };
