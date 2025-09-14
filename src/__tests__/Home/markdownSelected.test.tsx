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
import { cards } from "@/components/data/appData";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

describe("Page when the markdown label is selected", () => {
  describe("and there is no query", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home
            searchParams={Promise.resolve({ label: "markdown", query: "" })}
          />,
        );
      });
    });

    it("renders only the markdown card", () => {
      const allCards = screen.getAllByRole("card");

      expect(allCards).toHaveLength(1);
      allCards.map((card) => {
        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();

        expect(card.textContent).toMatch(/markdown/gim);
      });
    });
  });

  describe("and the query has no results", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home
            searchParams={Promise.resolve({ label: "markdown", query: "bla" })}
          />,
        );
      });
    });

    it("the markdown card renders no snippets", async () => {
      const card = screen.getByRole("card");
      const cardContent = screen.getByTestId("markdown-card-content");

      expect(card.textContent).toBe(cards.markdown.title); // strict equality to card title only; no other content
      expect(cardContent.textContent).toBe(""); // no snippets rendered
    });
  });

  describe("and the query matches a markdown snippet", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Home
            searchParams={Promise.resolve({
              label: "markdown",
              query: "togglable",
            })}
          />,
        );
      });
    });

    it("renders the matching snippet", () => {
            const snippet = screen.getByTestId("markdown-card--togglable-details");
      
            expect(snippet).toBeVisible();
      expect(snippet.textContent).toMatch(/togglable/gim);
    });
  });
});
