import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import RadioInput, {
  RadioInputProps,
} from "../components/radioInput/RadioInput";
import { Title, Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/RadioInput",
  component: RadioInput,
  argTypes: {
    onClick: {
      actions: { argTypesRegex: "^on.*" },
      table: { disable: true },
    },
    "data-testid": { table: { disable: true } },
    label: { table: { disable: true } },
    name: { table: { disable: true } },
    value: { table: { disable: true } },
    option1: { control: "text" },
    option2: { control: "text" },
    option3: { control: "text" },
    disable2: { control: "boolean" },
    darkMode: { control: "boolean" },
  },
} as ComponentMeta<typeof RadioInput>;

interface ThemeableRadioInputProps extends RadioInputProps {
  darkMode: boolean;
  option1: string;
  option2: string;
  option3: string;
  disable2: boolean;
}

const Template: Story<ThemeableRadioInputProps> = ({
  darkMode,
  option1,
  option2,
  option3,
  label,
  disable2,
  ...args
}) => {
  setDarkMode(darkMode);

  return (
    <Background>
      <Title>RadioInput</Title>
      <RadioInput label={option1} {...args} value={1} />
      <RadioInput label={option2} {...args} value={2} disabled={disable2} />
      <RadioInput label={option3} {...args} value={3} />
    </Background>
  );
};

export const _RadioInput = Template.bind({});
_RadioInput.args = {
  name: "inputStory",
  option1: "Yes",
  option2: "No",
  option3: "Maybe",
  disable2: true,
};
