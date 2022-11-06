import { WalkingScheduleType } from "../../../types/DayTypes";
import { Hideaway } from "../../hideaway";
import { DayRow } from "../dayrow";

interface WeekProps {
  aar: string;
  ukenummer: string;
  innevaerendeUke: string;
  walkingSchedule: WalkingScheduleType;
}

const WeekRow = (props: WeekProps) => {
  const { aar, ukenummer, innevaerendeUke } = props;
  const visUke =
    Number.parseInt(ukenummer, 10) >= Number.parseInt(innevaerendeUke, 10);
  return (
    <Hideaway
      title={<h3>Uke {ukenummer}</h3>}
      classNames={`uke ${innevaerendeUke === ukenummer ? "currentWeek" : ""}`}
      isOpen={visUke}
    >
      <>
        {props.walkingSchedule[aar][ukenummer].erFerieUke && (
          <div>Ferieuke</div>
        )}
        {!props.walkingSchedule[aar][ukenummer].erFerieUke && (
          <table>
            <thead>
              <tr>
                <th>Dag</th>
                <th>Familie 1</th>
                <th>Familie 2</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.walkingSchedule[aar][ukenummer].dager?.map(
                (dag, index) => (
                  <DayRow
                    dag={dag}
                    ukedagNummer={index}
                    key={aar + "::" + ukenummer + "::" + index}
                  />
                )
              )}
            </tbody>
          </table>
        )}
      </>
    </Hideaway>
  );
};

export { WeekRow };
