import { render, screen } from "@testing-library/react";
import { getISOWeek } from "date-fns";
import { Walkers } from "./Walkers";

describe("Walkers", () => {
  test("tegner appen", () => {
    const ukenummer = getISOWeek(new Date());
    render(<Walkers />);
    const forventetHeading = `Uke ${ukenummer}`;
    expect(screen.getByText(forventetHeading)).toBeVisible();
  });
});
