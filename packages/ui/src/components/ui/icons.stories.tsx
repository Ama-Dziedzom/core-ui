import type { Meta } from "@storybook/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Home01Icon,
    SearchIcon,
    Settings01Icon,
    UserIcon,
    Notification01Icon
} from "@hugeicons/core-free-icons";

const meta: Meta = {
    title: "Components/Icons",
    tags: ["autodocs"],
};

export default meta;

export const FreeIcons = {
    render: () => (
        <div className="flex gap-4 p-4 text-primary flex-wrap">
            <div className="flex flex-col items-center gap-2">
                <HugeiconsIcon icon={Home01Icon} size={24} />
                <span className="text-xs text-muted-foreground">Home</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <HugeiconsIcon icon={SearchIcon} size={24} />
                <span className="text-xs text-muted-foreground">Search</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <HugeiconsIcon icon={Settings01Icon} size={24} />
                <span className="text-xs text-muted-foreground">Settings</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <HugeiconsIcon icon={UserIcon} size={24} />
                <span className="text-xs text-muted-foreground">User</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <HugeiconsIcon icon={Notification01Icon} size={24} />
                <span className="text-xs text-muted-foreground">Notification</span>
            </div>
        </div>
    ),
};
