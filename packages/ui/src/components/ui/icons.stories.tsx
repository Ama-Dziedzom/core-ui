import type { Meta, StoryObj } from "@storybook/react";
import { AiChat01Icon, AlarmClockIcon, AlbumIcon } from "@hugeicons/react";

const meta: Meta = {
    title: "Components/Icons",
    tags: ["autodocs"],
};

export default meta;

export const HugeIcons = {
    render: () => (
        <div className="flex gap-4 p-4 text-primary">
            <AiChat01Icon size={24} />
            <AlarmClockIcon size={24} />
            <AlbumIcon size={24} />
        </div>
    ),
};
