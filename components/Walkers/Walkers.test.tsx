import { render, screen } from "@testing-library/react";
import { Walkers } from "./Walkers";

describe("Walkers", () => {
  test("tegner appen", () => {
    render(<Walkers />);
    expect(
      screen.getByRole("heading", { level: 2, name: /^I dag er det/ })
    ).toBeVisible();
  });
});
