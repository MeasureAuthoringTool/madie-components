import React from "react";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import {
  HelperTextComponent,
  HelperTextProps,
} from "../components/helperText/HelperText";
import { Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/HelperText",
  component: HelperTextComponent,
  argTypes: { darkMode: { control: "boolean" } },
} as ComponentMeta<typeof HelperTextComponent>;

interface ThemeableHelperTextProps extends HelperTextProps {
  darkMode: boolean;
}

const Template: Story<ThemeableHelperTextProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);
  return (
    <Background>
      <HelperTextComponent {...args} />
    </Background>
  );
};

export const defaultHelperText = Template.bind({});
defaultHelperText.args = {
  text: "Help text goes here",
};

export const errorHelperText = Template.bind({});
errorHelperText.args = {
  text: "Error text goes here",
  isError: true,
};
