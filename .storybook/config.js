import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { themes } from "@storybook/theming";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

addParameters({
  options: {
    theme: themes.dark
  }
});
addDecorator(withInfo);
// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
