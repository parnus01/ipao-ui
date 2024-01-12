import type { ButtonHTMLAttributes } from "react";

import type { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

export default {
  title: "Typography",
  component: Typography
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </Typography>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "heading1",
  weight: "regular",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "heading2",
  weight: "regular",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: "heading3",
  weight: "regular",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: "heading4",
  weight: "regular",
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
  weight: "regular",
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "body2",
  weight: "regular",
};

export const Bold = Template.bind({});
Bold.args = {
  variant: "body1",
  weight: "bold",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
  weight: "regular",
};
