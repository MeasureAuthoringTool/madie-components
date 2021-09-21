import React from "react";
import tw, { styled } from "twin.macro";
import ColorGridRow, { ColorDefs } from "../../components/colors/ColorGridRow";

export interface ColorGridProps {
  backgroundColor: string;
}

const Wrapper = styled.section<ColorGridProps>`
  background-color: ${(props) => props.backgroundColor};
  ${tw`p-10`}
`;

export default function ColorGrid(props: ColorGridProps) {
  const { backgroundColor } = props;
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <ColorGridRow colorName={ColorDefs.primary} title="Primary" />

      <ColorGridRow colorName={ColorDefs.teal} title="Teal" />

      <ColorGridRow colorName={ColorDefs.green} title="Green" />

      <ColorGridRow colorName={ColorDefs.blue} title="Blue" />

      <ColorGridRow colorName={ColorDefs.yellow} title="Yellow" />

      <ColorGridRow colorName={ColorDefs.red} title="Red" />

      <ColorGridRow colorName={ColorDefs.gray} title="Gray" />
    </Wrapper>
  );
}
