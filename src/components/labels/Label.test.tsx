import * as React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";

const testId = "label-component-test";
const labelText = "Label";
const cornerHint = "Optional";

describe("Label Component", () => {
  it("should render a Label with no corner hint", () => {
    const { getByTestId } = render(<Label text={labelText} />);
    const label = getByTestId(testId);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(labelText);
    expect(label).toMatchSnapshot();
  });

  it("should render a Label with corner hint", () => {
    const { getByTestId } = render(
      <Label text={labelText} cornerHint={cornerHint} />
    );
    const label = getByTestId(testId);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(labelText);
    expect(label).toHaveTextContent(cornerHint);
    expect(label).toMatchSnapshot();
  });
});
