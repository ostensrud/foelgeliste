import { render, screen } from "@testing-library/react";
import { addDays, format, subDays } from "date-fns";
import { ImportantDateType } from "../../types/ImportantDatesTypes";
import { ImportantDates } from "./ImportantDates";

describe("Important Dates", () => {
  test("tegner komponenten når det er en viktig dato mindre enn en uke frem i tid", () => {
    const dato = addDays(new Date(), 5);
    const data: ImportantDateType[] = [
      {
        date: dato,
        title: "Skidag!",
        description: "Vi skal ha vannski-dag! Husk vannski.",
      },
    ];

    render(<ImportantDates data={data} />);
    expect(screen.getByText(format(dato, "dd.MM.yyyy"))).toBeVisible();
    expect(screen.getByText("Skidag!")).toBeVisible();
    expect(
      screen.getByText("Vi skal ha vannski-dag! Husk vannski.")
    ).toBeVisible();
  });

  test("tegner ingenting når det ikke finnes noen data", () => {
    const { container } = render(<ImportantDates data={[]} />);
    expect(container.firstChild).toBeNull();
  });

  test("tegner ingenting når datoen er i fortiden", () => {
    const dato = subDays(new Date(), 8);
    const data: ImportantDateType[] = [
      {
        date: dato,
        title: "Skidag!",
        description: "Vi skal ha vannski-dag! Husk vannski.",
      },
    ];
    const { container } = render(<ImportantDates data={data} />);
    expect(container.firstChild).toBeNull();
  });

  test("tegner ingenting når datoen er mer enn en uke frem i tid", () => {
    const dato = addDays(new Date(), 8);
    const data: ImportantDateType[] = [
      {
        date: dato,
        title: "Skidag!",
        description: "Vi skal ha vindski-dag! Husk vindski.",
      },
    ];
    const { container } = render(<ImportantDates data={data} />);
    expect(container.firstChild).toBeNull();
  });

  test("viser meldingen når datoen er i dag", () => {
    const iDag = new Date();
    const data: ImportantDateType[] = [
      {
        date: iDag,
        title: "Windsurfing dag!",
        description: "Ta med windsurf-utstyr!",
      },
    ];
    render(<ImportantDates data={data} />);
    expect(screen.getByText(format(iDag, "dd.MM.yyyy"))).toBeVisible();
    expect(screen.getByText("Windsurfing dag!")).toBeVisible();
    expect(screen.getByText("Ta med windsurf-utstyr!")).toBeVisible();
  });
});
