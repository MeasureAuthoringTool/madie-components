import React from "react";
import _ from "lodash";
import {
  DisabledDescription,
  DisabledLabel,
  EnabledDescription,
  EnabledLabel,
  Input,
  InputWrapper,
  LabelWrapper,
  OuterWrapper,
} from "./CheckboxStyles";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: never;
  label: string;
  description?: string;
  disabled?: boolean;
  id?: string;
  checked?: boolean;
  handleChange?: (value: boolean) => void;
  "data-testid"?: string;
}

export default function Checkbox(args: CheckboxProps) {
  const { id, label, description, checked, handleChange, disabled, ...props } =
    args;

  const inputId = id || `checkbox-${_.uniqueId()}`;
  const labelId = `${inputId}-label`;
  const descriptionId = description ? `${inputId}-description` : undefined;

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (handleChange) {
      handleChange(!!e.target.checked);
    }
  }

  const Label = disabled ? DisabledLabel : EnabledLabel;
  const Description = disabled ? DisabledDescription : EnabledDescription;

  return (
    <OuterWrapper>
      <InputWrapper>
        <Input
          id={inputId}
          aria-describedby={descriptionId}
          type="checkbox"
          checked={!!checked}
          onChange={changeHandler}
          disabled={disabled}
          {...props}
        />
      </InputWrapper>
      <LabelWrapper>
        <Label id={labelId} htmlFor={inputId}>
          {label}
        </Label>
        {description ? (
          <Description id={descriptionId}>{description}</Description>
        ) : undefined}
      </LabelWrapper>
    </OuterWrapper>
  );
}
