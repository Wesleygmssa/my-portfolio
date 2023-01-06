import { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from ".";

export default {
    title: "Components/Text",
    component: Text,
    args: {
        color: "white",
        size: "md",
        children: "Text Component",
    },
    argTypes: {
        variant: {
            control: {
                type: "inline-radio",
            },
        },
        size: {
            control: {
                type: "inline-radio",
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<TextProps>;

export const Default: StoryObj = {};
