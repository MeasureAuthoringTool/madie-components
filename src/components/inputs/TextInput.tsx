import React from "react";
import tw from "twin.macro";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";
import Label from "../labels/Label";
import HelperText from "../helperText/HelperText";

type IconType = (props: React.ComponentProps<"svg">) => JSX.Element;

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: any;
  hasError?: boolean;
  isValidationSuccess?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

const defaultTextInput = tw.input`
  px-4 py-2
  block
  w-full
  truncate
  border
  rounded-md
  border-gray-300
  focus:outline-blue
  sm:text-sm
  dark:border-gray-700
  dark:focus:outline-blue
  dark:bg-gray-950
`;

function getStyledInput(props: TextInputProps) {
  let styleInput = defaultTextInput;

  if (!!props.leftIcon) {
    styleInput = tw(styleInput)`pl-10`;
  }
  if (!!props.rightIcon || !!props.isValidationSuccess) {
    styleInput = tw(styleInput)`pr-10`;
  }
  if (!!props.hasError) {
    styleInput = tw(styleInput)`pr-10 
    text-red-800
    placeholder-red-300
    border-red-100
    focus:outline-red-300
    dark:bg-gray-950
    dark:border-red-300
    dark:text-red-300
    dark:focus:outline-red-600`;
  }
  return styleInput;
}

export default function TextInput(props: TextInputProps) {
  const {
    children,
    hasError,
    isValidationSuccess,
    leftIcon,
    rightIcon,
    ...args
  } = props;

  let StyledTextInput = getStyledInput(props);

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child?.type === Label) return child;
      })}
      <div tw="mt-1 relative rounded-md shadow-sm">
        {!!leftIcon && (
          <div tw="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div tw="h-5 w-5 text-gray-300" aria-hidden="true">
              {leftIcon}
            </div>
          </div>
        )}

        <StyledTextInput {...args} />
        {!!rightIcon && (
          <div tw="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div tw="h-5 w-5 text-gray-300" aria-hidden="true">
              {rightIcon}
            </div>
          </div>
        )}
        {!!hasError && (
          <div
            tw="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            data-testid="error-test-id"
          >
            <ExclamationCircleIcon
              tw="h-5 w-5 text-red dark:text-red-300"
              aria-hidden="true"
            />
          </div>
        )}
        {!!isValidationSuccess && (
          <div
            tw="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            data-testid="success-test-id"
          >
            <CheckCircleIcon
              tw="h-5 w-5 text-green dark:text-green-200"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {React.Children.map(children, (child) => {
        if (child?.type === HelperText) return child;
      })}
    </div>
  );
}
