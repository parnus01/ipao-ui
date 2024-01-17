import type { ButtonHTMLAttributes } from "react";

import type { Meta, Story } from "@storybook/react";
import { DropdownAction, Dropdowntopic } from "./dropdown-action"
import { Activity } from 'lucide-react';


export default {
    title: "DropdownAction",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template: Story<Dropdowntopic> = (args) => (
    <DropdownAction {...args} />
);

let exampleData = [
    [
        {
            itemName: "choice1",
            onActionClick: () => alert(1),
            label: "label1"
        },
        {
            itemName: "choice2",
            onActionClick: () => alert(2),
            label: "label2",
            color: "red"
        }
    ],
    [
        {
            itemName: "choice3",
            onActionClick: () => alert(3),
            label: "label1",
            isDisable: true
        },
        {
            itemName: "choice4",
            onActionClick: () => alert(4),
            icon: <Activity />,
            label: "label2"
        }
    ]
]

export const dropdownAction = Template.bind({});
dropdownAction.args = {
    value: exampleData,
    size: 32
};