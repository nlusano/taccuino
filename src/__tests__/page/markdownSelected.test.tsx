jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === "label" ? "markdown" : null),
    [Symbol.iterator]: function* () {
      yield ["label", "markdown"];
    },
  }),
  usePathname: () => "/",
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

import Home from "@/app/page";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

describe("Page when markdown label is selected", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <Home
          searchParams={Promise.resolve({ label: "markdown", query: "" })}
        />,
      );
    });
  });

  it("renders a title", () => {
    const title = screen.getByRole("heading", { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(title.textContent).toBe("Taccuino");
  });

  it("renders only the markdown card", () => {
    const cards = screen.getAllByRole("card");

    expect(cards).toHaveLength(1);
    cards.map((card) => {
      expect(card).toBeInTheDocument();
      expect(card).toBeVisible();

      expect(card.textContent).toMatch(/markdown/gim);
      expect(card.textContent).not.toMatch(/sql/gim);
    });
  });
});
