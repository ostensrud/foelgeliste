import { getISOWeek } from "date-fns";
import { walkingSchedule } from "../../resources/schedule";
import { DagType } from "../../types/DayTypes";

const Dagrad = ({ dag }: { dag: DagType }) => {
  return (
    <tr>
      <td>{dag.familie1}</td>
      <td>{dag.familie2}</td>
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
  return (
    <div
      key={aar + "::" + ukenummer}
      className={`uke ${innevaerendeUke === ukenummer ? "currentWeek" : ""}`}
    >
      <h3>Uke {ukenummer}</h3>
      {walkingSchedule[aar][ukenummer].erFerieUke && <div>Ferieuke</div>}
      {!walkingSchedule[aar][ukenummer].erFerieUke && (
        <table>
          <thead>
            <tr>
              <th>Familie 1</th>
              <th>Familie 2</th>
            </tr>
          </thead>
          <tbody>
            {walkingSchedule[aar][ukenummer].dager?.map((dag, index) => (
              <Dagrad dag={dag} key={aar + "::" + ukenummer + "::" + index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
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
