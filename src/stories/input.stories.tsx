import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/inputs/input";
import tw, { styled } from "twin.macro";

export default {
  title: "MADiE/Inputs",
  component: Input,
} as ComponentMeta<typeof Input>;

const StyledBackGround = styled.div`
  ${({ theme }) => theme == "black" && tw`bg-black text-white`};
  ${({ theme }) => theme == "white" && tw`bg-white text-black`};
`;

const Template: ComponentStory<typeof Input> = (args) => (
  <StyledBackGround theme={args.backgroundColor}>
    <Input {...args} />
  </StyledBackGround>
);

export const defaultInput = Template.bind({});
defaultInput.args = {
  backgroundColor: "white",
  id: "inputTestId",
  name: "inputTestName",
  type: "text",
  placeHolder: "you@example.com",
  label: "Label",
  hasError: true,
  spanText: "Error Message",
};
