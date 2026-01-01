import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg", "icon"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Button",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        children: "Button",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Button",
    },
};
