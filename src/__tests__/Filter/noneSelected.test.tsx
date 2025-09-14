jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === "label" ? "" : undefined),
    [Symbol.iterator]: function* () {
      yield ["", ""];
    },
  }),
}));

import Filter from "@/app/filterz";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { labels } from "../fixtureData/labels";

describe("Labels when no label is selected", () => {
  Object.entries(labels.selected.none).map(
    ([buttonName, { href }]: [string, { href: string }], index: number) => {
      it(`renders the ${buttonName} button with href: ${href}`, () => {
        render(<Filter />);
        const linkButtons = screen.getAllByTestId("filter-nav-link");
        const button = linkButtons[index];

        expect(linkButtons).toHaveLength(2);

        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(button).toHaveProperty("href", href);

        expect(button).not.toHaveProperty("className", "active");
      });
    },
  );
});
