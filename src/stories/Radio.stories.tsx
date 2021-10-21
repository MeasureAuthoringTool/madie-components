import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import tw from "twin.macro";
import { MailIcon } from "@heroicons/react/solid";
import MadieRadio, { OptProps } from "../components/radio/MadieRadio";
import { Row, Title, Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/Radio",
  component: MadieRadio,
  argTypes: {
    onClick: {
      actions: { argTypesRegex: "^on.*" },
      table: { disable: true },
    },
    buttonSize: { table: { disable: true } },
    icon: { table: { disable: true } },
    trailingIcon: { table: { disable: true } },
    variant: { table: { disable: true } },
    shape: { control: "radio", options: ["normal", "round"] },
    darkMode: { control: "boolean" },
  },
} as ComponentMeta<typeof MadieRadio>;

const PaddedButton = tw(MadieRadio)`mr-6`;

interface ThemeableOptProps extends OptProps {
  darkMode: boolean;
}

const Template: Story<ThemeableOptProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);
  return (
    <Background>
      <Row>
        <MadieRadio {...args} />
      </Row>
    </Background>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  buttonTitle: "Button text",
  loadingText: "Loading...",
  loading: false,
  variant: "primary",
};
