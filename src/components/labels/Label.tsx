import React from "react";
import tw, { styled } from "twin.macro";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  isOptional?: boolean;
}

const StyledLabel = styled.label(({}) => [
  tw`block text-sm font-medium text-gray-700`,
]);

const StyledSpan = styled.span(({}) => [tw`text-sm text-gray-500`]);

export function LabelComponent(props: LabelProps) {
  const { isOptional, ...args } = props;
  return (
    <div tw="flex justify-between">
      <StyledLabel {...args}>{props.text}</StyledLabel>
      {!!isOptional && <StyledSpan>Optional</StyledSpan>}
    </div>
  );
}
