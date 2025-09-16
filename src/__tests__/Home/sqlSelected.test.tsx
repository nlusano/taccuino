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
import { cards } from "@/components/data/appData";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

describe("Home when the sql label is selected", () => {
  describe("and there is no query", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home searchParams={Promise.resolve({ label: "sql", query: "" })} />,
        );
      });
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
// const cardContent = screen.getByTestId("sql-card-content"); // TODO

      expect(card.textContent).toBe(cards.sql.title); // strict equality to card title only; no other content
// expect(cardContent.textContent).toBe(""); // no snippets rendered
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
