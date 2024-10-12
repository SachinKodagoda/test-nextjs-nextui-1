import { cn } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { AcmeIcon } from "@/components/icons/acme";

type TProps = {
  isCollapsed: boolean;
  isMobile: boolean;
  onOpenChange: () => void;
  onToggle: () => void;
};

const SidebarHeader = ({
  isCollapsed,
  isMobile,
  onOpenChange,
  onToggle,
}: TProps): JSX.Element => {
  return (
    <div
      className={cn("flex items-center gap-3 pl-2", {
        "justify-center gap-0 pl-0": isCollapsed,
      })}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
        <AcmeIcon className="text-background" />
      </div>
      <span
        className={cn("w-full text-small font-bold uppercase opacity-100", {
          "w-0 opacity-0": isCollapsed,
        })}
      >
        Acme
      </span>
      <div className={cn("flex-end flex", { hidden: isCollapsed })}>
        <Icon
          className="cursor-pointer dark:text-primary-foreground/60 [&>g]:stroke-[1px]"
          icon="solar:round-alt-arrow-left-line-duotone"
          width={24}
          onClick={isMobile ? onOpenChange : onToggle}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
