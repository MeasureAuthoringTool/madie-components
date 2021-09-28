import React from "react";
import tw, { styled } from "twin.macro";

export interface inputProps {
  backgroundColor?: string;
  id: string;
  name: string;
  type: string;
  placeHolder: string;
  label: string;
  hasError?: boolean;
  spanText?: string;
  helpIcon?: boolean;
  leftIcon?: boolean;
}

const StyledInput = styled.input`
  ${tw`border-gray-900`};
  ${({ hasError }) => hasError && tw`border-red-600`};
`;
// if error add exclarmation marks
// Green tick mark if it is valid ?
// check for helpIcon,if yes add qucstion mark
// if leftIcon is true, then client should send it as a placeholder ?

const StyledErrorLabel = styled.div`
  ${tw`hidden m-2`}
  ${({ hasError }) => hasError && tw`block text-red-400`};
`;

export default function inputComponent(props: inputProps) {
  return (
    <div>
      <div tw="m-2">
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div tw="m-2">
        <StyledInput
          tw="w-full border-solid border py-2 px-3.5 rounded"
          id={props.id}
          hasError={props.hasError}
          name={props.name}
          type={props.type}
          placeholder={props.placeHolder}
        />
      </div>
      <StyledErrorLabel hasError={props.hasError}>
        {props.spanText}
      </StyledErrorLabel>
    </div>
  );
}
