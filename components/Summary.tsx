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
        {/* <Link href={"/ukeplaner"}>Ukeplaner for 1. trinn</Link> */}
      </nav>
    </section>
  );
};

export { Summary };
