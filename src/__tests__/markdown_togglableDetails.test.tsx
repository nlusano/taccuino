import MarkdownTogglableDetails from "@/app/cards/markdown_togglableDetails";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("MarkdownTogglableDetails", () => {
  beforeEach(() => {
    render(
      <MarkdownTogglableDetails isVisible={true} id="Togglable details" />,
    );
  });

  it("renders a title in the card header", () => {
    const title = screen.getByTestId("card-header");

    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(title.textContent).toBe("TOGGLABLE DETAILS");
  });

  it("renders the code snippet", () => {
    const codeSnippet = screen.getByTestId("markdown-details-code-snippet");

    expect(codeSnippet).toBeInTheDocument();
    expect(codeSnippet).toBeVisible();
    expect(codeSnippet.textContent).toMatch(/details|summary/);
  });

  it("has a copy button only visible on hover on the code snippet", () => {
    const codeSnippet = screen.getByTestId("markdown-details-code-snippet");
    const copyButton = screen.getByTestId("copy-button");

    expect(copyButton.blur()).toBeUndefined();

    fireEvent.mouseOver(codeSnippet);
    waitFor(() => expect(copyButton).toBeVisible());

    fireEvent.mouseLeave(codeSnippet);
    waitFor(() => expect(copyButton).toBeUndefined());
  });
});
