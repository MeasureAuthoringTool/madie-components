import React from "react";
import tw, { styled } from "twin.macro";
import { LabelComponent } from "../labels/Label";
import { HelperTextComponent } from "../helperText/HelperText";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: any;
  hasError?: boolean;
  isEmail?: boolean;
  hasHelperIcon?: boolean;
}

interface HandleTextInputProps {
  hasError?: boolean;
}

const StyledTextInput = styled.input<HandleTextInputProps>(({ hasError }) => [
  hasError
    ? tw`block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md`
    : tw`shadow-sm focus:ring-red-900 focus:border-red-900 block w-full sm:text-sm border-gray-300 rounded-md border-2`,
]);

export function TextInputComponent(props: TextInputProps) {
  const { children, hasError, isEmail, hasHelperIcon, ...args } = props;
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === LabelComponent) return child;
      })}
      <div tw="mt-1">
        {/* {!!isEmail ? (
          <div tw="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MailIcon tw="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        ) : (
          ""
        )} */}

        <StyledTextInput {...args} hasError={hasError} />

        {/* {hasHelperIcon ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <QuestionMarkCircleIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        ) : (
          ""
        )} */}
        {/* {!!hasError ? (
          <div tw="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              tw="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : (
          ""
        )} */}
      </div>
      {React.Children.map(children, (child) => {
        if (child.type === HelperTextComponent) return child;
      })}
    </div>
  );
}
