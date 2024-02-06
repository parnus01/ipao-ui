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


let exampleData1 = [
  {
      value: "choice1",
      label: "label1"
  },
  {
      value: "choice2",
      label: "label2"
  },
  {
      value: "choice3",
      label: "label3",
  },
]

const handleApply = (result: string[]) => {
  alert(result);
}
const handleCancle = (result: string[]) => {
  alert("Cancle");
}

export const checkbox = Template.bind({});
checkbox.args = {
  options: exampleData1,
  value: "Dropdown-menu-checkbox" ,
  check_all: false,
  allSelectedText: "Handle selected all",
  onApply: handleApply,
  onCancle: handleCancle
};
export const checkboxCheckAll = Template.bind({});
checkboxCheckAll.args = {
  options: exampleData1,
  value: "Dropdown-menu-checkbox-checkall" ,
  check_all: true,
  allSelectedText: "Handle selected all",
  onApply: handleApply,
  onCancle: handleCancle
};

