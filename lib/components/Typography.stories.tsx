import type { ButtonHTMLAttributes } from "react";

import type { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

export default {
  title: "Typography",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>Heading 1 text</Typography>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "heading1",
};
