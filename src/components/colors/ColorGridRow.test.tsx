import * as React from "react";
import { render } from "@testing-library/react";
import ColorGridRow from "./ColorGridRow";

describe("ColorGridRow", () => {
  it("should render a single ColorGridRow", () => {
    const { container } = render(
      <ColorGridRow colorName={"blue"} title="Blue" />
    );
    expect(container).toBeVisible();
    expect(container.children.length).toBe(1);
    const gridWrapper = container.children[0];
    expect(gridWrapper.children.length).toBe(10);
    const childrenArray = Array.from(gridWrapper.children);
    const [header, ...shadeCells] = childrenArray;
    expect(header).toHaveTextContent("Blue");
    shadeCells.forEach((shadeCell) => {
      expect(shadeCell).toHaveTextContent("");
    });
    expect(container).toMatchSnapshot();
  });
});
