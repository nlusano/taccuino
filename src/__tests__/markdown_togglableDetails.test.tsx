import MarkdownTogglableDetails from '@/app/cards/markdown_togglableDetails'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('MarkdownTogglableDetails', () => {
  beforeEach(() => {
    render(<MarkdownTogglableDetails />)
  })

  it('renders a title in the card header', () => {
    const title = screen.getByTestId("card-header")

    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
    expect(title.textContent).toBe("TOGGLABLE DETAILS")
  })

  it('renders the code snippet', () => {
    const codeSnippet = screen.getByTestId('markdown-details-code-snippet')

    expect(codeSnippet).toBeInTheDocument()
    expect(codeSnippet).toBeVisible()
    expect(codeSnippet.textContent).toMatch(/details|summary/)
  })

  it('has a copy button', () => {
    const cardAction = screen.getByTestId('card-action')
    // const copyButton = screen.getByTestId('copy-button')
    const copyButton = screen.getByRole('copy-button')


    expect(cardAction).toBeInTheDocument()
    expect(cardAction).toBeVisible()

    expect(copyButton).toBeInTheDocument()
    // expect(copyButton).toHaveAttribute("aria-hidden", "true")
    // expect(copyButton).toHaveStyle(`
    //     visibility: visible; // not what I see with my eyes, cannot trust this test
    //   `);
    // expect(within(copyButton).getByTestId('copy-icon')).toHaveAttribute("aria-hidden", "true")
    // expect(copyButton).not.toBeVisible() // cannot expect not.toBeVisible, cf. https://github.com/nlusano/taccuino/issues/27#issuecomment-3225283589
  })
})