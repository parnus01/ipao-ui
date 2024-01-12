import type { ButtonHTMLAttributes } from "react";

import type { Meta, Story } from "@storybook/react";
import { DropdownMenuCheckboxes, Dropdowntopic } from "./dropdown-checkbox"

export default {
  title: "DropdownCheckbox",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template: Story<Dropdowntopic> = (args) => (
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
