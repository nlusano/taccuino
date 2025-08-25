import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders a title', () => {
    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
    expect(title.textContent).toBe("Taccuino")
  })

  it('renders content', () => {
    const content = screen.getByTestId('page-content')

    expect(content).toBeInTheDocument()
    expect(content).toBeVisible()
  })
})