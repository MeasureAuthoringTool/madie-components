import React from "react";
import tw from "twin.macro";
import ButtonSize, { ButtonSizeDefs } from "./ButtonSize";

export const IconPositionDefs = {
  left: "left",
  right: "right",
  centered: "centered",
} as const;
export type IconPosition =
  typeof IconPositionDefs[keyof typeof IconPositionDefs];

export type IconType = (props: React.ComponentProps<"svg">) => JSX.Element;

interface IconProps {
  icon: IconType;
  iconPosition: IconPosition;
  buttonSize: ButtonSize;
  isCircular?: boolean;
}

export type ButtonIconProps = IconProps & React.SVGAttributes<SVGElement>;

const Icon4x4 = tw.svg`h-4 w-4`;
const Icon5x5 = tw.svg`h-5 w-5`;
const Icon6x6 = tw.svg`h-6 w-6`;

const LeadingSmall = tw(Icon4x4)`-ml-0.5 mr-2`;
const LeadingMedium = tw(Icon5x5)`-ml-1 mr-2`;
const LeadingLarge = tw(Icon5x5)`-ml-1 mr-3`;

const TrailingSmall = tw(Icon4x4)`ml-2 -mr-0.5`;
const TrailingMedium = tw(Icon5x5)`ml-2 -mr-1`;
const TrailingLarge = tw(Icon5x5)`ml-3 -mr-1 `;

export default function ButtonIcon(props: ButtonIconProps) {
  const { icon, buttonSize, iconPosition, isCircular, ...args } = props;

  let StyledIcon;
  if (iconPosition === IconPositionDefs.left) {
    switch (buttonSize) {
      case ButtonSizeDefs.xs:
      case ButtonSizeDefs.sm:
        StyledIcon = LeadingSmall;
        break;
      case ButtonSizeDefs.md:
        StyledIcon = LeadingMedium;
        break;
      case ButtonSizeDefs.lg:
      case ButtonSizeDefs.xl:
        StyledIcon = LeadingLarge;
        break;
      default:
        throw new Error(`Invalid icon size specified ${buttonSize}`);
    }
  } else if (iconPosition === IconPositionDefs.right) {
    switch (buttonSize) {
      case ButtonSizeDefs.xs:
      case ButtonSizeDefs.sm:
        StyledIcon = TrailingSmall;
        break;
      case ButtonSizeDefs.md:
        StyledIcon = TrailingMedium;
        break;
      case ButtonSizeDefs.lg:
      case ButtonSizeDefs.xl:
        StyledIcon = TrailingLarge;
        break;
      default:
        throw new Error(`Invalid icon size specified ${buttonSize}`);
    }
  } else {
    // Centered
    if (isCircular) {
      // Circular buttons have a slightly larger icon
      switch (buttonSize) {
        case ButtonSizeDefs.xs:
        case ButtonSizeDefs.sm:
          StyledIcon = Icon5x5;
          break;
        case ButtonSizeDefs.md:
        case ButtonSizeDefs.lg:
        case ButtonSizeDefs.xl:
          StyledIcon = Icon6x6;
          break;
        default:
          throw new Error(`Invalid icon size specified ${buttonSize}`);
      }
    } else {
      switch (buttonSize) {
        case ButtonSizeDefs.xs:
        case ButtonSizeDefs.sm:
          StyledIcon = Icon4x4;
          break;
        case ButtonSizeDefs.md:
        case ButtonSizeDefs.lg:
        case ButtonSizeDefs.xl:
          StyledIcon = Icon5x5;
          break;
        default:
          throw new Error(`Invalid icon size specified ${buttonSize}`);
      }
    }
  }

  return <StyledIcon aria-hidden="true" {...args} as={icon} />;
}
