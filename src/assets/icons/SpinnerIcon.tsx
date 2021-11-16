import React, { ComponentProps } from "react";
import tw from "twin.macro";

const SpinningCircle = tw.svg`animate-spin`;
const StyledCircle = tw.circle`opacity-25`;
const StyledPath = tw.path`opacity-75`;

export default function SpinnerIcon(props: ComponentProps<"svg">): JSX.Element {
  return (
    <SpinningCircle
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <StyledCircle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <StyledPath
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </SpinningCircle>
  );
}
