jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === 'label' ? 'sql' : null),
    [Symbol.iterator]: function* () { yield ['label', 'sql']; }
  })
}));

import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe("Page when sql label is selected", () => {
  beforeEach(() => {
    const labelMock = {
      label: "sql"
    }

    render(<Home searchParams={labelMock} />)
  })

  it('renders a title', () => {
    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
    expect(title.textContent).toBe("Taccuino")
  })

  it('renders only the sql card', () => {
    const cards = screen.getAllByRole('card')

    expect(cards).toHaveLength(1)
    cards.map((card) => {
      expect(card).toBeInTheDocument()
      expect(card).toBeVisible()

      expect(card.textContent).toMatch(/sql/gmi)
      expect(card.textContent).not.toMatch(/markdown/gmi)
    })
  })
})