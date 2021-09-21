import * as React from "react";
import { render } from "@testing-library/react";
import ColorGrid from "./ColorGrid";

describe("ColorGrid", () => {
  it("should render a ColorGrid, a collection of ColorGridRows", () => {
    const { container } = render(<ColorGrid backgroundColor={"blue"} />);
    expect(container).toBeVisible();
    expect(container.children.length).toBe(1);
    const wrapper = container.children[0];
    expect(wrapper.children.length).toBe(7);
    const colorArray = Array.from(wrapper.children);
    expect(colorArray[0]).toHaveTextContent("Primary");
    expect(colorArray[1]).toHaveTextContent("Teal");
    expect(colorArray[2]).toHaveTextContent("Green");
    expect(colorArray[3]).toHaveTextContent("Blue");
    expect(colorArray[4]).toHaveTextContent("Yellow");
    expect(colorArray[5]).toHaveTextContent("Red");
    expect(colorArray[6]).toHaveTextContent("Gray");
    expect(container).toMatchSnapshot();
  });
});
