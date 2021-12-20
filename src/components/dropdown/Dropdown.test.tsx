import * as React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown, { DropdownOption } from "./Dropdown";

describe("Dropdown Component", () => {
  test("that the dropdown renders", async () => {
    const value = { id: 123, name: "test obj" };
    render(
      <Dropdown>
        <DropdownOption value={value}>
          <span>Content here</span>
        </DropdownOption>
      </Dropdown>
    );

    const content = await screen.findByText("Select an option");
    expect(content).toBeInTheDocument();
  });

  test("that the dropdown renders with custom placeholder", async () => {
    const value = { id: 123, name: "test obj" };
    render(
      <Dropdown placeholder="Custom placeholder">
        <DropdownOption value={value}>
          <span>Content here</span>
        </DropdownOption>
      </Dropdown>
    );

    const content = await screen.findByText("Custom placeholder");
    expect(content).toBeInTheDocument();
  });
});
