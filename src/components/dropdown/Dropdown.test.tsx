import * as React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Dropdown, { DropdownOption } from "./Dropdown";
import userEvent from "@testing-library/user-event";

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

  test("that the dropdown shows the default value instead of custom placeholder", async () => {
    render(
      <Dropdown placeholder="Custom placeholder" defaultValue="Second">
        <DropdownOption value="First">First Item</DropdownOption>
        <DropdownOption value="Second">Second Item</DropdownOption>
        <DropdownOption value="Third">Third Item</DropdownOption>
      </Dropdown>
    );

    const secondItem = await screen.findByText("Second Item");
    expect(secondItem).toBeInTheDocument();
    const missingThirdItem = await screen.queryByText("Third Item");
    expect(missingThirdItem).not.toBeInTheDocument();
    const missingFirstItem = await screen.queryByText("First Item");
    expect(missingFirstItem).not.toBeInTheDocument();
    const missingCustomPH = await screen.queryByText("Custom placeholder");
    expect(missingCustomPH).not.toBeInTheDocument();
    const missingDefaultPH = await screen.queryByText("Select an option");
    expect(missingDefaultPH).not.toBeInTheDocument();
  });

  test("that the dropdown shows the options when clicked", async () => {
    render(
      <Dropdown placeholder="Custom placeholder">
        <DropdownOption value="First">First Item</DropdownOption>
        <DropdownOption value="Second">Second Item</DropdownOption>
        <DropdownOption value="Third">Third Item</DropdownOption>
      </Dropdown>
    );

    const content = await screen.findByText("Custom placeholder");
    expect(content).toBeInTheDocument();
    const button = screen.getByRole("button");
    userEvent.click(button);
    const firstItem = await screen.findByText("First Item");
    expect(firstItem).toBeInTheDocument();
    const secondItem = await screen.getByText("Second Item");
    expect(secondItem).toBeInTheDocument();
    const thirdItem = await screen.getByText("Third Item");
    expect(thirdItem).toBeInTheDocument();
  });

  test("that the dropdown shows the select option text when clicked", async () => {
    render(
      <Dropdown placeholder="Custom placeholder">
        <DropdownOption value="First">First Item</DropdownOption>
        <DropdownOption value="Second">Second Item</DropdownOption>
        <DropdownOption value="Third">Third Item</DropdownOption>
      </Dropdown>
    );

    const content = await screen.findByText("Custom placeholder");
    expect(content).toBeInTheDocument();
    const button = screen.getByRole("button");
    userEvent.click(button);
    const secondItem = await screen.findByText("Second Item");
    expect(secondItem).toBeInTheDocument();
    userEvent.click(secondItem);
    const button2 = await screen.findByRole("button", { name: /second item/i });
    expect(button2).toBeInTheDocument();
    const missingPlaceholder = screen.queryByText("Custom placeholder");
    expect(missingPlaceholder).not.toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText("First Item"));
    const missingThirdItem = await screen.queryByText("Third Item");
    expect(missingThirdItem).not.toBeInTheDocument();
  });

  test("that the dropdown calls onChange when selection changes", async () => {
    const changeHandler = jest.fn();
    render(
      <Dropdown
        placeholder="Custom placeholder"
        value={null}
        onChange={changeHandler}
      >
        <DropdownOption value="First">First Item</DropdownOption>
        <DropdownOption value="Second">Second Item</DropdownOption>
        <DropdownOption value="Third">Third Item</DropdownOption>
      </Dropdown>
    );

    const content = await screen.findByText("Custom placeholder");
    expect(content).toBeInTheDocument();
    const button = screen.getByRole("button");
    userEvent.click(button);
    const secondItem = await screen.findByText("Second Item");
    expect(secondItem).toBeInTheDocument();
    userEvent.click(secondItem);
    const button2 = await screen.findByRole("button", { name: /second item/i });
    expect(button2).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText("First Item"));
    expect(changeHandler).toHaveBeenCalledWith("Second");
  });

  test("that the dropdown renders the controlled value", async () => {
    const { rerender } = render(
      <Dropdown value={null}>
        <DropdownOption value="First">First Item</DropdownOption>
        <DropdownOption value="Second">Second Item</DropdownOption>
        <DropdownOption value="Third">Third Item</DropdownOption>
      </Dropdown>
    );

    const content = await screen.findByText("Select an option");
    expect(content).toBeInTheDocument();
    const missingSecond = screen.queryByText("Second Item");
    expect(missingSecond).not.toBeInTheDocument();
    rerender(
      <Dropdown value="Second">
        <DropdownOption value="First">First Item</DropdownOption>
        <DropdownOption value="Second">Second Item</DropdownOption>
        <DropdownOption value="Third">Third Item</DropdownOption>
      </Dropdown>
    );
    const second = await screen.findByText("Second Item");
    expect(second).toBeInTheDocument();
    rerender(
      <Dropdown value="Third">
        <DropdownOption value="First">First Item</DropdownOption>
        <DropdownOption value="Second">Second Item</DropdownOption>
        <DropdownOption value="Third">Third Item</DropdownOption>
      </Dropdown>
    );
    const third = await screen.findByText("Third Item");
    expect(third).toBeInTheDocument();
    const missingSecond2 = screen.queryByText("Second Item");
    expect(missingSecond2).not.toBeInTheDocument();
  });
});
