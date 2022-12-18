import { DagType } from "../../../types/DayTypes";
import { Lunch } from "../../Assets";

const DayRow = ({
  dag,
  ukedagNummer,
}: {
  dag: DagType;
  ukedagNummer: number;
}) => {
  const dager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
  if (dag.erFridag) {
    return (
      <tr>
        <td className={"ukedag"}>{dager[ukedagNummer]}</td>
        <td colSpan={3}>{dag.beskrivelseAvFridag}</td>
      </tr>
    );
  }
  return (
    <tr>
      <td className={"ukedag"}>{dager[ukedagNummer]}</td>
      <td>{dag.familie1}</td>
      <td>{dag.familie2}</td>
      <td>{ukedagNummer === 0 || ukedagNummer === 3 ? <Lunch /> : ""}</td>
    </tr>
  );
};

export { DayRow };
