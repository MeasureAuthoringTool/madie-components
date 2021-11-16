import React, { useState } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import RadioGroup, {
  RadioGroupProps,
} from "../components/radioGroup/RadioGroup";
import { Title, Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/RadioGroup",
  component: RadioGroup,
  argTypes: {
    onClick: {
      actions: { argTypesRegex: "^on.*" },
      table: { disable: true },
    },
    id: { table: { disable: true } },
    checked: { table: { disable: true } },
    handleChange: { table: { disable: true } },
    darkMode: { control: "boolean" },
  },
} as ComponentMeta<typeof RadioGroup>;

interface ThemeableRadioGroupProps extends RadioGroupProps {
  darkMode: boolean;
}

const Template: Story<ThemeableRadioGroupProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);

  // const { ..props } = args;

  // const [checkedOne, setCheckedOne] = useState(checked);

  return (
    <Background>
      <Title>RadioGroup</Title>
      <RadioGroup
        // checked={checkedOne}
        // handleChange={setCheckedOne}
        {...args}
      />
    </Background>
  );
};

export const _RadioGroup = Template.bind({});
_RadioGroup.args = {
  disabled: false,
  srTitle: "Comments",
  options: [
    {
      label: "Public access",
      description: "This project would be available to anyone who has the link",
    },
    {
      label: "Private to Project Members",
      description: "Only members of this project would be able to access",
      disabled: true,
    },
    {
      label: "Private to you",
      description: "You are the only one able to access this project",
    },
  ],
};
