import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  cornerHint?: string;
}

export default function Label(props: LabelProps) {
  const { cornerHint, ...args } = props;
  return (
    <div tw="flex justify-between" data-testid="label-component-test">
      <label
        {...args}
        tw="block text-sm font-medium text-gray-800 dark:text-gray-300"
      >
        {props.text}
      </label>
      {!!cornerHint && (
        <span tw="text-sm text-gray-600 dark:text-gray-300">{cornerHint}</span>
      )}
    </div>
  );
}
