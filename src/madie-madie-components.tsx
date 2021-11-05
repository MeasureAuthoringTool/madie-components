import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

// exporting the default function requires the following syntax /shrug
export { default as Button } from "./components/buttons/Button";
export { default as Checkbox } from "./components/checkbox/Checkbox";
export { default as CheckboxList } from "./components/checkbox/CheckboxList";
export { default as TextInput } from "./components/inputs/TextInput";

const lifecycles = singleSpaReact<void>({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
