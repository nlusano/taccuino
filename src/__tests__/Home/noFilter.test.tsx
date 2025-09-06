jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === "label" ? "" : undefined),
    [Symbol.iterator]: function* () {
      yield ["", ""];
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

describe("Page when no label is selected", () => {
  describe("and no query is input", () => {
    beforeEach(async () => {
      await act(async () => {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        render(<Home searchParams={Promise.resolve({} as any)} />);
      });
    });

    it("renders a title", () => {
      const title = screen.getByRole("heading", { level: 1 });

      expect(title).toBeInTheDocument();
      expect(title).toBeVisible();
      expect(title.textContent).toBe("Taccuino");
    });

    it("renders a searchbar with a cancel button", () => {
      const searchbar = screen.getByTestId("searchbar");
      const cancelButton = screen.getByTestId("cancel-button");

      expect(searchbar).toBeInTheDocument();
      expect(searchbar).toBeVisible();
      expect(cancelButton).toBeInTheDocument();
      expect(cancelButton).toBeVisible();
    });

    it("renders all cards and snippets", () => {
      const cards = screen.getAllByRole("card");

      expect(cards).toHaveLength(2);
      cards.map((card, index) => {
        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();

        if (index === 0) expect(card.textContent).toMatch(/markdown/gim);
        if (index === 0) expect(card.textContent).toMatch(/togglable/gim);

        if (index === 1) expect(card.textContent).toMatch(/sql/gim);
        if (index === 1) expect(card.textContent).toMatch(/snippet/gim);
      });
    });
  });
  describe("and the query is not a match", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home searchParams={Promise.resolve({ query: "bla" } as any)} />,
        );
      });
    });

    it("renders all cards and no snippets", () => {
      const cards = screen.getAllByRole("card");

      expect(cards).toHaveLength(2);
      cards.map((card, index) => {
        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();

        if (index === 0) expect(card.textContent).toBe("Markdown");
        if (index === 1) expect(card.textContent).toBe("SQL");
      });
    });
  });

  describe("and the query is a match", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home
            searchParams={Promise.resolve({ query: "togglable" } as any)}
          />,
        );
      });
    });

    it("renders all cards but only the matching snippet", () => {
      const cards = screen.getAllByRole("card");

      expect(cards).toHaveLength(2);
      cards.map((card, index) => {
        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();

        if (index === 0) expect(card.textContent).toMatch(/markdown/gim);
        if (index === 0) expect(card.textContent).toMatch(/togglable/gim);
        if (index === 1) expect(card.textContent).toBe("SQL");
      });
    });
  });
});
