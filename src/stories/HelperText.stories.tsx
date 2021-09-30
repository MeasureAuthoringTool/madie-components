import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HelperTextComponent } from "../components/helperText/HelperText";

export default {
  title: "MADiE/HelperText",
  component: HelperTextComponent,
} as ComponentMeta<typeof HelperTextComponent>;

const Template: ComponentStory<typeof HelperTextComponent> = (args) => (
  <HelperTextComponent {...args} />
);

export const defaultHelperText = Template.bind({});
defaultHelperText.args = {
  text: "Help text goes here",
};

export const errorHelperText = Template.bind({});
errorHelperText.args = {
  text: "Error text goes here",
  isError: true,
};
