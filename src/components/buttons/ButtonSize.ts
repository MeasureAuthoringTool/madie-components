/**
 * This (and the type below) serve as an enum defining the valid button sizes
 */
export const ButtonSizeDefs = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;
type ButtonSize = typeof ButtonSizeDefs[keyof typeof ButtonSizeDefs];

export default ButtonSize;
