import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { resetUniqueId } from "../../hooks/useUniqueId";
import RadioGroup, { RadioProps } from "./RadioGroup";

const testId = "test-radio-group";
const srTitle = "Screen Reader Title";
const option1: RadioProps = {
  label: "Option One",
};
const option2: RadioProps = {
  label: "Option Two",
  description: "Description two",
};

describe("RadioGroup component", () => {
  beforeEach(resetUniqueId);

  it("should render an empty RadioGroup", () => {
    const { getByTestId } = render(
      <RadioGroup options={[]} data-testid={testId} />
    );
    const div = getByTestId(testId) as HTMLDivElement;
    expect(div).toBeInstanceOf(HTMLDivElement);
  });

  it("should render an invisible screen reader title", () => {
    const { getByTestId, getByText } = render(
      <RadioGroup options={[]} data-testid={testId} srTitle={srTitle} />
    );
    const div = getByTestId(testId) as HTMLDivElement;
    expect(div).toBeInstanceOf(HTMLDivElement);

    const srLabel = getByText(srTitle) as HTMLLabelElement;
    expect(srLabel).toBeInstanceOf(HTMLLabelElement);
  });

  it("should render without a description", () => {
    const { getByText } = render(
      <RadioGroup options={[option1]} data-testid={testId} />
    );
    const label = getByText(option1.label) as HTMLSpanElement;
    expect(label).toBeInstanceOf(HTMLSpanElement);
  });

  it("should render with a description", () => {
    const { getByText } = render(
      <RadioGroup options={[option2]} data-testid={testId} />
    );
    const label = getByText(option2.label) as HTMLSpanElement;
    expect(label).toBeInstanceOf(HTMLSpanElement);

    const descr = getByText(option2.description) as HTMLSpanElement;
    expect(descr).toBeInstanceOf(HTMLSpanElement);
  });

  it("should render multiple options", () => {
    const { getByText } = render(
      <RadioGroup options={[option1, option2]} data-testid={testId} />
    );
    const label1 = getByText(option1.label) as HTMLSpanElement;
    expect(label1).toBeInstanceOf(HTMLSpanElement);

    const label2 = getByText(option2.label) as HTMLSpanElement;
    expect(label2).toBeInstanceOf(HTMLSpanElement);
    const descr2 = getByText(option2.description) as HTMLSpanElement;
    expect(descr2).toBeInstanceOf(HTMLSpanElement);
  });

  it("should render disabled options", () => {
    option1.disabled = true;
    const { getByText } = render(
      <RadioGroup options={[option1]} data-testid={testId} />
    );
    const label1 = getByText(option1.label) as HTMLSpanElement;
    expect(label1).toBeInstanceOf(HTMLSpanElement);
  });

  it("should be active when clicked", () => {
    const { getByText } = render(
      <RadioGroup options={[option1]} data-testid={testId} />
    );
    const label1 = getByText(option1.label) as HTMLSpanElement;
    fireEvent.click(label1);
  });
});
