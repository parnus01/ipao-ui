import type { ButtonHTMLAttributes } from "react";

import type { Meta, Story } from "@storybook/react";
import { DropdownMenuCheckbox, Dropdowntopic } from "./dropdown-checkbox"
import { Activity } from 'lucide-react';

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
      itemName: "choice1",
      label: "label1"
  },
  {
      itemName: "choice2",
      icon: <Activity />,
      label: "label2"
  },
]

let exampleData2 = [
  [
      {
          itemName: "choice1",
          label: "label1"
      },
      {
          itemName: "choice2",
          icon: <Activity />,
          label: "label2",
      }
  ],
  [
      {
          itemName: "choice3",
          label: "label3",
          isDisable: true
      },
      {
          itemName: "choice4",
          label: "label4"
      }
  ]
]


export const SingleSelect = Template.bind({});
SingleSelect.args = {
  value: exampleData1,
  multiple: false,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  value: exampleData2,
  multiple: true,
};