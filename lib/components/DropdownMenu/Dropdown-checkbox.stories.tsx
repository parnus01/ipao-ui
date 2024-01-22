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
      value: "choice1",
      label: "label1"
  },
  {
      value: "choice2",
      icon: <Activity />,
      label: "label2"
  },
]

let exampleData2 = [
  [
      {
          value: "choice1",
          label: "label1"
      },
      {
          value: "choice2",
          icon: <Activity />,
          label: "label2",
      }
  ],
  [
      {
          value: "choice3",
          label: "label3",
          isDisable: true
      },
      {
          value: "choice4",
          label: "label4"
      }
  ]
]


export const SingleSelect = Template.bind({});
SingleSelect.args = {
  values: exampleData1,
  multiple: false,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  values: exampleData2,
  multiple: true,
};

