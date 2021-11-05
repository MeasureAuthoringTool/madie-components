import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Label, { LabelProps } from "../components/labels/Label";
import { Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/Labels",
  component: Label,
  argTypes: { darkMode: { control: "boolean" } },
} as ComponentMeta<typeof Label>;

interface ThemeableLabelProps extends LabelProps {
  darkMode: boolean;
}

const Template: Story<ThemeableLabelProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);
  return (
    <Background>
      <Label {...args} />
    </Background>
  );
};

export const defaultLabel = Template.bind({});
defaultLabel.args = {
  text: "Label",
  htmlFor: "inputId",
};

export const labelWithCornerHint = Template.bind({});
labelWithCornerHint.args = {
  text: "Label",
  htmlFor: "inputId",
  cornerHint: "Optional",
};
