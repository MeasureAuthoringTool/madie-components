import * as React from "react";
import { render } from "@testing-library/react";
import HelperText from "./HelperText";

const testId = "helper-text-component-test";
const defaultText = "Help text goes here";
const errorText = "Error text goes here";

describe("Helper Text Component", () => {
  it("should render a default helper text", () => {
    const { getByTestId } = render(
      <HelperText data-testid={testId} text={defaultText} />
    );
    const helperText = getByTestId(testId);
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(defaultText);
    expect(helperText).toMatchSnapshot();
  });

  it("should render a error helper text", () => {
    const { getByTestId } = render(
      <HelperText data-testid={testId} text={errorText} isError={true} />
    );
    const helperText = getByTestId(testId);
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(errorText);
    expect(helperText).toMatchSnapshot();
  });
});
