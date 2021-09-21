import React from "react";
import { createGlobalStyle } from "styled-components";
import GeometriaThin from "./Geometria-Thin.woff";
import GeometriaThinItalic from "./Geometria-ThinItalic.woff";
import GeometriaExtraLight from "./Geometria-ExtraLight.woff";
import GeometriaExtraLightItalic from "./Geometria-ExtraLightItalic.woff";
import GeometriaLight from "./Geometria-Light.woff";
import GeometriaLightItalic from "./Geometria-LightItalic.woff";
import GeometriaRegular from "./Geometria.woff";
import GeometriaRegularItalic from "./Geometria-Italic.woff";
import GeometriaMedium from "./Geometria-Medium.woff";
import GeometriaMediumItalic from "./Geometria-MediumItalic.woff";
import GeometriaBold from "./Geometria-Bold.woff";
import GeometriaBoldItalic from "./Geometria-BoldItalic.woff";
import GeometriaExtraBold from "./Geometria-ExtraBold.woff";
import GeometriaExtraBoldItalic from "./Geometria-ExtraBoldItalic.woff";
import GeometriaHeavy from "./Geometria-Heavy.woff";
import GeometriaHeavyItalic from "./Geometria-HeavyItalic.woff";

const Geometria = createGlobalStyle`
  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 100;
    src: url(${GeometriaThin}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 100;
    src: url(${GeometriaThinItalic}) format("woff");
  }

  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 200;
    src: url(${GeometriaExtraLight}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 200;
    src: url(${GeometriaExtraLightItalic}) format("woff");
  }

  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 300;
    src: url(${GeometriaLight}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 300;
    src: url(${GeometriaLightItalic}) format("woff");
  }

  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 400;
    src: url(${GeometriaRegular}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 400;
    src: url(${GeometriaRegularItalic}) format("woff");
  }

  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 500;
    src: url(${GeometriaMedium}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 500;
    src: url(${GeometriaMediumItalic}) format("woff");
  }

  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 700;
    src: url(${GeometriaBold}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 700;
    src: url(${GeometriaBoldItalic}) format("woff");
  }

  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 800;
    src: url(${GeometriaExtraBold}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 800;
    src: url(${GeometriaExtraBoldItalic}) format("woff");
  }

  @font-face {
    font-family: "Geometria";
    font-style: normal;
    font-weight: 900;
    src: url(${GeometriaHeavy}) format("woff");
  }
  @font-face {
    font-family: "Geometria";
    font-style: italic;
    font-weight: 900;
    src: url(${GeometriaHeavyItalic}) format("woff");
  }
`;

export default Geometria;
