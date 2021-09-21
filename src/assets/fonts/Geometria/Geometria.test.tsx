import * as React from "react";
import { render } from "@testing-library/react";
import Geometria from "./Geometria";

describe("Geometria", () => {
  it("should not render any additional elements", () => {
    const { container } = render(<Geometria />);
    expect(container).toBeEmptyDOMElement();
  });
});
