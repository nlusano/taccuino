import MarkdownTogglableDetails from '@/app/cards/markdown_togglableDetails'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('MarkdownTogglableDetails', () => {
  beforeEach(() => {
    render(<MarkdownTogglableDetails />)
  })

  it('renders the helper snippet title', () => {
    const title = screen.getByRole('heading', { level: 3 })

    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
    expect(title.textContent).toBe("TOGGLABLE DETAILS")
  })
  it('renders the code snippet', () => {
    const firstCodeSnippet = screen.getByTestId('markdown-details-code-snippet')

    expect(firstCodeSnippet).toBeInTheDocument()
    expect(firstCodeSnippet).toBeVisible()
    expect(firstCodeSnippet.textContent).toMatch(/details|summary/)
  })
})