import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface HelperTextProps {
  text: string;
}

export function HelperTextComponent(props: HelperTextProps) {
  const { text, ...args } = props;
  return (
    <p {...args} tw="mt-2 text-sm text-gray-500">
      {text}
    </p>
  );
}
