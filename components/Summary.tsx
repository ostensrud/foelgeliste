import { getISOWeek } from "date-fns";
import Link from "next/link";

const Summary = () => {
  const dagensDato = new Date();
  const ukenummer = getISOWeek(dagensDato);
  return (
    <section className="summary">
      <span>Uke {ukenummer}</span>
      <nav>
        <Link href={"/"}>
          <a>Dagsoversikt</a>
        </Link>
        <Link href={"/komplett"}>
          <a>Komplett oversikt</a>
        </Link>
      </nav>
    </section>
  );
};

export { Summary };
