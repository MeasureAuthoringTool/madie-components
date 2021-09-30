import React from "react";
import tw, { styled } from "twin.macro";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { LabelComponent, LabelProps } from "../labels/Label";
import { HelperTextComponent, HelperTextProps } from "../helperText/HelperText";

export interface InputProps {
  id: string;
  name: string;
  type: string;
  title: string;
  placeHolder: string;
  hasError: boolean;
  label?: LabelProps;
  helperText?: HelperTextProps;
}

interface HandleProps {
  hasError: boolean;
}

const StyledInput = styled.input<HandleProps>(({ hasError }) => [
  tw`border-gray-900`,
  hasError && tw`border-red-600`,
]);

export function InputComponent(props: InputProps) {
  const labelProps: LabelProps = { ...props.label, inputName: props.name };
  return (
    <div>
      {props.label ? <LabelComponent {...labelProps}></LabelComponent> : ""}
      <div tw="m-2 relative">
        <StyledInput
          tw="w-full border-solid border py-2 pl-3.5 pr-12 rounded truncate"
          id={props.id}
          name={props.name}
          type={props.type}
          title={props.title}
          placeholder={props.placeHolder}
          hasError={props.hasError}
        />
        {props.hasError ? (
          <ExclamationCircleIcon tw="text-red-400 absolute w-6 h-6 top-2 right-3"></ExclamationCircleIcon>
        ) : (
          ""
        )}
      </div>
      {props.helperText ? (
        <HelperTextComponent {...props.helperText}></HelperTextComponent>
      ) : (
        ""
      )}
    </div>
  );
}
