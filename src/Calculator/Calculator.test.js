import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import CalculatorPage from "../CalculatorElement/CalculatorElement";

afterEach(cleanup);

describe("renders Calculate Component", () => {
  it("Render Calculate Body Component", () => {
    render(<CalculatorPage />);
  });
  it("Input string value Onchange event and Onclick calculate button show output in the result output field", () => {
    render(<CalculatorPage />);
    const inputStringField = screen.getByPlaceholderText(
      "E.G.,//;\\n1;2;3 or 1,2,3"
    );
    expect(inputStringField).toBeInTheDocument();
    const value = "1,2,3";
    fireEvent.change(inputStringField, {
      target: {
        value,
      },
    });
    expect(inputStringField).toHaveValue("1,2,3");
  });
});
