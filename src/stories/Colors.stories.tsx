import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ColorGrid from "../components/colors/ColorGrid";

export default {
  title: "MADiE/Colors",
  component: ColorGrid,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ColorGrid>;

const Template: ComponentStory<typeof ColorGrid> = (args) => (
  <ColorGrid {...args} />
);

export const LightBackground = Template.bind({});
LightBackground.args = {
  backgroundColor: "#FFFFFF",
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  backgroundColor: "#080b1a",
};
