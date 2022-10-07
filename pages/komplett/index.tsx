import { walkingSchedule } from "../../resources/schedule";

const Komplett = () => {
  const plan = walkingSchedule;
  const aarsliste = Object.keys(plan);

  return (
    <div>
      {aarsliste.map((aar) => {
        return (
          <section key={aar}>
            <h2>{aar}</h2>
            {Object.keys(walkingSchedule[aar]).map((ukenummer) => (
              <div key={aar + "::" + ukenummer}>
                <h3>{ukenummer}</h3>
                {walkingSchedule[aar][ukenummer].erFerieUke && (
                  <div>Ferieuke</div>
                )}
                <div>
                  {walkingSchedule[aar][ukenummer].dager?.map((dag, index) => (
                    <div key={aar + "::" + ukenummer + "::" + index}>
                      {dag.familie1} - {dag.familie2}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
};

export default Komplett;
