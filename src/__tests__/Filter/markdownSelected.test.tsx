jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === "label" ? "markdown" : null),
    [Symbol.iterator]: function* () {
      yield ["label", "markdown"];
    },
  }),
}));

import Filter from "@/app/Filter";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { labels } from "../fixtureData/labels";

describe("Filter when markdown label is selected", () => {
  Object.entries(labels.selected.markdown).map(
    (
      [buttonName, { href, className }]: [
        string,
        { href: string; className: string },
      ],
      index: number,
    ) => {
      const testNamePartial =
        buttonName === "markdown"
          ? "the markdown button should toggle/remove the filter"
          : buttonName === "sql"
            ? "the sql button should change the filter"
            : "";

      it(`${testNamePartial} with href: ${href}`, () => {
        render(<Filter />);
        const linkButtons = screen.getAllByTestId("filter-nav-link");
        const button = linkButtons[index];

        expect(linkButtons).toHaveLength(2);

        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(button).toHaveProperty("href", href);

        if (className === "active") {
          expect(button).toHaveProperty("className", "active");
        } else if (className === "") {
          expect(button).not.toHaveProperty("className", "active");
        }
      });
    },
  );
});
