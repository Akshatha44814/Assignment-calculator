import { render } from "@testing-library/react";
import App from "./App";
import Calculator from "./Calculator/Calculator";

test("renders App Component", () => {
  render(<App />);
});

describe("renders Calculate Component", () => {
  it("render Calculate component", () => {
    render(<Calculator />);
  });
});