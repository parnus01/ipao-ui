import type {Meta, Story} from "@storybook/react";
import {ITypography, Typography} from './Typography'
import {MantineProvider, rem} from "@mantine/core";

export default {
    title: "Typography",
} as Meta<ITypography>;

const Template: Story<ITypography> = (args) => (

    <MantineProvider
        theme={{
            fontSizes: {
                xs: rem('16px'),
                sm: rem('20px'),
                md: rem('24px'),
                lg: rem('32px'),
                xl: rem('40px'),
            },
            lineHeights: {
                xs: '24px',
                sm: '32px',
                md: '36px',
                lg: '48px',
                xl: '56px',
            }
        }}
    >
        <Typography {...args}>My Heading1</Typography>
    </MantineProvider>
);

export const Heading1 = Template.bind({});

Heading1.args = {
    category: 'heading1'
};
