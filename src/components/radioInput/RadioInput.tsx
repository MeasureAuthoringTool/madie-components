import React from "react";
import tw from "twin.macro";
import useUniqueId from "../../hooks/useUniqueId";

export interface RadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: never;
  id?: string;
  label: string;
  name: string;
  value: string | ReadonlyArray<string> | number;
  disabled?: boolean;
  "data-testid"?: string;
}

const StyledInput = tw.input`
  mb-1
  checked:text-primary-500
  checked:bg-primary-500
  bg-white
  disabled:bg-gray-100
  dark:bg-gray-975
  disabled:dark:bg-gray-950
  border-gray-300
  dark:border-gray-600
  disabled:dark:border-gray-700
  focus:ring-2
  focus:ring-offset-2
  focus:ring-primary-500!
  focus:dark:ring-offset-gray-975!
  `;

const StyledLabel = tw.label`
  font-body
  ml-2
  mr-5
  text-gray-800
  disabled:text-gray-500
  dark:text-gray-300`;

const DisabledLabel = tw(StyledLabel)`
  text-gray-500
  dark:text-gray-600`;

export default function RadioInput(args: RadioInputProps) {
  const uniqueId = useUniqueId("radio-input-");
  // Capture id, type and name here so that props will not contain it
  const { id, label, type, name, disabled, ...props } = args;
  const inputId = id || uniqueId;
  const labelId = `${inputId}-label`;

  const LabelEl = disabled ? DisabledLabel : StyledLabel;

  return (
    <>
      <StyledInput
        type="radio"
        id={inputId}
        name={name}
        disabled={disabled}
        {...props}
      />
      <LabelEl id={labelId} htmlFor={inputId}>
        {label}
      </LabelEl>
    </>
  );
}
