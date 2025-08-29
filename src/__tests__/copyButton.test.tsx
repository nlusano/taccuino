import { CopyButton } from '@/components/ui/button_copy'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('CopyButton', () => {
  beforeEach(() => {
    render(<CopyButton text="test" />)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  const navigatorMock = Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn(),
    },
  });

  it('displays the copy icon, then the check icon after click', () => {
    const copyButton = screen.getByTestId('copy-button')
    const copyIcon = screen.getByTestId('copy-icon')
    const checkCheckIcon = screen.queryByTestId('check-check-icon')

    expect(copyIcon).toBeVisible()
    expect(checkCheckIcon).toBeNull()

    fireEvent.click(copyButton);

        waitFor(() => expect(checkCheckIcon).toBeVisible())
expect(copyIcon).not.toBeVisible()


    waitFor(() => expect(copyIcon).toBeVisible())
    expect(checkCheckIcon).toBeNull()
  })

  it('copies the code snippet content to the clipboard after click', () => {
    const copyButton = screen.getByTestId('copy-button')

    fireEvent.click(copyButton);

    expect(navigatorMock.clipboard.writeText).toHaveBeenCalledWith("test");
  })
})
