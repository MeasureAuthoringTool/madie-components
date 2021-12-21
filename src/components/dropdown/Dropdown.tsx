import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import tw from "twin.macro";
import { HelperText, Label } from "../../madie-madie-components";

const ListboxButton = tw(Listbox.Button)`
relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm
`;

const ListboxOptions = tw(Listbox.Options)`
absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm divide-y
`;

const EmptySpan = tw.span`
text-gray-300
`;

const ListSelectorIcon = tw(SelectorIcon)`w-5 h-5 text-gray-400`;

const SelectorSpan = tw.span`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`;

const WrapperDiv = tw.div`w-72 top-16`;
const ListboxDiv = tw.div`relative mt-1`;

export interface DropdownPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: any;
  value?: any;
  onChange?: (nextValue: any) => void;
  placeholder?: string;
  children?: any | any[];
}

export default function Dropdown({
  value,
  onChange,
  children,
  defaultValue = null,
  placeholder = "Select an option",
  ...props
}: DropdownPropsType) {
  const [selected, setSelected] = useState(defaultValue);
  const [selectedChild, setSelectedChild] = useState(null);
  const isControlled = !!value;

  const getState = useCallback(
    () => (isControlled ? value : selected),
    [isControlled, value, selected]
  );

  useEffect(() => {
    if (defaultValue) {
      const selectedChild: any = React.Children.toArray(children).find(
        (child: JSX.Element) => child.props.value === defaultValue
      );
      setSelectedChild(selectedChild?.props.children);
    }
  }, [defaultValue, children]);

  useEffect(() => {
    const selectedChild: any = React.Children.toArray(children).find(
      (child: JSX.Element) => child.props.value === getState()
    );
    setSelectedChild(selectedChild?.props.children);
  }, [children, getState]);

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
    setSelected(value);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child?.type === Label) return child;
      })}
      <WrapperDiv>
        <Listbox value={getState()} onChange={handleChange} {...props}>
          {({ open }) => (
            <ListboxDiv>
              <ListboxButton>
                {getState() ? (
                  <span>{selectedChild}</span>
                ) : (
                  <EmptySpan>{placeholder}</EmptySpan>
                )}
                <SelectorSpan>
                  <ListSelectorIcon aria-hidden="true" />
                </SelectorSpan>
              </ListboxButton>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions>
                  {React.Children.toArray(children).map((child: any) => {
                    if (child?.type === DropdownOption) return child;
                  })}
                </ListboxOptions>
              </Transition>
            </ListboxDiv>
          )}
        </Listbox>
      </WrapperDiv>
      {React.Children.map(children, (child) => {
        if (child?.type === HelperText) return child;
      })}
    </div>
  );
}

const ListboxOption = tw(
  Listbox.Option
)`cursor-default select-none relative text-gray-900`;
const OptionWrapper = tw.div`font-normal w-full h-full p-2 block truncate hover:bg-gray-50`;
const SelectedOptionDiv = tw.div`font-normal w-full h-full p-2 block truncate bg-gray-100`;

export const DropdownOption = ({ value, children }) => {
  return (
    <ListboxOption value={value}>
      {({ selected }) =>
        selected ? (
          <SelectedOptionDiv>{children}</SelectedOptionDiv>
        ) : (
          <OptionWrapper>{children}</OptionWrapper>
        )
      }
    </ListboxOption>
  );
};
