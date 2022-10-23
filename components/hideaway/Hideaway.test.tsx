import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Hideaway } from "./Hideaway";
import userEvent from "@testing-library/user-event";

describe("Hideaway", () => {
  const user = userEvent.setup();
  test("rendres default som skjult", () => {
    render(
      <Hideaway title="Tittel">
        <div>Skjult innhold</div>
      </Hideaway>
    );
    expect(screen.getByText(/^Tittel$/)).toBeVisible();
    expect(screen.queryByText(/Skjult innhold/)).not.toBeInTheDocument();
  });

  test("klikk på tittel toggler skjult innhold", async () => {
    render(
      <Hideaway title="Tittel">
        <div>Skjult innhold</div>
      </Hideaway>
    );
    const klikkbarTittel = screen.getByRole("button", { name: /^Tittel$/ });
    user.click(klikkbarTittel);
    await waitFor(() =>
      expect(screen.getByText(/^Skjult innhold$/)).toBeVisible()
    );
    const innhold = screen.getByText(/^Skjult innhold$/);
    user.click(klikkbarTittel);
    await waitForElementToBeRemoved(innhold);
  });

  test("kan sette initiell visning til å være åpen", () => {
    render(
      <Hideaway title="Tittel" isOpen>
        <div>Skjult innhold</div>
      </Hideaway>
    );
    expect(screen.getByText(/^Skjult innhold$/)).toBeVisible();
  });

  test("kan lukkes når initiell visning er åpen", async () => {
    render(
      <Hideaway title="Tittel" isOpen>
        <div>Skjult innhold</div>
      </Hideaway>
    );
    const klikkbarTittel = screen.getByRole("button", { name: /^Tittel$/ });
    const skjulbartInnhold = screen.getByText(/^Skjult innhold$/);
    user.click(klikkbarTittel);
    await waitForElementToBeRemoved(skjulbartInnhold);
  });
});
