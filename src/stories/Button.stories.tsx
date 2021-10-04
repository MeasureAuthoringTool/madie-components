import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import tw from "twin.macro";
import { MailIcon } from "@heroicons/react/solid";
import Button, { ButtonProps } from "../components/buttons/Button";
import { Row, Title, Background, setDarkMode } from "./common/storybook-common";

export default {
  title: "MADiE/Buttons",
  component: Button,
  argTypes: {
    onClick: {
      actions: { argTypesRegex: "^on.*" },
      table: { disable: true },
    },
    buttonSize: { table: { disable: true } },
    icon: { table: { disable: true } },
    trailingIcon: { table: { disable: true } },
    variant: { table: { disable: true } },
    shape: { control: "radio", options: ["normal", "round", "circular"] },
    darkMode: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const PaddedButton = tw(Button)`mr-6`;

interface ThemeableButtonProps extends ButtonProps {
  darkMode: boolean;
}

const Template: Story<ThemeableButtonProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);
  return (
    <Background>
      <Title>No Icon</Title>
      <Row>
        <PaddedButton buttonSize="xs" {...args} />
        <PaddedButton buttonSize="sm" {...args} />
        <PaddedButton buttonSize="md" {...args} />
        <PaddedButton buttonSize="lg" {...args} />
        <PaddedButton buttonSize="xl" {...args} />
      </Row>

      <Title>Leading Icon</Title>
      <Row>
        <Button buttonSize="xs" icon={MailIcon} {...args} />
        <Button buttonSize="sm" icon={MailIcon} {...args} />
        <Button buttonSize="md" icon={MailIcon} {...args} />
        <Button buttonSize="lg" icon={MailIcon} {...args} />
        <Button buttonSize="xl" icon={MailIcon} {...args} />
      </Row>

      <Title>Trailing Icon</Title>
      <Row>
        <Button buttonSize="xs" icon={MailIcon} trailingIcon {...args} />
        <Button buttonSize="sm" icon={MailIcon} trailingIcon {...args} />
        <Button buttonSize="md" icon={MailIcon} trailingIcon {...args} />
        <Button buttonSize="lg" icon={MailIcon} trailingIcon {...args} />
        <Button buttonSize="xl" icon={MailIcon} trailingIcon {...args} />
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

export const Secondary = Template.bind({});
Secondary.args = {
  buttonTitle: "Button text",
  loadingText: "Loading...",
  loading: false,
  variant: "secondary",
};

export const White = Template.bind({});
White.args = {
  buttonTitle: "Button text",
  loadingText: "Loading...",
  loading: false,
  variant: "white",
};
