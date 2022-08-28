import { getISOWeek } from "date-fns";

const Summary = ({ dagensDato }: { dagensDato: Date }) => {
  const ukenummer = getISOWeek(dagensDato);
  return (
    <section className="summary">
      <span>Uke {ukenummer}</span>
    </section>
  );
};

export { Summary };
