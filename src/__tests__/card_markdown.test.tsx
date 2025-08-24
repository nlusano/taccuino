import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MarkdownCard from '../app/cards/markdown'

describe('MarkdownTogglableDetails', () => {
  beforeEach(() => {
    render(<MarkdownCard />)
  })

  it('renders a header', () => {
    const header = screen.getAllByTestId('card-header')

    expect(header[0]).toBeInTheDocument()
    expect(header[0]).toBeVisible()
    expect(header[0].textContent).toBe("Markdown helper")
  })
  it('renders content', () => {
    const content = screen.getAllByTestId('card-content')

    expect(content[0]).toBeInTheDocument()
    expect(content[0]).toBeVisible()
    expect(content[0].textContent).toContain("TOGGLABLE DETAILS")
  })
})