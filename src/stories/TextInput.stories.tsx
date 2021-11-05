import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import TextInput, { TextInputProps } from "../components/inputs/TextInput";
import Label from "../components/labels/Label";
import HelperText from "../components/helperText/HelperText";
import { QuestionMarkCircleIcon, MailIcon } from "@heroicons/react/solid";
import { Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/TextInput",
  component: TextInput,
  argTypes: { darkMode: { control: "boolean" } },
} as ComponentMeta<typeof TextInput>;

interface ThemeableTextInputProps extends TextInputProps {
  darkMode: boolean;
}

let labelProps = {
  text: "Label",
  htmlFor: "TestInputId",
  cornerHint: "",
};

const helperTextProps = {
  text: "Help text goes here",
  isError: false,
};

const Template: Story<ThemeableTextInputProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);
  return (
    <Background>
      <TextInput {...args} />
    </Background>
  );
};

export const defaultTextInputWithLabel = Template.bind({});
defaultTextInputWithLabel.args = {
  children: <Label {...labelProps} />,
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
};

labelProps.cornerHint = "Optional";
export const textInputWithCornerHint = Template.bind({});
textInputWithCornerHint.args = {
  children: <Label {...labelProps} />,
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
};

export const textInputWithNoLabel = Template.bind({});
textInputWithNoLabel.args = {
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
};

labelProps.cornerHint = "";
export const textInputWithLeadingIcon = Template.bind({});
textInputWithLeadingIcon.args = {
  children: <Label {...labelProps} />,
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
  leftIcon: <MailIcon />,
};

export const textInputWithTrailingIcon = Template.bind({});
textInputWithTrailingIcon.args = {
  children: <Label {...labelProps} />,
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
  rightIcon: <QuestionMarkCircleIcon />,
};

helperTextProps.text = "Error text goes here";
helperTextProps.isError = true;
export const textInputWithValidationError = Template.bind({});
textInputWithValidationError.args = {
  children: [<Label {...labelProps} />, <HelperText {...helperTextProps} />],
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
  hasError: true,
};

helperTextProps.text = "Input with success";
helperTextProps.isError = false;
export const textInputWithValidationSuccess = Template.bind({});
textInputWithValidationSuccess.args = {
  children: [<Label {...labelProps} />, <HelperText {...helperTextProps} />],
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
  isValidationSuccess: true,
};

helperTextProps.text = "Help text goes here";
export const textInputWithLabelAndHelpText = Template.bind({});
textInputWithLabelAndHelpText.args = {
  children: [<Label {...labelProps} />, <HelperText {...helperTextProps} />],
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
};
