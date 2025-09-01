jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === 'label' ? '' : undefined),
    [Symbol.iterator]: function* () { yield ['', '']; }
  })
}));

import Home from '@/app/page';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

describe("Page when no label is selected", () => {
  beforeEach(async () => {
    await act(async () => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      render(<Home searchParams={Promise.resolve({} as any)} />)
    })
  })

  it('renders a title', () => {
    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
    expect(title.textContent).toBe("Taccuino")
  })

  it('renders all cards', () => {
    const cards = screen.getAllByRole('card')

    expect(cards).toHaveLength(2)
    cards.map((card, index) => {
      expect(card).toBeInTheDocument()
      expect(card).toBeVisible()

      if (index === 0) expect(card.textContent).toMatch(/markdown/gmi)
      if (index === 1) expect(card.textContent).toMatch(/sql/gmi)
    })
  })
})