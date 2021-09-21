import React from "react";
import tw, { styled, TwStyle } from "twin.macro";

/**
 * This (and the type below) serve as an enum defining the valid color selections
 */
export const ColorDefs = {
  primary: "primary",
  teal: "teal",
  green: "green",
  blue: "blue",
  yellow: "yellow",
  red: "red",
  gray: "gray",
} as const;
export type Colors = typeof ColorDefs[keyof typeof ColorDefs];

/**
 * This (and the type below) serve as an enum defining the valid color shades
 */
export const ShadeDefs = {
  _50: 50,
  _100: 100,
  _200: 200,
  _300: 300,
  _400: 400,
  _500: 500,
  _600: 600,
  _700: 700,
  _800: 800,
  _900: 900,
} as const;
export type Shades = typeof ShadeDefs[keyof typeof ShadeDefs];

/**
 * This maps the color/shade combinations to their corresponding Tailwind classes
 * The twin.macro (tw) cannot deal with dynamic strings, so we have to call them each explicitly.
 * See https://github.com/ben-rogerson/twin.macro/discussions/393
 */
const StyleDefs = {
  [ColorDefs.primary]: {
    [ShadeDefs._50]: tw`bg-primary-50`,
    [ShadeDefs._100]: tw`bg-primary-100`,
    [ShadeDefs._200]: tw`bg-primary-200`,
    [ShadeDefs._300]: tw`bg-primary-300`,
    [ShadeDefs._400]: tw`bg-primary-400`,
    [ShadeDefs._500]: tw`bg-primary-500`,
    [ShadeDefs._600]: tw`bg-primary-600`,
    [ShadeDefs._700]: tw`bg-primary-700`,
    [ShadeDefs._800]: tw`bg-primary-800`,
    [ShadeDefs._900]: tw`bg-primary-900`,
  },
  [ColorDefs.teal]: {
    [ShadeDefs._50]: tw`bg-teal-50`,
    [ShadeDefs._100]: tw`bg-teal-100`,
    [ShadeDefs._200]: tw`bg-teal-200`,
    [ShadeDefs._300]: tw`bg-teal-300`,
    [ShadeDefs._400]: tw`bg-teal-400`,
    [ShadeDefs._500]: tw`bg-teal-500`,
    [ShadeDefs._600]: tw`bg-teal-600`,
    [ShadeDefs._700]: tw`bg-teal-700`,
    [ShadeDefs._800]: tw`bg-teal-800`,
    [ShadeDefs._900]: tw`bg-teal-900`,
  },
  [ColorDefs.green]: {
    [ShadeDefs._50]: tw`bg-green-50`,
    [ShadeDefs._100]: tw`bg-green-100`,
    [ShadeDefs._200]: tw`bg-green-200`,
    [ShadeDefs._300]: tw`bg-green-300`,
    [ShadeDefs._400]: tw`bg-green-400`,
    [ShadeDefs._500]: tw`bg-green-500`,
    [ShadeDefs._600]: tw`bg-green-600`,
    [ShadeDefs._700]: tw`bg-green-700`,
    [ShadeDefs._800]: tw`bg-green-800`,
    [ShadeDefs._900]: tw`bg-green-900`,
  },
  [ColorDefs.blue]: {
    [ShadeDefs._50]: tw`bg-blue-50`,
    [ShadeDefs._100]: tw`bg-blue-100`,
    [ShadeDefs._200]: tw`bg-blue-200`,
    [ShadeDefs._300]: tw`bg-blue-300`,
    [ShadeDefs._400]: tw`bg-blue-400`,
    [ShadeDefs._500]: tw`bg-blue-500`,
    [ShadeDefs._600]: tw`bg-blue-600`,
    [ShadeDefs._700]: tw`bg-blue-700`,
    [ShadeDefs._800]: tw`bg-blue-800`,
    [ShadeDefs._900]: tw`bg-blue-900`,
  },
  [ColorDefs.yellow]: {
    [ShadeDefs._50]: tw`bg-yellow-50`,
    [ShadeDefs._100]: tw`bg-yellow-100`,
    [ShadeDefs._200]: tw`bg-yellow-200`,
    [ShadeDefs._300]: tw`bg-yellow-300`,
    [ShadeDefs._400]: tw`bg-yellow-400`,
    [ShadeDefs._500]: tw`bg-yellow-500`,
    [ShadeDefs._600]: tw`bg-yellow-600`,
    [ShadeDefs._700]: tw`bg-yellow-700`,
    [ShadeDefs._800]: tw`bg-yellow-800`,
    [ShadeDefs._900]: tw`bg-yellow-900`,
  },
  [ColorDefs.red]: {
    [ShadeDefs._50]: tw`bg-red-50`,
    [ShadeDefs._100]: tw`bg-red-100`,
    [ShadeDefs._200]: tw`bg-red-200`,
    [ShadeDefs._300]: tw`bg-red-300`,
    [ShadeDefs._400]: tw`bg-red-400`,
    [ShadeDefs._500]: tw`bg-red-500`,
    [ShadeDefs._600]: tw`bg-red-600`,
    [ShadeDefs._700]: tw`bg-red-700`,
    [ShadeDefs._800]: tw`bg-red-800`,
    [ShadeDefs._900]: tw`bg-red-900`,
  },
  [ColorDefs.gray]: {
    [ShadeDefs._50]: tw`bg-gray-50`,
    [ShadeDefs._100]: tw`bg-gray-100`,
    [ShadeDefs._200]: tw`bg-gray-200`,
    [ShadeDefs._300]: tw`bg-gray-300`,
    [ShadeDefs._400]: tw`bg-gray-400`,
    [ShadeDefs._500]: tw`bg-gray-500`,
    [ShadeDefs._600]: tw`bg-gray-600`,
    [ShadeDefs._700]: tw`bg-gray-700`,
    [ShadeDefs._800]: tw`bg-gray-800`,
    [ShadeDefs._900]: tw`bg-gray-900`,
  },
} as const;

/**
 * This ensures the dynamic components pass the proper parameters
 */
interface ShadeSpecifier {
  colorName: Colors;
  shade: Shades;
  styles?: TwStyle;
}

/**
 * This applies the specified Color, Shade and additional styles to a div
 */
const Shader = styled.div<ShadeSpecifier>((specifier: ShadeSpecifier) => {
  const { colorName, shade, styles } = specifier;
  return [StyleDefs[colorName][shade], styles];
});

/**
 * This defines the properties required by the ColorGridRow component
 */
export interface ColorGridProps {
  colorName: Colors;
  title: string;
}

/**
 * This is the wrapper around each ColorGridRow
 */
const GridWrapper = tw.div`grid grid-cols-9 p-3 content-center`;

export default function ColorGridRow(props: ColorGridProps) {
  const { title, colorName } = props;

  const GridHeader = () => (
    <Shader
      colorName={colorName}
      shade={ShadeDefs._500}
      styles={tw`col-span-9 text-white text-xl px-4 pb-3 pt-4 rounded-t-lg font-display font-medium tracking-wider`}
    >
      {title}
    </Shader>
  );

  const Color50 = () => (
    <Shader
      colorName={colorName}
      shade={ShadeDefs._50}
      styles={tw`h-14 rounded-bl-lg`}
    >
      &nbsp;
    </Shader>
  );

  const Color100 = () => (
    <Shader colorName={colorName} shade={ShadeDefs._100} styles={tw`h-14`}>
      &nbsp;
    </Shader>
  );

  const Color200 = () => (
    <Shader colorName={colorName} shade={ShadeDefs._200} styles={tw`h-14`}>
      &nbsp;
    </Shader>
  );

  const Color300 = () => (
    <Shader colorName={colorName} shade={ShadeDefs._300} styles={tw`h-14`}>
      &nbsp;
    </Shader>
  );

  const Color400 = () => (
    <Shader colorName={colorName} shade={ShadeDefs._400} styles={tw`h-14`}>
      &nbsp;
    </Shader>
  );

  const Color600 = () => (
    <Shader colorName={colorName} shade={ShadeDefs._600} styles={tw`h-14`}>
      &nbsp;
    </Shader>
  );

  const Color700 = () => (
    <Shader colorName={colorName} shade={ShadeDefs._700} styles={tw`h-14`}>
      &nbsp;
    </Shader>
  );

  const Color800 = () => (
    <Shader colorName={colorName} shade={ShadeDefs._800} styles={tw`h-14`}>
      &nbsp;
    </Shader>
  );

  const Color900 = () => (
    <Shader
      colorName={colorName}
      shade={ShadeDefs._900}
      styles={tw`h-14 rounded-br-lg`}
    >
      &nbsp;
    </Shader>
  );

  return (
    <GridWrapper>
      <GridHeader />
      <Color50 />
      <Color100 />
      <Color200 />
      <Color300 />
      <Color400 />
      <Color600 />
      <Color700 />
      <Color800 />
      <Color900 />
    </GridWrapper>
  );
}
