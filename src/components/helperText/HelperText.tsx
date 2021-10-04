import React from "react";
import tw, { styled } from "twin.macro";

export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  isError?: boolean;
}

interface HandleHelperTextProps {
  isError?: boolean;
}

const StyledHelperTextSpan = styled.span<HandleHelperTextProps>(
  ({ isError }) => [
    !!isError
      ? tw`mt-2 text-sm text-red dark:text-red-300`
      : tw`mt-2 text-sm text-gray-600 dark:text-gray-300`,
  ]
);

export function HelperTextComponent(props: HelperTextProps) {
  const { text, isError, ...args } = props;
  return (
    <StyledHelperTextSpan {...args} isError={isError}>
      {text}
    </StyledHelperTextSpan>
  );
}
