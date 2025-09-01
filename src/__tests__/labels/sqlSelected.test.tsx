jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === 'label' ? 'sql' : null),
    [Symbol.iterator]: function* () { yield ['label', 'sql']; }
  })
}));

import Filter from '@/app/filter';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { labels } from '../fixtureData/labels';

describe("Labels when sql label is selected", () => {
  Object.entries(labels.selected.sql).map(([buttonName, { href, className }]: [string, { href: string, className: string }], index: number) => {
    const testNamePartial = buttonName === "sql" ? "the sql button should toggle/remove the filter"
      : buttonName === "markdown" ? "the markdown button should change the filter"
        : ""

    it(`${testNamePartial} with href: ${href}`, () => {
      render(<Filter />)
      const linkButtons = screen.getAllByTestId('filter-nav-link')
      const button = linkButtons[index]

      expect(linkButtons).toHaveLength(2)

      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
      expect(button).toHaveProperty("href", href)

      if (className === "active") {
        expect(button).toHaveProperty("className", "active")
      } else if (className === "") {
        expect(button).not.toHaveProperty("className", "active")
      }
    })
  })
})
