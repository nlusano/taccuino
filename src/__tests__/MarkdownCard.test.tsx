import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MarkdownCard from "../app/cards/MarkdownCard";
import { cards } from "@/components/data/appData";

describe("MarkdownCard isVisible is true", () => {
  beforeEach(() => {
    render(<MarkdownCard isVisible={true} query="" />);
  });

  it("renders a card", () => {
    const card = screen.getByTestId("markdown-card");

    expect(card).toBeInTheDocument();
    expect(card).toBeVisible();
  });

  it("renders a title in the card header", () => {
    const title = screen.getByTestId("card-title");

    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(title.textContent).toBe(cards.markdown.title);
  });

  it("renders content", () => {
    const content = screen.getByTestId("markdown-card-content");

    expect(content).toBeInTheDocument();
    expect(content).toBeVisible();
  });
});

describe("MarkdownCard isVisible is false", () => {
  it("renders nothing", () => {
    render(<MarkdownCard isVisible={false} query="" />);

    const card = screen.queryByTestId("markdown-card");

    expect(card).not.toBeInTheDocument();
    expect(card).toBeNull();
  });
});
