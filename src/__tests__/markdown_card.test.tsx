import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MarkdownCard from '../app/cards/markdown'

describe('MarkdownCard', () => {
  beforeEach(() => {
    render(<MarkdownCard />)
  })

  it('renders a card', () => {
    const card = screen.getByTestId('markdown-card')

    expect(card).toBeInTheDocument()
    expect(card).toBeVisible()
  })

  it('renders a title in the card header', () => {
    const title = screen.getByRole('heading', { level: 3, name: "Markdown helper" })

    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
  })

  it('renders content', () => {
    const content = screen.getByTestId('markdown-card-content')

    expect(content).toBeInTheDocument()
    expect(content).toBeVisible()
  })
})