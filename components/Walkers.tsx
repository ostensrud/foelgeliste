import { walkingSchedule } from "../resources/schedule";
import {
  format,
  getISOWeek,
  getDay,
  addDays,
  isSaturday,
  isSunday,
} from "date-fns";

const Walkers = () => {
  const dagensDato = new Date();
  const ukenummer = getISOWeek(dagensDato);
  const ukedag = getDay(dagensDato);
  const nesteDag = addDays(dagensDato, 1);

  if (isSaturday(dagensDato) || isSunday(dagensDato)) {
    return <div>HELG! Ingen skal levere til skolen i dag!</div>;
  }

  if (isSaturday(nesteDag) || isSunday(nesteDag)) {
    return <div>HELG! Ingen skal levere til skolen i morgen!</div>;
  }

  return (
    <>
      <span>Ukenummer: {ukenummer}</span>
      <h2>Skal gaa i dag, {format(dagensDato, "dd.mm.yyyy")}</h2>
      <div>{walkingSchedule[ukenummer][ukedag].fam1}</div>
      <div>{walkingSchedule[ukenummer][ukedag].fam2}</div>
      <h2>Skal gaa i morgen, {format(nesteDag, "dd.mm.yyyy")}</h2>
      <div>{walkingSchedule[ukenummer][ukedag + 1].fam1}</div>
      <div>{walkingSchedule[ukenummer][ukedag + 1].fam2}</div>
    </>
  );
};

export { Walkers };
