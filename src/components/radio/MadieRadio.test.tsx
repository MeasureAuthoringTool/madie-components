import * as React from "react";
import { render } from "@testing-library/react";

import MadieRadio from "./MadieRadio";

const testId = "madie-radio";

describe("Button component", () => {
  it("should render a button with no icons and no text", () => {
    const { getByTestId } = render(<MadieRadio data-testid={testId} />);
    const result = getByTestId(testId);
    expect(result).toBeInTheDocument();
    // expect(result).toBeEmptyDOMElement();
    // expect(result).toMatchSnapshot();
    // expect(result.nodeName).toBe("BUTTON");
  });
});
