import { getISOWeek } from "date-fns";
import Link from "next/link";

const Summary = () => {
  const dagensDato = new Date();
  const ukenummer = getISOWeek(dagensDato);
  return (
    <section className="summary">
      <div className="weekNumber">Uke {ukenummer}</div>
      <nav>
        <Link href={"/"}>Dagsoversikt</Link>
        <Link href={"/komplett"}>Komplett oversikt</Link>
      </nav>
    </section>
  );
};

export { Summary };
