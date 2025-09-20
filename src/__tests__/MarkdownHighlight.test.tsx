import MarkdownHighlight from "@/app/cards/MarkdownHighlight";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("MarkdownHighlight", () => {
  beforeEach(() => {
    render(
      <MarkdownHighlight isVisible={true} id="Highlight" />,
    );
  });

  it("renders a title in the card header", () => {
    const title = screen.getByTestId("card-header");

    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(title.textContent).toBe("HIGHLIGHT");
  });

  it("renders the code snippets", () => {
    const codeSnippets = screen.getAllByTestId("markdown-highlight-code-snippet");

          expect(codeSnippets).toHaveLength(5);
      codeSnippets.map((snippet, index) => {
        expect(snippet).toBeInTheDocument();
        expect(snippet).toBeVisible();

        if (index === 0) expect(snippet.textContent).toMatch(/\[\!NOTE\]/gim);

        if (index === 1) expect(snippet.textContent).toMatch(/\[\!TIP\]/gim);
        if (index === 2) expect(snippet.textContent).toMatch(/\[\!IMPORTANT\]/gim);
        if (index === 3) expect(snippet.textContent).toMatch(/\[\!WARNING\]/gim);
        if (index === 4) expect(snippet.textContent).toMatch(/\[\!CAUTION\]/gim);
      });
  });

  it("has a copy button only visible on hover on the code snippet", () => {
    const codeSnippet = screen.getAllByTestId("markdown-highlight-code-snippet");
    const copyButton = screen.getAllByTestId("copy-button")[0];

    expect(copyButton.blur()).toBeUndefined();

    fireEvent.mouseOver(codeSnippet[0]);
    waitFor(() => expect(copyButton).toBeVisible());

    fireEvent.mouseLeave(codeSnippet[0]);
    waitFor(() => expect(copyButton).toBeUndefined());
  });
});

 describe("MarkdownHighlight isVisible is false", () => {
  it("renders nothing", () => {
    render(<MarkdownHighlight isVisible={false} id="Highlight" />);

    const highlightHelper = screen.queryByTestId("markdown-card--highlight");

    expect(highlightHelper).not.toBeInTheDocument();
    expect(highlightHelper).toBeNull();
  });
});
