import React from "react";
import { Button, ButtonOutline, ButtonIcons } from "../index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button"
};

export const button = () => (
  <Button onClick={action("button-click")}>Button</Button>
);
export const outline = () => (
  <ButtonOutline onClick={action("button-click")}>Button Outline</ButtonOutline>
);
export const icon = () => (
  <ButtonIcons onClick={action("button-click")}>Button Icons</ButtonIcons>
);
