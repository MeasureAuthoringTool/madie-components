import React from "react";
import tw, { styled } from "twin.macro";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  isOptional?: boolean;
}

export function LabelComponent(props: LabelProps) {
  const { isOptional, ...args } = props;
  return (
    <div tw="flex justify-between">
      <label {...args} tw="block text-sm font-medium text-gray-700">
        {props.text}
      </label>
      {!!isOptional && <span tw="text-sm text-gray-500">Optional</span>}
    </div>
  );
}
