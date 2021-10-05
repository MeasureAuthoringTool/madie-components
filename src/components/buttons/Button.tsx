import React from "react";
import tw from "twin.macro";
import ButtonSize, { ButtonSizeDefs } from "./ButtonSize";
import ButtonVariant, { ButtonVariantDefs } from "./ButtonVariant";
import ButtonShape, { ButtonShapeDefs } from "./ButtonShape";
import ButtonIcon, { IconPosition, IconPositionDefs } from "./ButtonIcon";
import SpinnerIcon from "../../assets/icons/SpinnerIcon";
import { ButtonStyleGrid } from "./ButtonStyles";

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

  // Move the icon to the left or right
  let iconPositionOverride: IconPosition = trailingIcon
    ? IconPositionDefs.right
    : IconPositionDefs.left;

  // Move the icon if there's no text, or if it's loading
  if (!buttonText) {
    // Any button with no text gets its icon centered
    iconPositionOverride = IconPositionDefs.centered;
  } else if (loading && !!buttonText) {
    // Loading, with text: the icon goes to the left
    iconPositionOverride = IconPositionDefs.left;
  }

  // Change the icon to the loading icon if loading
  let StyledIcon = undefined;
  if (icon || loading) {
    StyledIcon = ButtonIcon;
  }
  if (iconPositionOverride === IconPositionDefs.right) {
    StyledIcon = TrailingIcon;
  }

  // Default the size to "md"
  const sizeOverride = buttonSize || ButtonSizeDefs.md;

  // Default the shape to "normal"
  const shapeOverride = shape || ButtonShapeDefs.normal;

  // Default the variant to "primary", but override to disabled if disabled
  let variantOverride: ButtonVariant | "disabled" =
    variant || ButtonVariantDefs.primary;
  if (!Object.keys(ButtonVariantDefs).includes(variantOverride)) {
    throw new Error(`Unexpected button variant: ${variantOverride}`);
  }
  variantOverride = disabled ? "disabled" : variantOverride;

  const StyledButtonNew =
    ButtonStyleGrid[variantOverride][shapeOverride][sizeOverride];

  return (
    <StyledButtonNew disabled={disabled} {...args}>
      {StyledIcon ? (
        <StyledIcon
          iconPosition={iconPositionOverride}
          icon={loading ? SpinnerIcon : icon}
          buttonSize={sizeOverride}
          isCircular={shape === ButtonShapeDefs.circular}
        />
      ) : undefined}

      {buttonText}
    </StyledButtonNew>
  );
}
