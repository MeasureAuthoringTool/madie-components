import React from "react";
import tw, { styled } from "twin.macro";
import ButtonSize, { ButtonSizeDefs } from "./ButtonSize";
import ButtonIcon, { IconPosition, IconPositionDefs } from "./ButtonIcon";
import SpinnerIcon from "../../assets/icons/SpinnerIcon";

/**
 * This (and the type below) serve as an enum defining the valid button variants
 */
export const ButtonVariantDefs = {
  primary: "primary",
  secondary: "secondary",
  white: "white",
} as const;
export type ButtonVariant =
  typeof ButtonVariantDefs[keyof typeof ButtonVariantDefs];

/**
 * This (and the type below) serve as an enum defining the valid button shapes
 */
export const ButtonShapeDefs = {
  normal: "normal",
  round: "round",
  circular: "circular",
} as const;
export type ButtonShape = typeof ButtonShapeDefs[keyof typeof ButtonShapeDefs];

type IconType = (props: React.ComponentProps<"svg">) => JSX.Element;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: never;
  buttonTitle?: string;
  buttonSize?: ButtonSize;
  icon?: IconType;
  trailingIcon?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  loading?: boolean;
  loadingText?: string;
}

const BaseButtonStyles = tw`
  inline-flex
  items-center
  border
  border-transparent
  font-medium
  font-display
  font-normal
  shadow-sm
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-primary-500
  dark:focus:ring-offset-dark-bg
`;

const PrimaryButtonStyles = tw`
  text-white
  bg-primary-500
  hover:bg-primary-700
  active:bg-blue-500
`;

const SecondaryButtonStyles = tw`
  text-primary-600
  bg-primary-50
  hover:bg-primary-200
  active:bg-blue-100
  active:text-blue-700
`;

const WhiteButtonStyles = tw`
  border-gray-300
  text-gray-700
  bg-white
  hover:bg-gray-50
  active:bg-gray-200
  active:text-gray-900
`;

const DisabledButtonStyles = tw`
  text-gray-600
  bg-gray-200
  cursor-not-allowed
`;

const ButtonShapeStyles = {
  [ButtonSizeDefs.xs]: {
    [ButtonShapeDefs.normal]: tw`px-2.5 py-1.5 text-xs rounded`,
    [ButtonShapeDefs.round]: tw`px-3 py-1.5 text-xs rounded-full`,
    [ButtonShapeDefs.circular]: tw`p-1 rounded-full`,
  },
  [ButtonSizeDefs.sm]: {
    [ButtonShapeDefs.normal]: tw`px-3 py-2 text-sm leading-4 rounded-md`,
    [ButtonShapeDefs.round]: tw`px-3.5 py-2 text-sm leading-4 rounded-full`,
    [ButtonShapeDefs.circular]: tw`p-1.5 rounded-full`,
  },
  [ButtonSizeDefs.md]: {
    [ButtonShapeDefs.normal]: tw`px-4 py-2 text-sm rounded-md`,
    [ButtonShapeDefs.round]: tw`px-4 py-2 text-sm rounded-full`,
    [ButtonShapeDefs.circular]: tw`p-2 rounded-full`,
  },
  [ButtonSizeDefs.lg]: {
    [ButtonShapeDefs.normal]: tw`px-4 py-2 text-base rounded-md`,
    [ButtonShapeDefs.round]: tw`px-5 py-2 text-base rounded-full`,
    [ButtonShapeDefs.circular]: tw`p-2 rounded-full`,
  },
  [ButtonSizeDefs.xl]: {
    [ButtonShapeDefs.normal]: tw`px-6 py-3 text-base rounded-md`,
    [ButtonShapeDefs.round]: tw`px-6 py-3 text-base rounded-full`,
    [ButtonShapeDefs.circular]: tw`p-3 rounded-full`,
  },
};

interface CustomButtonProps {
  $buttonSize?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  $variant?: ButtonVariant;
  $shape?: ButtonShape;
}

const StyledButton = styled.button.attrs<CustomButtonProps, CustomButtonProps>(
  (props: CustomButtonProps) => {
    return {
      $buttonSize: props.$buttonSize || ButtonSizeDefs.md,
      type: props.type || "button",
      disabled: props.disabled,
      $variant: props.$variant || ButtonVariantDefs.primary,
      $shape: props.$shape || ButtonShapeDefs.normal,
    };
  }
)(({ $buttonSize, disabled, $variant, $shape }: CustomButtonProps) => {
  let buttonColors;
  if (disabled) {
    buttonColors = DisabledButtonStyles;
  } else {
    switch ($variant) {
      case ButtonVariantDefs.primary:
        buttonColors = PrimaryButtonStyles;
        break;
      case ButtonVariantDefs.secondary:
        buttonColors = SecondaryButtonStyles;
        break;
      case ButtonVariantDefs.white:
        buttonColors = WhiteButtonStyles;
        break;
      default:
        throw new Error(`Unexpected button variant: ${$variant}`);
    }
  }

  const buttonStyles = ButtonShapeStyles[$buttonSize][$shape];

  return [BaseButtonStyles, buttonColors, buttonStyles];
});

const TrailingIcon = tw(ButtonIcon)`order-last`;

export default function Button(props: ButtonProps) {
  const {
    buttonTitle,
    buttonSize,
    icon,
    trailingIcon,
    disabled,
    variant,
    shape,
    loading,
    loadingText,
    ...args
  } = props;

  let buttonText = buttonTitle;

  if (shape == ButtonShapeDefs.circular) {
    // Circular buttons have no text
    buttonText = undefined;
  } else if (loading && loadingText) {
    // If a separate loading text is specified, use it
    buttonText = loadingText;
  }

  let iconPositionOverride: IconPosition = trailingIcon
    ? IconPositionDefs.right
    : IconPositionDefs.left;
  if (!buttonText) {
    // Any button with no text gets its icon centered
    iconPositionOverride = IconPositionDefs.centered;
  } else if (loading && !!buttonText) {
    // Loading, with text: the icon goes to the left
    iconPositionOverride = IconPositionDefs.left;
  }

  let StyledIcon = undefined;
  if (icon || loading) {
    StyledIcon = ButtonIcon;
  }
  if (iconPositionOverride === IconPositionDefs.right) {
    StyledIcon = TrailingIcon;
  }

  return (
    <StyledButton
      $buttonSize={buttonSize || ButtonSizeDefs.md}
      disabled={disabled}
      $variant={variant}
      $shape={shape}
      {...args}
    >
      {StyledIcon ? (
        <StyledIcon
          iconPosition={iconPositionOverride}
          icon={loading ? SpinnerIcon : icon}
          buttonSize={buttonSize || ButtonSizeDefs.md}
          isCircular={shape === ButtonShapeDefs.circular}
        />
      ) : undefined}

      {buttonText}
    </StyledButton>
  );
}
