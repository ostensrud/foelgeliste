import { walkingSchedule } from "../../resources/schedule";

const Komplett = () => {
  const plan = walkingSchedule;
  const aarsliste = Object.keys(plan);

  return (
    <div>
      {aarsliste.map((aar) => {
        return (
          <section>
            <h2>{aar}</h2>
            {Object.keys(walkingSchedule[aar]).map((ukenummer) => (
              <div>
                <h3>{ukenummer}</h3>
                {walkingSchedule[aar][ukenummer].erFerieUke && (
                  <div>Ferieuke</div>
                )}
                <p>
                  {walkingSchedule[aar][ukenummer].dager?.map((dag) => (
                    <div>
                      {dag.familie1} - {dag.familie2}
                    </div>
                  ))}
                </p>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
};

export default Komplett;
