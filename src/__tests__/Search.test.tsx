jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === "query" ? "" : undefined),
    [Symbol.iterator]: function* () {
      yield ["", ""];
    },
  }),
  usePathname: () => "",
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

import Search from "@/app/Search";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Search", () => {
  beforeEach(() => {
    render(<Search />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders an empty searchbar", () => {
    const searchbar = screen.getByTestId("searchbar");
    const input = screen.getByRole("textbox");

    expect(searchbar).toBeInTheDocument();
    expect(searchbar).toBeVisible();
    expect(input).toHaveValue("");
  });

  it("renders a cancel button", () => {
    const cancelButton = screen.getByTestId("cancel-button");

    expect(cancelButton).toBeInTheDocument();
    expect(cancelButton).toBeVisible();
  });

  it("typing a query sets a value, clicking the cancel button clears the query", () => {
    const input = screen.getByRole("textbox");
    const cancelButton = screen.getByTestId("cancel-button");

    fireEvent.change(input, { target: { value: "bla" } });

    expect(input).toHaveValue("bla");

    fireEvent.click(cancelButton);

    expect(input).toHaveValue("");
  });
});
