import * as React from "react";
import { render } from "@testing-library/react";
import DejaVuSansMono from "./DejaVuSansMono";

describe("DejaVuSansMono", () => {
  it("should not render any additional elements", () => {
    const { container } = render(<DejaVuSansMono />);
    expect(container).toBeEmptyDOMElement();
  });
});
