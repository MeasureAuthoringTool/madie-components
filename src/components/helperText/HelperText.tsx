import React from "react";
import tw, { styled } from "twin.macro";

export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  isError?: boolean;
}

const defaultHelperText = tw.span`mt-2 text-sm text-gray-600 dark:text-gray-300`;
const errorHelperText = tw(defaultHelperText)`text-red dark:text-red-300`;

export function HelperTextComponent(props: HelperTextProps) {
  const { text, isError, ...args } = props;

  const StyledHelperTextSpan = !!isError ? errorHelperText : defaultHelperText;

  return <StyledHelperTextSpan {...args}>{text}</StyledHelperTextSpan>;
}
