import * as React from "react";
import { render } from "@testing-library/react";
import { resetUniqueId } from "../../hooks/useUniqueId";
import RadioInput from "./RadioInput";

const labelText = "Radio Label";
const formName = "radioFormName";
const formValue = "formValue";
const testId = "test-radio";
const labelId = `${testId}-label`;

describe("RadioInput component", () => {
  beforeEach(resetUniqueId);

  it("should render a RadioInput component, passing all extra properties to the input element", () => {
    const { getByTestId } = render(
      <RadioInput
        label={labelText}
        name={formName}
        value={formValue}
        data-testid={testId}
      />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.type).toBe("radio");
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    expect(input.id).toBeDefined();
  });

  it("should use the ID specified", () => {
    const { getByText, getByTestId } = render(
      <RadioInput
        label={labelText}
        name={formName}
        value={formValue}
        data-testid={testId}
        id={testId}
      />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    const label = getByText(labelText) as HTMLLabelElement;
    expect(input.id).toBe(testId);
    expect(label.id).toBe(labelId);
  });

  it("should be able to disable", () => {
    const { container, getByTestId } = render(
      <RadioInput
        label={labelText}
        name={formName}
        value={formValue}
        data-testid={testId}
        disabled={true}
      />
    );
    expect(container).toMatchSnapshot();
    const input = getByTestId(testId) as HTMLInputElement;
    expect(input).toBeDisabled();
  });
});
