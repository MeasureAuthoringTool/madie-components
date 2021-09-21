import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import tw, { styled, TwStyle } from "twin.macro";

const FamilyDefs = {
  mono: "mono",
  display: "display",
  body: "body",
} as const;
type Family = typeof FamilyDefs[keyof typeof FamilyDefs];

const WeightDefs = {
  thin: "thin",
  extraLight: "extraLight",
  light: "light",
  normal: "normal",
  medium: "medium",
  semiBold: "semiBold",
  bold: "bold",
  extraBold: "extraBold",
  black: "black",
} as const;
type Weight = typeof WeightDefs[keyof typeof WeightDefs];

interface TypographyProps {
  text: string;
  family: Family;
  weight: Weight;
  useItalics: boolean;
}

interface StyledFontProps {
  family: Family;
  weight: Weight;
  useItalics: boolean;
  size: TwStyle;
}

const StyledFont = styled.div<StyledFontProps>((specifier: StyledFontProps) => {
  const { family, weight, useItalics, size } = specifier;

  const italicStyling = useItalics ? tw`italic` : tw`not-italic`;

  let familyStyling: TwStyle;
  switch (family) {
    case FamilyDefs.display: {
      familyStyling = tw`font-display`;
      break;
    }
    case FamilyDefs.mono: {
      familyStyling = tw`font-mono`;
      break;
    }
    case FamilyDefs.body: {
      familyStyling = tw`font-body`;
      break;
    }
    default: {
      throw new Error("Invalid font family selected");
    }
  }

  let weightStyling: TwStyle;
  switch (weight) {
    case WeightDefs.thin: {
      weightStyling = tw`font-thin`;
      break;
    }
    case WeightDefs.extraLight: {
      weightStyling = tw`font-extralight`;
      break;
    }
    case WeightDefs.light: {
      weightStyling = tw`font-light`;
      break;
    }
    case WeightDefs.normal: {
      weightStyling = tw`font-normal`;
      break;
    }
    case WeightDefs.medium: {
      weightStyling = tw`font-medium`;
      break;
    }
    case WeightDefs.semiBold: {
      weightStyling = tw`font-semibold`;
      break;
    }
    case WeightDefs.bold: {
      weightStyling = tw`font-bold`;
      break;
    }
    case WeightDefs.extraBold: {
      weightStyling = tw`font-extrabold`;
      break;
    }
    case WeightDefs.black: {
      weightStyling = tw`font-black`;
      break;
    }
    default: {
      throw new Error("Invalid font weight selected");
    }
  }

  return [familyStyling, italicStyling, weightStyling, size];
});

function Typography(props: TypographyProps) {
  const { text, family, weight, useItalics } = props;
  const sizes = [
    tw`text-xs`,
    tw`text-sm`,
    tw`text-base`,
    tw`text-lg`,
    tw`text-xl`,
    tw`text-2xl`,
    tw`text-3xl`,
    tw`text-4xl`,
    tw`text-5xl`,
    tw`text-6xl`,
    tw`text-7xl`,
    tw`text-8xl`,
    tw`text-9xl`,
  ];
  return (
    <>
      {sizes.map((size) => (
        <StyledFont
          family={family}
          weight={weight}
          useItalics={useItalics}
          size={size}
        >
          {text}
        </StyledFont>
      ))}
    </>
  );
}

export default {
  title: "MADiE/Typography",
  component: Typography,
  argTypes: {
    family: {
      name: "Font Family",
      defaultValue: FamilyDefs.body,
      options: [FamilyDefs.display, FamilyDefs.body, FamilyDefs.mono],
      control: { type: "radio" },
    },
    weight: {
      name: "Font Weight",
      defaultValue: WeightDefs.normal,
      options: [
        WeightDefs.thin,
        WeightDefs.extraLight,
        WeightDefs.light,
        WeightDefs.normal,
        WeightDefs.medium,
        WeightDefs.semiBold,
        WeightDefs.bold,
        WeightDefs.extraBold,
        WeightDefs.black,
      ],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Display = Template.bind({});
Display.args = {
  text: "Welcome to MADiE",
  useItalics: false,
  family: FamilyDefs.display,
  weight: WeightDefs.bold,
};

export const Body = Template.bind({});
Body.args = {
  text: "Body content",
  useItalics: false,
  family: FamilyDefs.body,
  weight: WeightDefs.normal,
};

export const Mono = Template.bind({});
Mono.args = {
  text: "Mono content",
  useItalics: false,
  family: FamilyDefs.mono,
  weight: WeightDefs.normal,
};
