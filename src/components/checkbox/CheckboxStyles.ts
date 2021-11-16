import tw from "twin.macro";

export const Input = tw.input`
  rounded!
  h-4
  w-4
  text-primary-500
  focus:ring-primary-500
  dark:focus:ring-offset-gray-975
  border-gray-200!
  checked:border-primary-500!
  disabled:border-gray-300!
  dark:border-gray-600!
  dark:disabled:border-gray-700!
  dark:bg-gray-975
  dark:checked:bg-primary-500
  dark:disabled:bg-gray-950`;

const BaseLabel = tw.label`
    font-normal
    font-body
`;

export const EnabledLabel = tw(BaseLabel)`
  text-gray-800
  dark:text-gray-300`;

export const DisabledLabel = tw(BaseLabel)`
  text-gray-500
  dark:text-gray-600
`;

const BaseDescription = tw.p`
  font-body
  font-light
`;

export const EnabledDescription = tw(BaseDescription)`
  text-gray-700
  dark:text-gray-600
`;

export const DisabledDescription = tw(BaseDescription)`
  text-gray-500
  dark:text-gray-700
`;

export const OuterWrapper = tw.div`relative flex items-start`;

export const InputWrapper = tw.div`flex items-center h-5`;

export const LabelWrapper = tw.div`ml-3 text-sm`;

export const Legend = tw.legend`text-lg font-medium font-display text-gray-900 dark:text-gray-300`;

export const Fieldset = tw.fieldset`space-y-5`;
