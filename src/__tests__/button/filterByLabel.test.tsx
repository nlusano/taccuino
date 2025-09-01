import { FilterByLabelButton } from '@/components/ui/button_filterByLabel'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('FilterByLabelButton', () => {
  it('renders a button', () => {
    render(<FilterByLabelButton
      label={{
        display: "test display",
        isActive: "",
        name: "test name"
      }}
    />)
    const filterButton: HTMLElement & {
      label:
      {
        display: string
        isActive?: string
        name: string
      }
    } = screen.getByTestId("filter-button")

    expect(filterButton).toBeInTheDocument()
    expect(filterButton).toBeVisible()
    expect(filterButton.textContent).toBe("test display")
    expect(filterButton).toHaveProperty("name", "test name")

    expect(filterButton.className).toMatch(/hover:bg-gray-700/gm)
    expect(filterButton.className).not.toMatch(/hover:bg-rose-950/gm)

    expect(filterButton.className).toMatch(/bg-slate-600/gm)
    expect(filterButton.className).not.toMatch(/bg-rose-900/gm)
  })

  it('adds styling when an isActive prop is passed', () => {
    render(<FilterByLabelButton
      label={{
        display: "test display",
        isActive: "test name",
        name: "test name"
      }}
    />)
    const filterButton = screen.getByTestId("filter-button")

    expect(filterButton).toBeInTheDocument()
    expect(filterButton).toBeVisible()
    expect(filterButton.textContent).toBe("test display")
    expect(filterButton).toHaveProperty("name", "test name")

    expect(filterButton.className).toMatch(/hover:bg-rose-950/gm)
    expect(filterButton.className).not.toMatch(/hover:bg-gray-700/gm)

    expect(filterButton.className).toMatch(/bg-rose-900/gm)
    expect(filterButton.className).not.toMatch(/bg-slate-600/gm)
  })
})