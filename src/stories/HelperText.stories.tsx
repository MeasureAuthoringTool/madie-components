import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import HelperText, {
  HelperTextProps,
} from "../components/helperText/HelperText";
import { Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/HelperText",
  component: HelperText,
  argTypes: { darkMode: { control: "boolean" } },
} as ComponentMeta<typeof HelperText>;

interface ThemeableHelperTextProps extends HelperTextProps {
  darkMode: boolean;
}

const Template: Story<ThemeableHelperTextProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);
  return (
    <Background>
      <HelperText {...args} />
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
