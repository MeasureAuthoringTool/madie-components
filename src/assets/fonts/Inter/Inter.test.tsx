import * as React from "react";
import { render } from "@testing-library/react";
import Inter from "./Inter";

describe("Inter", () => {
  it("should not render any additional elements", () => {
    const { container } = render(<Inter />);
    expect(container).toBeEmptyDOMElement();
  });
});
