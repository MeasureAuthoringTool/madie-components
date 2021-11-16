import React from "react";
import { Fieldset, Legend } from "./CheckboxStyles";
import Checkbox, { CheckboxProps } from "./Checkbox";

export interface CheckboxListProps {
  children?: never;
  legend?: string;
  checkboxes: Array<CheckboxProps>;
}

export default function CheckboxList(args: CheckboxListProps) {
  const { legend, checkboxes, ...props } = args;
  return (
    <Fieldset>
      {legend ? <Legend>{legend}</Legend> : undefined}
      {checkboxes.map((checkbox, index) => (
        <Checkbox key={index} {...checkbox} />
      ))}
    </Fieldset>
  );
}
