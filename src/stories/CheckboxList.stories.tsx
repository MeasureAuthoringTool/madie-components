import React, { useState } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import CheckboxList, {
  CheckboxListProps,
} from "../components/checkbox/CheckboxList";
import { Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/Checkboxes",
  component: CheckboxList,
  argTypes: {
    onClick: {
      actions: { argTypesRegex: "^on.*" },
      table: { disable: true },
    },
    checkboxes: { table: { disable: true } },
    darkMode: { control: "boolean" },
  },
} as ComponentMeta<typeof CheckboxList>;

interface ThemeableProps extends CheckboxListProps {
  darkMode: boolean;
}

const Template: Story<ThemeableProps> = ({ darkMode, ...args }) => {
  const { checkboxes } = args;
  setDarkMode(darkMode);

  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(true);

  checkboxes[0].checked = checkedOne;
  checkboxes[1].checked = checkedTwo;

  checkboxes[0].handleChange = setCheckedOne;
  checkboxes[1].handleChange = setCheckedTwo;

  return (
    <Background>
      <CheckboxList {...args} />
    </Background>
  );
};

export const _CheckboxList = Template.bind({});
_CheckboxList.args = {
  legend: "Checkbox List",
  checkboxes: [
    {
      label: "Checkbox One",
      description: "Box descr",
    },
    {
      label: "Checkbox Two",
      description: "Box two descr",
    },
    {
      label: "Checkbox Three",
      description: "Disabled checkbox",
      disabled: true,
    },
  ],
};
