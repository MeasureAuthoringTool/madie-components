import React, { useState } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "../components/checkbox/Checkbox";
import { Title, Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/Checkboxes",
  component: Checkbox,
  argTypes: {
    onClick: {
      actions: { argTypesRegex: "^on.*" },
      table: { disable: true },
    },
    id: { table: { disable: true } },
    "data-testid": { table: { disable: true } },
    checked: { table: { disable: true } },
    handleChange: { table: { disable: true } },
    darkMode: { control: "boolean" },
  },
} as ComponentMeta<typeof Checkbox>;

interface ThemeableCheckboxProps extends CheckboxProps {
  darkMode: boolean;
}

const Template: Story<ThemeableCheckboxProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);

  const { checked, ...props } = args;

  const [checkedOne, setCheckedOne] = useState(checked);

  return (
    <Background>
      <Title>Single Checkbox</Title>
      <Checkbox checked={checkedOne} handleChange={setCheckedOne} {...props} />
    </Background>
  );
};

export const SingleCheckbox = Template.bind({});
SingleCheckbox.args = {
  disabled: false,
  label: "Comments",
  description: "Get notified when someone posts a comment on posting.",
};
