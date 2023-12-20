import type {ButtonHTMLAttributes} from "react";

import type {Meta, Story} from "@storybook/react";

import {Typography} from './Typography'

export default {
    title: "Typography",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template: Story<ButtonHTMLAttributes<HTMLButtonElement>> = (args) => (
    <Typography {...args}>No</Typography>
);

export const Heading1 = Template.bind({});