import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { PlusIcon } from "@heroicons/react/solid";
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
    buttonTitle: { table: { disable: true } },
    loadingText: { table: { disable: true } },
    buttonSize: { table: { disable: true } },
    icon: { table: { disable: true } },
    trailingIcon: { table: { disable: true } },
    variant: { table: { disable: true } },
    shape: { table: { disable: true } },
    darkMode: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

interface ThemeableButtonProps extends ButtonProps {
  darkMode: boolean;
}

const Template: Story<ThemeableButtonProps> = ({ darkMode, ...args }) => {
  setDarkMode(darkMode);
  return (
    <Background>
      <Title>Primary</Title>
      <Row>
        <Button buttonSize="xs" icon={PlusIcon} variant="primary" {...args} />
        <Button buttonSize="sm" icon={PlusIcon} variant="primary" {...args} />
        <Button buttonSize="md" icon={PlusIcon} variant="primary" {...args} />
        <Button buttonSize="lg" icon={PlusIcon} variant="primary" {...args} />
        <Button buttonSize="xl" icon={PlusIcon} variant="primary" {...args} />
      </Row>

      <Title>Secondary</Title>
      <Row>
        <Button buttonSize="xs" icon={PlusIcon} variant="secondary" {...args} />
        <Button buttonSize="sm" icon={PlusIcon} variant="secondary" {...args} />
        <Button buttonSize="md" icon={PlusIcon} variant="secondary" {...args} />
        <Button buttonSize="lg" icon={PlusIcon} variant="secondary" {...args} />
        <Button buttonSize="xl" icon={PlusIcon} variant="secondary" {...args} />
      </Row>

      <Title>White</Title>
      <Row>
        <Button buttonSize="xs" icon={PlusIcon} variant="white" {...args} />
        <Button buttonSize="sm" icon={PlusIcon} variant="white" {...args} />
        <Button buttonSize="md" icon={PlusIcon} variant="white" {...args} />
        <Button buttonSize="lg" icon={PlusIcon} variant="white" {...args} />
        <Button buttonSize="xl" icon={PlusIcon} variant="white" {...args} />
      </Row>
    </Background>
  );
};

export const Circular = Template.bind({});
Circular.args = {
  loading: false,
  shape: "circular",
};
