import { Button, Tooltip } from "@nextui-org/react";
import { cn } from "@nextui-org/react";
import { Icon } from "@iconify/react";

type TProps = { isCollapsed: boolean; onToggle: () => void };

const SidebarFooter = ({ isCollapsed, onToggle }: TProps): JSX.Element => {
  return (
    <div
      className={cn("mt-auto flex flex-col", {
        "items-center": isCollapsed,
      })}
    >
      {isCollapsed && (
        <Button
          isIconOnly
          className="flex h-10 w-10 text-default-600"
          size="sm"
          variant="light"
        >
          <Icon
            className="cursor-pointer dark:text-primary-foreground/60 [&>g]:stroke-[1px]"
            height={24}
            icon="solar:round-alt-arrow-right-line-duotone"
            width={24}
            onClick={onToggle}
          />
        </Button>
      )}
      <Tooltip content="Support" isDisabled={!isCollapsed} placement="right">
        <Button
          fullWidth
          className={cn(
            "justify-start truncate text-default-600 data-[hover=true]:text-foreground",
            {
              "justify-center": isCollapsed,
            }
          )}
          isIconOnly={isCollapsed}
          startContent={
            isCollapsed ? null : (
              <Icon
                className="flex-none text-default-600"
                icon="solar:info-circle-line-duotone"
                width={24}
              />
            )
          }
          variant="light"
        >
          {isCollapsed ? (
            <Icon
              className="text-default-500"
              icon="solar:info-circle-line-duotone"
              width={24}
            />
          ) : (
            "Support"
          )}
        </Button>
      </Tooltip>
      <Tooltip content="Log Out" isDisabled={!isCollapsed} placement="right">
        <Button
          className={cn(
            "justify-start text-default-500 data-[hover=true]:text-foreground",
            {
              "justify-center": isCollapsed,
            }
          )}
          isIconOnly={isCollapsed}
          startContent={
            isCollapsed ? null : (
              <Icon
                className="flex-none rotate-180 text-default-500"
                icon="solar:minus-circle-line-duotone"
                width={24}
              />
            )
          }
          variant="light"
        >
          {isCollapsed ? (
            <Icon
              className="rotate-180 text-default-500"
              icon="solar:minus-circle-line-duotone"
              width={24}
            />
          ) : (
            "Log Out"
          )}
        </Button>
      </Tooltip>
    </div>
  );
};

export default SidebarFooter;
