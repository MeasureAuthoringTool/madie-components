import React, { useState } from "react";
import { RadioGroup as HRadioGroup } from "@headlessui/react";
import tw, { styled } from "twin.macro";

export interface RadioProps {
  label: string;
  description?: string;
  id?: string;
  "data-testid"?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  srTitle?: string;
  options: Array<RadioProps>;
  handleChange?: (value: boolean) => void;
  "data-testid"?: string;
}

const OptionListWrapper = styled.div({
  ...tw`bg-white dark:bg-gray-975 rounded-md -space-y-px`,
  ".radio-group-option": {
    ".radio-group-option-inner": {
      ...tw`relative border p-4 flex cursor-pointer focus:outline-none`,
    },
    ":first-child .radio-group-option-inner": {
      ...tw`rounded-tl-md rounded-tr-md`,
    },
    ":last-child .radio-group-option-inner": {
      ...tw`rounded-bl-md rounded-br-md`,
    },
  },
});

const CheckedOption = tw.div`bg-primary-50 dark:bg-gray-800 border-primary-200 dark:border-gray-950 z-10`;
const UncheckedOption = tw.div`border-gray-200 dark:border-gray-950`;
const DisabledOption = tw(UncheckedOption)`bg-gray-100 dark:bg-gray-950`;

const InnerCircle = tw.span`rounded-full bg-white w-1.5 h-1.5`;
const Circle = tw.span`h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center`;
const CheckedCircle = tw(Circle)`bg-primary-500 border-transparent`;
const UncheckedCircle = tw(
  Circle
)`bg-white dark:bg-gray-975 border-gray-300 dark:border-gray-600`;
const ActiveCheckedCircle = tw(
  CheckedCircle
)`ring-2 ring-offset-2 ring-primary-500 dark:ring-offset-gray-975`;
const ActiveUncheckedCircle = tw(
  UncheckedCircle
)`ring-2 ring-offset-2 ring-primary-500 dark:ring-offset-gray-975`;
const DisabledCircle = tw(UncheckedCircle)`bg-gray-100 dark:bg-gray-950`;

const LabelWrapper = tw.div`ml-3 flex flex-col`;

const BaseLabel = tw.span`block text-sm font-body font-normal`;
const CheckedLabel = tw(BaseLabel)`text-primary-700 dark:text-gray-50`;
const UncheckedLabel = tw(BaseLabel)`text-gray-800 dark:text-gray-300`;
const DisabledLabel = tw(BaseLabel)`text-gray-500 dark:text-gray-600`;

const BaseDescription = tw.span`block text-sm`;
const CheckedDescription = tw(
  BaseDescription
)`text-primary-600 dark:text-gray-300`;
const UncheckedDescription = tw(
  BaseDescription
)`text-gray-700 dark:text-gray-300`;
const DisabledDescription = tw(
  BaseDescription
)`text-gray-500 dark:text-gray-700`;

export default function RadioGroup(args: RadioGroupProps) {
  const { options, srTitle, ...props } = args;
  const [selected, setSelected] = useState(options[0]);

  return (
    <HRadioGroup value={selected} onChange={setSelected} {...props}>
      {srTitle ? (
        <HRadioGroup.Label tw="sr-only">{srTitle}</HRadioGroup.Label>
      ) : undefined}
      <OptionListWrapper>
        {options.map((option) => {
          const { label, description, disabled, ...optionProps } = option;
          return (
            <HRadioGroup.Option
              key={label}
              value={option}
              disabled={disabled}
              tabIndex={0}
              className="radio-group-option"
            >
              {({ active, checked, disabled }) => {
                let OptionEl;
                let CircleEl;
                let LabelEl;
                let DescrEl;

                if (disabled) {
                  OptionEl = DisabledOption;
                  CircleEl = DisabledCircle;
                  LabelEl = DisabledLabel;
                  DescrEl = DisabledDescription;
                } else {
                  if (checked) {
                    OptionEl = CheckedOption;
                    CircleEl = active ? ActiveCheckedCircle : CheckedCircle;
                    LabelEl = CheckedLabel;
                    DescrEl = CheckedDescription;
                  } else {
                    OptionEl = UncheckedOption;
                    CircleEl = active ? ActiveUncheckedCircle : UncheckedCircle;
                    LabelEl = UncheckedLabel;
                    DescrEl = UncheckedDescription;
                  }
                }

                return (
                  <>
                    <OptionEl
                      className="radio-group-option-inner"
                      {...optionProps}
                    >
                      <CircleEl aria-hidden="true">
                        {checked ? <InnerCircle /> : undefined}
                      </CircleEl>
                      <LabelWrapper>
                        <HRadioGroup.Label as={LabelEl}>
                          {label}
                        </HRadioGroup.Label>

                        <HRadioGroup.Description as={DescrEl}>
                          {description}
                        </HRadioGroup.Description>
                      </LabelWrapper>
                    </OptionEl>
                  </>
                );
              }}
            </HRadioGroup.Option>
          );
        })}
      </OptionListWrapper>
    </HRadioGroup>
  );
}
