import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LabelComponent } from "../components/labels/Label";

export default {
  title: "MADiE/Labels",
  component: LabelComponent,
} as ComponentMeta<typeof LabelComponent>;

const Template: ComponentStory<typeof LabelComponent> = (args) => (
  <LabelComponent {...args} />
);

export const defaultLabel = Template.bind({});
defaultLabel.args = {
  text: "Label",
  for: "inputId",
};

export const labelWithCornerHint = Template.bind({});
labelWithCornerHint.args = {
  text: "Label",
  for: "inputId",
  isOptional: true,
};
