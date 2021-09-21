import React from "react";
import { createGlobalStyle } from "styled-components";
import InterThin from "./Inter-Thin-BETA.woff";
import InterThinItalic from "./Inter-ThinItalic-BETA.woff";

import InterExtraLight from "./Inter-ExtraLight-BETA.woff";
import InterExtraLightItalic from "./Inter-ExtraLightItalic-BETA.woff";

import InterLight from "./Inter-Light-BETA.woff";
import InterLightItalic from "./Inter-LightItalic-BETA.woff";

import InterRegular from "./Inter-Regular.woff";
import InterRegularItalic from "./Inter-Italic.woff";

import InterMedium from "./Inter-Medium.woff";
import InterMediumItalic from "./Inter-MediumItalic.woff";

import InterSemiBold from "./Inter-SemiBold.woff";
import InterSemiBoldItalic from "./Inter-SemiBoldItalic.woff";

import InterBold from "./Inter-Bold.woff";
import InterBoldItalic from "./Inter-BoldItalic.woff";

import InterExtraBold from "./Inter-ExtraBold.woff";
import InterExtraBoldItalic from "./Inter-ExtraBoldItalic.woff";

import InterBlack from "./Inter-Black.woff";
import InterBlackItalic from "./Inter-BlackItalic.woff";

const Inter = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    src: url(${InterThin}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 100;
    src: url(${InterThinItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    src: url(${InterExtraLight}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 200;
    src: url(${InterExtraLightItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    src: url(${InterLight}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 300;
    src: url(${InterLightItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    src: url(${InterRegularItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url(${InterMedium}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 500;
    src: url(${InterMediumItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    src: url(${InterSemiBold}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 600;
    src: url(${InterSemiBoldItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: url(${InterBold}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 700;
    src: url(${InterBoldItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    src: url(${InterExtraBold}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 800;
    src: url(${InterExtraBoldItalic}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    src: url(${InterBlack}) format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 900;
    src: url(${InterBlackItalic}) format("woff");
  }
`;

export default Inter;
