import React from "react";
import tw, { styled } from "twin.macro";

export interface HelperTextProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  isError?: boolean;
}

interface HandleHelperTextProps {
  isError?: boolean;
}

const StyledHelperTextLabel = styled.label<HandleHelperTextProps>(
  ({ isError }) => [
    !!isError ? tw`mt-2 text-sm text-red` : tw`mt-2 text-sm text-gray-600`,
  ]
);

export function HelperTextComponent(props: HelperTextProps) {
  const { text, isError, ...args } = props;
  return (
    <StyledHelperTextLabel {...args} isError={isError}>
      {text}
    </StyledHelperTextLabel>
  );
}
