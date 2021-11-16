/**
 * This (and the type below) serve as an enum defining the valid button variants
 */
export const ButtonVariantDefs = {
  primary: "primary",
  secondary: "secondary",
  white: "white",
} as const;
type ButtonVariant = typeof ButtonVariantDefs[keyof typeof ButtonVariantDefs];

export default ButtonVariant;
