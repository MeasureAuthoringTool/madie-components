/**
 * This (and the type below) serve as an enum defining the valid button shapes
 */
export const ButtonShapeDefs = {
  normal: "normal",
  round: "round",
  circular: "circular",
} as const;
type ButtonShape = typeof ButtonShapeDefs[keyof typeof ButtonShapeDefs];

export default ButtonShape;
