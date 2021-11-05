import React from "react";
import { createGlobalStyle } from "styled-components";
import { GlobalStyles as BaseStyles } from "twin.macro";
import Geometria from "../assets/fonts/Geometria/Geometria";
import Inter from "../assets/fonts/Inter/Inter";
import DejaVuSansMono from "../assets/fonts/DejaVuSansMono/DejaVuSansMono";
import "system-font-css";

// Any customization to the global styles would go here
const CustomStyles = createGlobalStyle`
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Geometria />
    <DejaVuSansMono />
    <Inter />
    <CustomStyles />
  </>
);

export default GlobalStyles;
