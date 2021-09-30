import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInputComponent } from "../components/inputs/TextInput";
import { LabelComponent } from "../components/labels/Label";
import { HelperTextComponent } from "../components/helperText/HelperText";

export default {
  title: "MADiE/TextInput",
  component: TextInputComponent,
} as ComponentMeta<typeof TextInputComponent>;

const lableProps = {
  text: "Label",
  isOptional: true,
  for: "TestInputId",
};

const helperTextProps = {
  text: "Help text goes here",
};

const Template: ComponentStory<typeof TextInputComponent> = (args) => (
  <TextInputComponent {...args}>
    <LabelComponent {...lableProps} />
    <HelperTextComponent {...helperTextProps} />
  </TextInputComponent>
);

export const defaultTextInput = Template.bind({});
defaultTextInput.args = {
  type: "Text",
  name: "TextinputName",
  id: "TextInputId",
  placeholder: "you@example.com",
  hasError: false,
  isEmail: true,
  hasHelperIcon: true,
};
