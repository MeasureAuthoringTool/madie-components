import React from "react";
import { createGlobalStyle } from "styled-components";
import DejaVuSansMonoRegular from "./DejaVuSansMono.woff";
import DejaVuSansMonoRegularItalic from "./DejaVuSansMono-Oblique.woff";
import DejaVuSansMonoBold from "./DejaVuSansMono-Bold.woff";
import DejaVuSansMonoBoldItalic from "./DejaVuSansMono-BoldOblique.woff";

const DejaVuSansMono = createGlobalStyle`
  @font-face {
    font-family: "DejaVu Sans Mono";
    font-style: normal;
    font-weight: 400;
    src: url(${DejaVuSansMonoRegular}) format("woff");
  }
  @font-face {
    font-family: "DejaVu Sans Mono";
    font-style: italic;
    font-weight: 400;
    src: url(${DejaVuSansMonoRegularItalic}) format("woff");
  }

  @font-face {
    font-family: "DejaVu Sans Mono";
    font-style: normal;
    font-weight: 700;
    src: url(${DejaVuSansMonoBold}) format("woff");
  }
  @font-face {
    font-family: "DejaVu Sans Mono";
    font-style: italic;
    font-weight: 700;
    src: url(${DejaVuSansMonoBoldItalic}) format("woff");
  }
`;

export default DejaVuSansMono;
