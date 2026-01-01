import type { Meta, StoryObj } from "@storybook/react";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
} from "./card";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <button className="px-4 py-2 border rounded">Cancel</button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded">Deploy</button>
            </CardFooter>
        </Card>
    ),
};
