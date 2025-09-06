jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === "label" ? "sql" : null),
    [Symbol.iterator]: function* () {
      yield ["label", "sql"];
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

describe("Page when the sql label is selected", () => {
  describe("and there is no query", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home searchParams={Promise.resolve({ label: "sql", query: "" })} />,
        );
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

    it("renders only the sql card", () => {
      const allCards = screen.getAllByRole("card");

      expect(allCards).toHaveLength(1);
      allCards.map((card) => {
        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();

        expect(card.textContent).toMatch(/sql/gim);
      });
    });
  });

  describe("and the query has no results", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home
            searchParams={Promise.resolve({ label: "sql", query: "bla" })}
          />,
        );
      });
    });

    it("the sql card renders no snippets", async () => {
      const card = screen.getByRole("card");
      const cardContent = screen.getByTestId("sql-card-content");

      expect(card.textContent).toBe("Sql"); // strict equality to card title only; no other content
      expect(cardContent.textContent).toBe(""); // no snippets rendered
    });
  });

  describe("and the query matches a sql snippet", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home
            searchParams={Promise.resolve({
              label: "sql",
              query: "snippet",
            })}
          />,
        );
      });
    });

    it("renders the matching snippet", () => {
      const snippet = screen.getByTestId("sql-card--test-snippet");

      expect(snippet).toBeVisible();
      expect(snippet.textContent).toMatch(/snippet/gim);
    });
  });
});
