import * as React from "react";
import { render } from "@testing-library/react";
import GlobalStyles from "./GlobalStyles";

describe("GlobalStyles", () => {
  it("should not render any additional elements", () => {
    const { container } = render(<GlobalStyles />);
    expect(container).toBeEmptyDOMElement();
  });
});
