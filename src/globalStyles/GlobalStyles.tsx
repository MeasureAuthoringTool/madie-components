import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";
import Geometria from "../assets/fonts/Geometria/Geometria";
import Inter from "../assets/fonts/Inter/Inter";
import DejaVuSansMono from "../assets/fonts/DejaVuSansMono/DejaVuSansMono";
import "system-font-css";

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Geometria />
    <DejaVuSansMono />
    <Inter />
  </>
);

export default GlobalStyles;
