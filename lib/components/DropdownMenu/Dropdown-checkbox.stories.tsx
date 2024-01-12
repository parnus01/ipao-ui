import type { ButtonHTMLAttributes } from "react";

import type { Meta } from "@storybook/react";
import { DropdownMenuCheckboxes } from "./dropdown-checkbox"
import React from "react";

export default {
  title: "DropdownCheckbox",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template = (args) => (
  <DropdownMenuCheckboxes {...args}>
    Dropdown-checkbox
  </DropdownMenuCheckboxes>
);

export const SampleChoice = Template.bind({});
SampleChoice.args = {
  value: ['1', '2', '3', '4', '5', '6'],
  multiple: false,
};

export const WithSeperator = Template.bind({});
WithSeperator.args = {
  value: [['1', '2', '3'], ['4', '5', '6']],
  multiple: false,
};

export const ChooseMultiple = Template.bind({});
ChooseMultiple.args = {
  value: ['1', '2', '3', '4', '5', '6'],
  multiple: true,
};
