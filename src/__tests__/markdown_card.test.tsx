import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MarkdownCard from '../app/cards/markdown'

describe('MarkdownCard', () => {
  beforeEach(() => {
    const fixtureData = {
      title: "Test title",
      labels: [
        {
          display: "",
          name: ""
        }
      ]
    };
    render(<MarkdownCard title={fixtureData.title} labels={fixtureData.labels} />)
  })

  it('renders a card', () => {
    const card = screen.getByTestId('markdown-card')

    expect(card).toBeInTheDocument()
    expect(card).toBeVisible()
  })

  it('renders a title in the card header', () => {
    const title = screen.getByTestId("card-title")

    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
    expect(title.textContent).toBe("Test title")
  })

  it('renders content', () => {
    const content = screen.getByTestId('markdown-card-content')

    expect(content).toBeInTheDocument()
    expect(content).toBeVisible()
  })
})