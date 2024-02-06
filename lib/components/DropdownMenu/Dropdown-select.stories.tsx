import type { ButtonHTMLAttributes } from "react";

import type { Meta, Story } from "@storybook/react";
import { DropdownSelect, Dropdowntopic } from "./dropdown-select"

export default {
    title: "DropdownSelect",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template: Story<Dropdowntopic> = (args) => (
    <DropdownSelect {...args}>
        Dropdown-select
    </DropdownSelect>
);


let defaultValue = "choice4";

const handleChange = (newVal: any) => {
    alert("Selected: " + newVal);
}
const handleDefaultChange = (newVal: any) => {
    defaultValue = newVal;
    alert("new Default value: " + defaultValue);
}

let exampleData1 = [

    {
        value: "choice1",
        label: "label1",
    },
    {
        value: "choice2",
        label: "label2"
    }
    ,

    {
        value: "choice3",
        label: "label3",
        disabled: true,
        isSeparate: true
    },
    {
        value: "choice4",
        label: "label4"
    }

]


export const select = Template.bind({});
select.args = {
    onSelectChange: handleChange,
    options: exampleData1,
    value: 'select3-testValue',
};
export const defaultSelect = Template.bind({});
defaultSelect.args = {
    onSelectChange: handleDefaultChange,
    options: exampleData1,
    value: 'select3-testDefaultValue',
    defaultValue: defaultValue
};


