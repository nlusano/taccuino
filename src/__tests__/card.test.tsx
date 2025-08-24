import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MarkdownCard from '../app/cards/markdown'

describe('MarkdownCard', () => {
  it('renders a card', () => {
    render(<MarkdownCard />)

    const card = screen.getAllByTestId('card')

    expect(card[0]).toBeInTheDocument()
    expect(card[0]).toBeVisible()
  })
})