import { walkingSchedule } from "../../resources/schedule";
import { DagType } from "../../types/DayTypes";

interface DagProps {
  aar: string;
  ukenummer: string;
  index: number;
  dag: DagType;
}

const Dagrad = ({ aar, ukenummer, index, dag }: DagProps) => {
  return (
    <div key={aar + "::" + ukenummer + "::" + index}>
      {dag.familie1} - {dag.familie2}
    </div>
  );
};

interface UkeProps {
  aar: string;
  ukenummer: string;
}

const Ukerad = ({ aar, ukenummer }: UkeProps) => {
  return (
    <div key={aar + "::" + ukenummer}>
      <h3>{ukenummer}</h3>
      {walkingSchedule[aar][ukenummer].erFerieUke && <div>Ferieuke</div>}
      <div>
        {walkingSchedule[aar][ukenummer].dager?.map((dag, index) => (
          <Dagrad aar={aar} ukenummer={ukenummer} index={index} dag={dag} />
        ))}
      </div>
    </div>
  );
};

const Komplett = () => {
  const plan = walkingSchedule;
  const aarsliste = Object.keys(plan);

  return (
    <main className={"komplett"}>
      {aarsliste.map((aar) => {
        return (
          <section key={aar}>
            <h2>{aar}</h2>
            {Object.keys(walkingSchedule[aar]).map((ukenummer) => (
              <Ukerad aar={aar} ukenummer={ukenummer} />
            ))}
          </section>
        );
      })}
    </main>
  );
};

export default Komplett;
