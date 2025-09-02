jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === "label" ? "sql" : null),
    [Symbol.iterator]: function* () {
      yield ["label", "sql"];
    },
  }),
}));

import Home from "@/app/page";
import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";

describe("Page when sql label is selected", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Home searchParams={Promise.resolve({ label: "sql" })} />);
    });
  });

  it("renders a title", async () => {
    const title = screen.getByRole("heading", { level: 1 });

    waitFor(() => {
      expect(title).toBeInTheDocument();
      expect(title).toBeVisible();
      expect(title.textContent).toBe("Taccuino");
    });
  });

  it("renders only the sql card", async () => {
    const cards = screen.getAllByRole("card");

    waitFor(() => {
      expect(cards).toHaveLength(1);
    });
    cards.map((card) => {
      expect(card).toBeInTheDocument();
      expect(card).toBeVisible();

      expect(card.textContent).toMatch(/sql/gim);
      expect(card.textContent).not.toMatch(/markdown/gim);
    });
  });
});
