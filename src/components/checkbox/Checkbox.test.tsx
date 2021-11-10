import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { resetUniqueId } from "../../hooks/useUniqueId";
import Checkbox from "./Checkbox";

const testId = "test-checkbox";
const labelId = `${testId}-label`;
const descrId = `${testId}-description`;
const labelText = "Checkbox Label";
const descriptionText = "Checkbox Description";

describe("Checkbox component", () => {
  beforeEach(resetUniqueId);

  it("should render a checkbox component, passing all extra properties to the input element", () => {
    const { getByTestId } = render(
      <Checkbox label={labelText} data-testid={testId} />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.type).toBe("checkbox");
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    expect(input.id).toBeDefined();
  });

  it("should render a label for the input", () => {
    const { getByText } = render(<Checkbox label={labelText} id={testId} />);
    const label = getByText(labelText) as HTMLLabelElement;
    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label).toBeInTheDocument();
    expect(label).toMatchSnapshot();
    expect(label.id).toBe(labelId);
    expect(label.htmlFor).toBe(testId);
  });

  it("should not render a description if none specified", () => {
    const { container, getByTestId } = render(
      <Checkbox label={labelText} data-testid={testId} id={testId} />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    const description = container.querySelector(`#${descrId}`);
    expect(description).toBeNull();
    expect(input.getAttribute("aria-describedby")).toBeNull();
  });

  it("should render a description if specified", () => {
    const { getByText, getByTestId } = render(
      <Checkbox
        label={labelText}
        data-testid={testId}
        id={testId}
        description={descriptionText}
      />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    const descr = getByText(descriptionText) as HTMLParagraphElement;
    expect(descr).toBeInTheDocument();
    expect(descr).toMatchSnapshot();
    expect(input.getAttribute("aria-describedby")).toBe(descrId);
  });

  it("should use the ID specified", () => {
    const { getByText, getByTestId } = render(
      <Checkbox
        label={labelText}
        data-testid={testId}
        id={testId}
        description={descriptionText}
      />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    const label = getByText(labelText) as HTMLLabelElement;
    const descr = getByText(descriptionText) as HTMLParagraphElement;
    expect(input.id).toBe(testId);
    expect(label.id).toBe(labelId);
    expect(descr.id).toBe(descrId);
  });

  it("should generate an ID if none specified", () => {
    const { getByText, getByTestId } = render(
      <Checkbox
        label={labelText}
        data-testid={testId}
        description={descriptionText}
      />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    const label = getByText(labelText) as HTMLLabelElement;
    const descr = getByText(descriptionText) as HTMLParagraphElement;
    expect(input.id).toBeDefined();
    expect(label.id).toBe(`${input.id}-label`);
    expect(descr.id).toBe(`${input.id}-description`);
  });

  it("should be able to disable", () => {
    const { container, getByTestId } = render(
      <Checkbox
        label={labelText}
        data-testid={testId}
        description={descriptionText}
        disabled={true}
      />
    );
    expect(container).toMatchSnapshot();
    const input = getByTestId(testId) as HTMLInputElement;
    expect(input).toBeDisabled();
  });

  it("should allow specifying a checked state", () => {
    const { getByTestId } = render(
      <Checkbox label={labelText} data-testid={testId} checked={true} />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    expect(input.checked).toBeTruthy();
  });

  it("should trigger the callback when state changes", () => {
    let checkedValue: boolean = false;
    function callback(isChecked: boolean) {
      checkedValue = isChecked;
    }
    const { getByTestId } = render(
      <Checkbox
        label={labelText}
        data-testid={testId}
        checked={false}
        handleChange={callback}
      />
    );
    const input = getByTestId(testId) as HTMLInputElement;
    expect(input.checked).toBeFalsy();
    fireEvent.click(input);
    expect(checkedValue).toBeTruthy();
  });
});
