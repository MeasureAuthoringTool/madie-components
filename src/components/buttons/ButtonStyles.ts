import tw from "twin.macro";
import { ButtonSizeDefs } from "./ButtonSize";
import { ButtonVariantDefs } from "./ButtonVariant";
import { ButtonShapeDefs } from "./ButtonShape";

const BaseButton = tw.button`
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

const PrimaryButton = tw(BaseButton)`
  text-white
  bg-primary-500
  hover:bg-primary-700
  active:bg-blue-500
`;

const NormalPrimaryButtonXs = tw(PrimaryButton)`px-2.5 py-1.5 text-xs rounded`;
const NormalPrimaryButtonSm = tw(
  PrimaryButton
)`px-3 py-2 text-sm leading-4 rounded-md`;
const NormalPrimaryButtonMd = tw(PrimaryButton)`px-4 py-2 text-sm rounded-md`;
const NormalPrimaryButtonLg = tw(PrimaryButton)`px-4 py-2 text-base rounded-md`;
const NormalPrimaryButtonXl = tw(PrimaryButton)`px-6 py-3 text-base rounded-md`;

const RoundPrimaryButtonXs = tw(
  PrimaryButton
)`px-3 py-1.5 text-xs rounded-full`;
const RoundPrimaryButtonSm = tw(
  PrimaryButton
)`px-3.5 py-2 text-sm leading-4 rounded-full`;
const RoundPrimaryButtonMd = tw(PrimaryButton)`px-4 py-2 text-sm rounded-full`;
const RoundPrimaryButtonLg = tw(
  PrimaryButton
)`px-5 py-2 text-base rounded-full`;
const RoundPrimaryButtonXl = tw(
  PrimaryButton
)`px-6 py-3 text-base rounded-full`;

const CircularPrimaryButtonXs = tw(PrimaryButton)`p-1 rounded-full`;
const CircularPrimaryButtonSm = tw(PrimaryButton)`p-1.5 rounded-full`;
const CircularPrimaryButtonMd = tw(PrimaryButton)`p-2 rounded-full`;
const CircularPrimaryButtonLg = tw(PrimaryButton)`p-2 rounded-full`;
const CircularPrimaryButtonXl = tw(PrimaryButton)`p-3 rounded-full`;

const SecondaryButton = tw(BaseButton)`
  text-primary-600
  bg-primary-50
  hover:bg-primary-200
  active:bg-blue-100
  active:text-blue-700
`;

const NormalSecondaryButtonXs = tw(
  SecondaryButton
)`px-2.5 py-1.5 text-xs rounded`;
const NormalSecondaryButtonSm = tw(
  SecondaryButton
)`px-3 py-2 text-sm leading-4 rounded-md`;
const NormalSecondaryButtonMd = tw(
  SecondaryButton
)`px-4 py-2 text-sm rounded-md`;
const NormalSecondaryButtonLg = tw(
  SecondaryButton
)`px-4 py-2 text-base rounded-md`;
const NormalSecondaryButtonXl = tw(
  SecondaryButton
)`px-6 py-3 text-base rounded-md`;

const RoundSecondaryButtonXs = tw(
  SecondaryButton
)`px-3 py-1.5 text-xs rounded-full`;
const RoundSecondaryButtonSm = tw(
  SecondaryButton
)`px-3.5 py-2 text-sm leading-4 rounded-full`;
const RoundSecondaryButtonMd = tw(
  SecondaryButton
)`px-4 py-2 text-sm rounded-full`;
const RoundSecondaryButtonLg = tw(
  SecondaryButton
)`px-5 py-2 text-base rounded-full`;
const RoundSecondaryButtonXl = tw(
  SecondaryButton
)`px-6 py-3 text-base rounded-full`;

const CircularSecondaryButtonXs = tw(SecondaryButton)`p-1 rounded-full`;
const CircularSecondaryButtonSm = tw(SecondaryButton)`p-1.5 rounded-full`;
const CircularSecondaryButtonMd = tw(SecondaryButton)`p-2 rounded-full`;
const CircularSecondaryButtonLg = tw(SecondaryButton)`p-2 rounded-full`;
const CircularSecondaryButtonXl = tw(SecondaryButton)`p-3 rounded-full`;

const WhiteButton = tw(BaseButton)`
  border-gray-300
  text-gray-700
  bg-white
  hover:bg-gray-50
  active:bg-gray-200
  active:text-gray-900
`;
const NormalWhiteButtonXs = tw(WhiteButton)`px-2.5 py-1.5 text-xs rounded`;
const NormalWhiteButtonSm = tw(
  WhiteButton
)`px-3 py-2 text-sm leading-4 rounded-md`;
const NormalWhiteButtonMd = tw(WhiteButton)`px-4 py-2 text-sm rounded-md`;
const NormalWhiteButtonLg = tw(WhiteButton)`px-4 py-2 text-base rounded-md`;
const NormalWhiteButtonXl = tw(WhiteButton)`px-6 py-3 text-base rounded-md`;

const RoundWhiteButtonXs = tw(WhiteButton)`px-3 py-1.5 text-xs rounded-full`;
const RoundWhiteButtonSm = tw(
  WhiteButton
)`px-3.5 py-2 text-sm leading-4 rounded-full`;
const RoundWhiteButtonMd = tw(WhiteButton)`px-4 py-2 text-sm rounded-full`;
const RoundWhiteButtonLg = tw(WhiteButton)`px-5 py-2 text-base rounded-full`;
const RoundWhiteButtonXl = tw(WhiteButton)`px-6 py-3 text-base rounded-full`;

const CircularWhiteButtonXs = tw(WhiteButton)`p-1 rounded-full`;
const CircularWhiteButtonSm = tw(WhiteButton)`p-1.5 rounded-full`;
const CircularWhiteButtonMd = tw(WhiteButton)`p-2 rounded-full`;
const CircularWhiteButtonLg = tw(WhiteButton)`p-2 rounded-full`;
const CircularWhiteButtonXl = tw(WhiteButton)`p-3 rounded-full`;

const DisabledButton = tw(BaseButton)`
  text-gray-600
  bg-gray-200
  cursor-not-allowed
`;

const NormalDisabledButtonXs = tw(
  DisabledButton
)`px-2.5 py-1.5 text-xs rounded`;
const NormalDisabledButtonSm = tw(
  DisabledButton
)`px-3 py-2 text-sm leading-4 rounded-md`;
const NormalDisabledButtonMd = tw(DisabledButton)`px-4 py-2 text-sm rounded-md`;
const NormalDisabledButtonLg = tw(
  DisabledButton
)`px-4 py-2 text-base rounded-md`;
const NormalDisabledButtonXl = tw(
  DisabledButton
)`px-6 py-3 text-base rounded-md`;

const RoundDisabledButtonXs = tw(
  DisabledButton
)`px-3 py-1.5 text-xs rounded-full`;
const RoundDisabledButtonSm = tw(
  DisabledButton
)`px-3.5 py-2 text-sm leading-4 rounded-full`;
const RoundDisabledButtonMd = tw(
  DisabledButton
)`px-4 py-2 text-sm rounded-full`;
const RoundDisabledButtonLg = tw(
  DisabledButton
)`px-5 py-2 text-base rounded-full`;
const RoundDisabledButtonXl = tw(
  DisabledButton
)`px-6 py-3 text-base rounded-full`;

const CircularDisabledButtonXs = tw(DisabledButton)`p-1 rounded-full`;
const CircularDisabledButtonSm = tw(DisabledButton)`p-1.5 rounded-full`;
const CircularDisabledButtonMd = tw(DisabledButton)`p-2 rounded-full`;
const CircularDisabledButtonLg = tw(DisabledButton)`p-2 rounded-full`;
const CircularDisabledButtonXl = tw(DisabledButton)`p-3 rounded-full`;

export const ButtonStyleGrid = {
  [ButtonVariantDefs.primary]: {
    [ButtonShapeDefs.normal]: {
      [ButtonSizeDefs.xs]: NormalPrimaryButtonXs,
      [ButtonSizeDefs.sm]: NormalPrimaryButtonSm,
      [ButtonSizeDefs.md]: NormalPrimaryButtonMd,
      [ButtonSizeDefs.lg]: NormalPrimaryButtonLg,
      [ButtonSizeDefs.xl]: NormalPrimaryButtonXl,
    },
    [ButtonShapeDefs.round]: {
      [ButtonSizeDefs.xs]: RoundPrimaryButtonXs,
      [ButtonSizeDefs.sm]: RoundPrimaryButtonSm,
      [ButtonSizeDefs.md]: RoundPrimaryButtonMd,
      [ButtonSizeDefs.lg]: RoundPrimaryButtonLg,
      [ButtonSizeDefs.xl]: RoundPrimaryButtonXl,
    },
    [ButtonShapeDefs.circular]: {
      [ButtonSizeDefs.xs]: CircularPrimaryButtonXs,
      [ButtonSizeDefs.sm]: CircularPrimaryButtonSm,
      [ButtonSizeDefs.md]: CircularPrimaryButtonMd,
      [ButtonSizeDefs.lg]: CircularPrimaryButtonLg,
      [ButtonSizeDefs.xl]: CircularPrimaryButtonXl,
    },
  },
  [ButtonVariantDefs.secondary]: {
    [ButtonShapeDefs.normal]: {
      [ButtonSizeDefs.xs]: NormalSecondaryButtonXs,
      [ButtonSizeDefs.sm]: NormalSecondaryButtonSm,
      [ButtonSizeDefs.md]: NormalSecondaryButtonMd,
      [ButtonSizeDefs.lg]: NormalSecondaryButtonLg,
      [ButtonSizeDefs.xl]: NormalSecondaryButtonXl,
    },
    [ButtonShapeDefs.round]: {
      [ButtonSizeDefs.xs]: RoundSecondaryButtonXs,
      [ButtonSizeDefs.sm]: RoundSecondaryButtonSm,
      [ButtonSizeDefs.md]: RoundSecondaryButtonMd,
      [ButtonSizeDefs.lg]: RoundSecondaryButtonLg,
      [ButtonSizeDefs.xl]: RoundSecondaryButtonXl,
    },
    [ButtonShapeDefs.circular]: {
      [ButtonSizeDefs.xs]: CircularSecondaryButtonXs,
      [ButtonSizeDefs.sm]: CircularSecondaryButtonSm,
      [ButtonSizeDefs.md]: CircularSecondaryButtonMd,
      [ButtonSizeDefs.lg]: CircularSecondaryButtonLg,
      [ButtonSizeDefs.xl]: CircularSecondaryButtonXl,
    },
  },
  [ButtonVariantDefs.white]: {
    [ButtonShapeDefs.normal]: {
      [ButtonSizeDefs.xs]: NormalWhiteButtonXs,
      [ButtonSizeDefs.sm]: NormalWhiteButtonSm,
      [ButtonSizeDefs.md]: NormalWhiteButtonMd,
      [ButtonSizeDefs.lg]: NormalWhiteButtonLg,
      [ButtonSizeDefs.xl]: NormalWhiteButtonXl,
    },
    [ButtonShapeDefs.round]: {
      [ButtonSizeDefs.xs]: RoundWhiteButtonXs,
      [ButtonSizeDefs.sm]: RoundWhiteButtonSm,
      [ButtonSizeDefs.md]: RoundWhiteButtonMd,
      [ButtonSizeDefs.lg]: RoundWhiteButtonLg,
      [ButtonSizeDefs.xl]: RoundWhiteButtonXl,
    },
    [ButtonShapeDefs.circular]: {
      [ButtonSizeDefs.xs]: CircularWhiteButtonXs,
      [ButtonSizeDefs.sm]: CircularWhiteButtonSm,
      [ButtonSizeDefs.md]: CircularWhiteButtonMd,
      [ButtonSizeDefs.lg]: CircularWhiteButtonLg,
      [ButtonSizeDefs.xl]: CircularWhiteButtonXl,
    },
  },
  ["disabled"]: {
    [ButtonShapeDefs.normal]: {
      [ButtonSizeDefs.xs]: NormalDisabledButtonXs,
      [ButtonSizeDefs.sm]: NormalDisabledButtonSm,
      [ButtonSizeDefs.md]: NormalDisabledButtonMd,
      [ButtonSizeDefs.lg]: NormalDisabledButtonLg,
      [ButtonSizeDefs.xl]: NormalDisabledButtonXl,
    },
    [ButtonShapeDefs.round]: {
      [ButtonSizeDefs.xs]: RoundDisabledButtonXs,
      [ButtonSizeDefs.sm]: RoundDisabledButtonSm,
      [ButtonSizeDefs.md]: RoundDisabledButtonMd,
      [ButtonSizeDefs.lg]: RoundDisabledButtonLg,
      [ButtonSizeDefs.xl]: RoundDisabledButtonXl,
    },
    [ButtonShapeDefs.circular]: {
      [ButtonSizeDefs.xs]: CircularDisabledButtonXs,
      [ButtonSizeDefs.sm]: CircularDisabledButtonSm,
      [ButtonSizeDefs.md]: CircularDisabledButtonMd,
      [ButtonSizeDefs.lg]: CircularDisabledButtonLg,
      [ButtonSizeDefs.xl]: CircularDisabledButtonXl,
    },
  },
};
