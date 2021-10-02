import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInputComponent } from "../components/inputs/TextInput";
import { LabelComponent } from "../components/labels/Label";
import { HelperTextComponent } from "../components/helperText/HelperText";
import { QuestionMarkCircleIcon, MailIcon } from "@heroicons/react/solid";

export default {
  title: "MADiE/TextInput",
  component: TextInputComponent,
} as ComponentMeta<typeof TextInputComponent>;

let labelProps = {
  text: "Label",
  for: "TestInputId",
  isOptional: false,
};

const helperTextProps = {
  text: "Help text goes here",
  isError: false,
};

const Template: ComponentStory<typeof TextInputComponent> = (args) => (
  <TextInputComponent {...args} />
);

export const defaultTextInputWithLabel = Template.bind({});
defaultTextInputWithLabel.args = {
  children: <LabelComponent {...labelProps} />,
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
};

labelProps.isOptional = true;

export const textInputWithCornerHint = Template.bind({});
textInputWithCornerHint.args = {
  children: <LabelComponent {...labelProps} />,
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

labelProps.isOptional = false;
export const textInputWithLeadingIcon = Template.bind({});
textInputWithLeadingIcon.args = {
  children: <LabelComponent {...labelProps} />,
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
  leftIcon: <MailIcon />,
};

export const textInputWithTrailingIcon = Template.bind({});
textInputWithTrailingIcon.args = {
  children: <LabelComponent {...labelProps} />,
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
  children: [
    <LabelComponent {...labelProps} />,
    <HelperTextComponent {...helperTextProps} />,
  ],
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
  children: [
    <LabelComponent {...labelProps} />,
    <HelperTextComponent {...helperTextProps} />,
  ],
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
  isValidationSuccess: true,
};

helperTextProps.text = "Help text goes here";
export const textInputWithLabelAndHelpText = Template.bind({});
textInputWithLabelAndHelpText.args = {
  children: [
    <LabelComponent {...labelProps} />,
    <HelperTextComponent {...helperTextProps} />,
  ],
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
};
