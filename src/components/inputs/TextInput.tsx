import React from "react";
import tw, { styled } from "twin.macro";
import { LabelComponent } from "../labels/Label";
import { HelperTextComponent } from "../helperText/HelperText";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";

type IconType = (props: React.ComponentProps<"svg">) => JSX.Element;

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: any;
  hasError?: boolean;
  isValidationSuccess?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

interface HandleTextInputProps {
  hasError?: boolean;
  isValidationSuccess?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

const StyledTextInput = styled.input<HandleTextInputProps>(
  ({ hasError, isValidationSuccess, leftIcon, rightIcon }) => [
    !!hasError
      ? tw`px-4 py-2 pr-10 block w-full border-red-100 dark:border-red-300 text-red-800 dark:text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-100 focus:border-red sm:text-sm border-2 truncate`
      : tw`px-4 py-2 focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-gray-300 dark:border-gray-700 border-2 truncate`,
    !!leftIcon && tw`px-10`,
    (!!rightIcon || isValidationSuccess) && tw`pr-10`,
  ]
);

export function TextInputComponent(props: TextInputProps) {
  const {
    children,
    hasError,
    isValidationSuccess,
    leftIcon,
    rightIcon,
    ...args
  } = props;
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === LabelComponent) return child;
      })}
      <div tw="mt-1 relative rounded-md shadow-sm overflow-hidden">
        {!!leftIcon && (
          <div tw="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div tw="h-5 w-5 text-gray-300" aria-hidden="true">
              {leftIcon}
            </div>
          </div>
        )}

        <StyledTextInput
          {...args}
          hasError={hasError}
          isValidationSuccess={isValidationSuccess}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />
        {!!rightIcon && (
          <div tw="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div tw="h-5 w-5 text-gray-300" aria-hidden="true">
              {rightIcon}
            </div>
          </div>
        )}
        {!!hasError && (
          <div tw="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              tw="h-5 w-5 text-red dark:text-red-300"
              aria-hidden="true"
            />
          </div>
        )}
        {!!isValidationSuccess && (
          <div tw="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <CheckCircleIcon
              tw="h-5 w-5 text-green dark:text-green-200"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {React.Children.map(children, (child) => {
        if (child.type === HelperTextComponent) return child;
      })}
    </div>
  );
}
