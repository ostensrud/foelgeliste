import { getISOWeek } from "date-fns";
import { Lunch } from "../../components/Assets";
import { Hideaway } from "../../components/hideaway";
import { walkingSchedule } from "../../resources/schedule";
import { DagType } from "../../types/DayTypes";

const Dagrad = ({
  dag,
  ukedagNummer,
}: {
  dag: DagType;
  ukedagNummer: number;
}) => {
  const dager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
  return (
    <tr>
      <td className={"ukedag"}>{dager[ukedagNummer]}</td>
      <td>{dag.familie1}</td>
      <td>{dag.familie2}</td>
      <td>{ukedagNummer === 0 || ukedagNummer === 3 ? <Lunch /> : ""}</td>
    </tr>
  );
};

interface UkeProps {
  aar: string;
  ukenummer: string;
  innevaerendeUke: string;
}

const Ukerad = (props: UkeProps) => {
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
        {walkingSchedule[aar][ukenummer].erFerieUke && <div>Ferieuke</div>}
        {!walkingSchedule[aar][ukenummer].erFerieUke && (
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
              {walkingSchedule[aar][ukenummer].dager?.map((dag, index) => (
                <Dagrad
                  dag={dag}
                  ukedagNummer={index}
                  key={aar + "::" + ukenummer + "::" + index}
                />
              ))}
            </tbody>
          </table>
        )}
      </>
    </Hideaway>
  );
};

const Komplett = () => {
  const plan = walkingSchedule;
  const aarsliste = Object.keys(plan);
  const innevaerendeUke = getISOWeek(new Date());

  return (
    <main className={"komplett"}>
      {aarsliste.map((aar) => {
        return (
          <section key={aar}>
            <h2>{aar}</h2>
            {Object.keys(walkingSchedule[aar]).map((ukenummer) => (
              <Ukerad
                aar={aar}
                ukenummer={ukenummer}
                key={aar + "::" + ukenummer}
                innevaerendeUke={innevaerendeUke.toString()}
              />
            ))}
          </section>
        );
      })}
    </main>
  );
};

export default Komplett;
