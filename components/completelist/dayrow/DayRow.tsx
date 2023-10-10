import { nb } from "date-fns/locale";
import { DagType } from "../../../types/DayTypes";
import { Lunch } from "../../Assets";
import { format, isMonday, isWednesday, parse } from "date-fns";

const DayRow = ({ dag }: { dag: DagType }) => {
  const parsedDate = parse(dag.date, "yyyy-MM-dd", new Date());
  const formattedDate = format(parsedDate, "dd.MM.yyyy");
  if (dag.isDayOff) {
    return (
      <tr>
        <td className={"ukedag"}>
          {formattedDate}{" "}
          <span className={"leadingUppercase"}>
            {format(parsedDate, "eeee", { locale: nb })}
          </span>
        </td>
        <td colSpan={2}>{dag.dayOffDescription}</td>
      </tr>
    );
  }
  return (
    <tr>
      <td className={"ukedag"}>
        {formattedDate}{" "}
        <span className={"leadingUppercase"}>
          {format(parsedDate, "eeee", { locale: nb })}
        </span>
      </td>
      <td>{dag.name}</td>
      <td>
        {isMonday(parsedDate) || isWednesday(parsedDate) ? <Lunch /> : ""}
      </td>
    </tr>
  );
};

export { DayRow };
