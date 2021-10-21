import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { RadioGroup } from "@headlessui/react";

const settings = [
  {
    name: "Public access",
    description: "This project would be available to anyone who has the link",
  },
  {
    name: "Private to Org Members",
    description: "Only members of this organization would be able to access",
  },
  {
    name: "Private to Owner",
    description: "Only the owner would be able to access",
  },
];
const OuterSpan = styled.div<{
  active?: boolean;
  checked?: boolean;
  disabled?: boolean;
}>(({ active = false, checked = false, disabled = false }) => [
  checked && tw`bg-blue`,
  disabled && tw`bg-gray-200`,
]);

const MadieRadioOption = styled(RadioGroup.Option)<{ checked?: boolean }>(
  ({ checked = false }) => [checked && tw``]
);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selected, setSelected] = useState(settings[0]);

  return (
    <RadioGroup
      data-testid="madie-radio"
      value={selected}
      onChange={setSelected}
    >
      <RadioGroup.Label tw="sr-only">Privacy setting</RadioGroup.Label>
      {settings.map((setting, settingIdx) => (
        <MadieRadioOption
          key={setting.name}
          value={setting}
          tw="relative  p-4 flex cursor-pointer focus:outline-none"
        >
          {({ active, checked }) => (
            <>
              <OuterSpan
                checked={checked}
                active={active}
                disabled={settingIdx === 2}
                tw="h-4 w-4 mt-0.5 cursor-pointer rounded-full flex items-center justify-center border focus:ring focus:ring-blue focus:ring-offset-2"
                aria-hidden="true"
              >
                <div tw="rounded-full bg-white w-1.5 h-1.5" />
              </OuterSpan>
              <div tw="ml-3 flex flex-col">
                <RadioGroup.Label
                  as="span"
                  tw="text-gray-900 block text-sm font-medium "
                >
                  {setting.name}
                </RadioGroup.Label>
                <RadioGroup.Description as="span" tw="text-blue block text-sm">
                  {setting.description}
                </RadioGroup.Description>
              </div>
            </>
          )}
        </MadieRadioOption>
      ))}
    </RadioGroup>
  );
}
