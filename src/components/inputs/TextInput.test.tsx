import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExclamationCircleIcon, MailIcon } from "@heroicons/react/solid";
import TextInput from "./TextInput";
import LabelComponent from "../labels/Label";
import HelperTextComponent from "../helperText/HelperText";

const textInputTestId = "text-input-component";
const labelProps = {
  testId: "label-component-test",
  text: "Label",
  cornerHint: "Optional",
};

const textInputProps: any = {
  type: "text",
  name: "TextInputName",
  id: "TextInputId",
  placeholder: "you@example.com",
};

const helperTextProps = {
  testId: "helper-text-component-test",
  text: "Help text goes here",
  isError: false,
};

describe("TextInput Component", () => {
  it("should render default text input with no children", () => {
    render(<TextInput data-testid={textInputTestId} {...textInputProps} />);
    const textInput = screen.getByTestId(textInputTestId);
    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute("type", "text");

    userEvent.type(textInput, "test@mail.com");
    expect(textInput).toHaveValue("test@mail.com");

    expect(screen.queryByTestId(labelProps.testId)).not.toBeInTheDocument();
    expect(textInput).toMatchSnapshot();
  });

  it("should render text input with children components", () => {
    render(
      <TextInput data-testid={textInputTestId} {...textInputProps}>
        <LabelComponent
          text={labelProps.text}
          cornerHint={labelProps.cornerHint}
        />
        <HelperTextComponent
          data-testid={helperTextProps.testId}
          text={helperTextProps.text}
        />
      </TextInput>
    );
    const textInput = screen.getByTestId(textInputTestId);
    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute("type", "text");
    expect(textInput).toMatchSnapshot();

    const label = screen.queryByTestId(labelProps.testId);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(labelProps.text);
    expect(label).toHaveTextContent(labelProps.cornerHint);
    expect(label).toMatchSnapshot();

    const helperText = screen.queryByTestId(helperTextProps.testId);
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(helperTextProps.text);
    expect(helperText).toMatchSnapshot();
  });

  it("should render text input with left icon and right icon", () => {
    textInputProps.leftIcon = <MailIcon data-testid={"left-icon-test"} />;
    textInputProps.rightIcon = (
      <ExclamationCircleIcon data-testid={"right-icon-test"} />
    );

    render(<TextInput {...textInputProps} />);
    const leftIcon = screen.getByTestId("left-icon-test");
    expect(leftIcon).toBeInTheDocument();
    expect(leftIcon).toMatchSnapshot();

    const rightIcon = screen.getByTestId("right-icon-test");
    expect(rightIcon).toBeInTheDocument();
    expect(rightIcon).toMatchSnapshot();
  });

  it("should render text input with error", () => {
    textInputProps.hasError = true;

    render(<TextInput {...textInputProps} />);
    const errorIcon = screen.getByTestId("error-test-id");
    expect(errorIcon).toBeInTheDocument();
    expect(errorIcon).toMatchSnapshot();
  });

  it("should render text input with success validation", () => {
    textInputProps.isValidationSuccess = true;

    render(<TextInput {...textInputProps} />);
    const successIcon = screen.getByTestId("success-test-id");
    expect(successIcon).toBeInTheDocument();
    expect(successIcon).toMatchSnapshot();
  });
});
