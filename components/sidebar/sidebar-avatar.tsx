import { Avatar } from "@nextui-org/react";
import { cn } from "@nextui-org/react";

type TProps = {
  isCollapsed: boolean;
};

const SidebarAvatar = ({ isCollapsed }: TProps): JSX.Element => {
  return (
    <div className="flex items-center gap-3 px-3">
      <Avatar
        isBordered
        size="sm"
        src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg"
      />
      <div
        className={cn("flex max-w-full flex-col", {
          hidden: isCollapsed,
        })}
      >
        <p className="text-small font-medium text-foreground">Kate Moore</p>
        <p className="text-tiny font-medium text-default-400">
          Customer Support
        </p>
      </div>
    </div>
  );
};

export default SidebarAvatar;
