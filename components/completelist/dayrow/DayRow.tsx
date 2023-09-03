import { DagType } from "../../../types/DayTypes";
import { Lunch } from "../../Assets";
import { format, isMonday, isThursday, parse } from "date-fns";

const DayRow = ({ dag }: { dag: DagType }) => {
  const parsedDate = parse(dag.date, "yyyy-MM-dd", new Date());
  const formattedDate = format(parsedDate, "dd.MM.yyyy");
  if (dag.isDayOff) {
    return (
      <tr>
        <td className={"ukedag"}>
          {formattedDate} {format(parsedDate, "eeee")}
        </td>
        <td colSpan={2}>{dag.dayOffDescription}</td>
      </tr>
    );
  }
  return (
    <tr>
      <td className={"ukedag"}>
        {formattedDate} {format(parsedDate, "eeee")}
      </td>
      <td>{dag.name}</td>
      <td>{isMonday(parsedDate) || isThursday(parsedDate) ? <Lunch /> : ""}</td>
    </tr>
  );
};

export { DayRow };
