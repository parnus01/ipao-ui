import type { ButtonHTMLAttributes } from "react";

import type { Meta, Story } from "@storybook/react";
import { DropdownMenuCheckbox, Dropdowntopic } from "./dropdown-checkbox"

export default {
  title: "DropdownCheckbox",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template: Story<Dropdowntopic> = (args) => (
  <DropdownMenuCheckbox {...args}>
    Dropdown-checkbox
  </DropdownMenuCheckbox>
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
