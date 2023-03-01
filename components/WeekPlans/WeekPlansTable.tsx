import { format } from "date-fns";

interface WeekPlan {
  link: string | undefined | null;
  tittel: string | undefined | null;
  publisert: string | undefined | null;
}

const TableRow = ({ link, tittel, publisert }: WeekPlan) => (
  <tr>
    <td>
      <a
        href={link ?? "www.levreskole.no"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {tittel}
      </a>
    </td>
    <td>{publisert && format(new Date(publisert), "dd.MM.yyyy")}</td>
  </tr>
);

interface Props {
  input: string;
}

const WeekPlansTable = ({ input }: Props) => {
  const doc: Document = new DOMParser().parseFromString(input, "text/xml");
  const elems = doc.querySelectorAll("item");
  let list: WeekPlan[] = [];
  elems.forEach((elem) => {
    const tittel = elem.querySelector("title")?.textContent;
    const link = elem.querySelector("link")?.textContent;
    const publisert = elem.querySelector("pubDate")?.textContent;
    list.push({
      link,
      tittel,
      publisert,
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Uke</th>
          <th>Publisert</th>
        </tr>
      </thead>
      <tbody>
        {list.map((weekSchedule) => (
          <TableRow {...weekSchedule} key={weekSchedule.tittel} />
        ))}
      </tbody>
    </table>
  );
};

export { WeekPlansTable };
