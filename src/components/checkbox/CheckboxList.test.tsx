import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckboxList from "./CheckboxList";
import { CheckboxProps } from "./Checkbox";

const legendText = "Legendary legend";
const checkbox1: CheckboxProps = {
  label: "Checkbox One",
  ["data-testid"]: "checkbox1",
  checked: true,
};

const checkbox2: CheckboxProps = {
  label: "Checkbox Two",
  ["data-testid"]: "checkbox2",
  checked: false,
};

describe("CheckboxList component", () => {
  it("should match the snapshot", () => {
    const { container: container1 } = render(
      <CheckboxList legend={legendText} checkboxes={[checkbox1, checkbox2]} />
    );
    expect(container1).toMatchSnapshot();
    const { container: container2 } = render(
      <CheckboxList checkboxes={[checkbox1, checkbox2]} />
    );
    expect(container2).toMatchSnapshot();
    const { container: container3 } = render(<CheckboxList checkboxes={[]} />);
    expect(container3).toMatchSnapshot();
  });

  it("should render a CheckboxList with a legend", () => {
    const { getByText, getByTestId } = render(
      <CheckboxList legend={legendText} checkboxes={[checkbox1, checkbox2]} />
    );

    const legend = getByText(legendText) as HTMLLegendElement;
    expect(legend).toBeInstanceOf(HTMLLegendElement);
    expect(legend).toBeInTheDocument();

    const input1 = getByTestId("checkbox1") as HTMLInputElement;
    expect(input1).toBeInstanceOf(HTMLInputElement);
    expect(input1).toBeInTheDocument();
    expect(input1.checked).toBeTruthy();

    const label1 = getByText("Checkbox One") as HTMLLabelElement;
    expect(label1).toBeInstanceOf(HTMLLabelElement);
    expect(label1).toBeInTheDocument();

    const input2 = getByTestId("checkbox2") as HTMLInputElement;
    expect(input2).toBeInstanceOf(HTMLInputElement);
    expect(input2).toBeInTheDocument();
    expect(input2.checked).toBeFalsy();

    const label2 = getByText("Checkbox Two") as HTMLLabelElement;
    expect(label2).toBeInstanceOf(HTMLLabelElement);
    expect(label2).toBeInTheDocument();
  });

  it("should render a CheckboxList with no legend", () => {
    const { container } = render(
      <CheckboxList checkboxes={[checkbox1, checkbox2]} />
    );
    expect(container.childNodes.length).toBe(1);
    const fieldset = container.childNodes[0];
    expect(fieldset).toBeInstanceOf(HTMLFieldSetElement);
    expect(fieldset.childNodes.length).toBe(2); // one for each checkbox
  });
});
