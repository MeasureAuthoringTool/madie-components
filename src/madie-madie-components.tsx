import React, { FC } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { TextInputComponent } from "./components/inputs/TextInput";

// exporting the default function requires the following syntax /shrug
export { default as Button } from "./components/buttons/Button";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const TextInput = TextInputComponent;
export const { bootstrap, mount, unmount } = lifecycles;
