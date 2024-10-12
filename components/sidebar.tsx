"use client";
import SidebarDrawer from "./settings/sidebar-drawer";
import { Spacer, useDisclosure } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@nextui-org/react";
import { items } from "./settings/items";
import SidebarItems from "./sidebar/sidebar-items";
import SidebarFooter from "./sidebar/sidebar-footer";
import SidebarHeader from "./sidebar/sidebar-header";
import SidebarAvatar from "./sidebar/sidebar-avatar";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const onToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <SidebarDrawer
      className={cn("min-w-[288px] rounded-lg", {
        "min-w-[76px]": isCollapsed,
      })}
      hideCloseButton={true}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <div
        className={cn(
          "will-change relative flex h-full w-72 flex-col bg-default-100 p-6 transition-width",
          {
            "w-[83px] items-center px-[6px] py-6": isCollapsed,
          }
        )}
      >
        <SidebarHeader
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          onOpenChange={onOpenChange}
          onToggle={onToggle}
        />
        <Spacer y={6} />

        <SidebarAvatar isCollapsed={isCollapsed} />

        <Spacer y={6} />

        <SidebarItems
          defaultSelectedKey="settings"
          iconClassName="group-data-[selected=true]:text-default-50"
          isCompact={isCollapsed}
          itemClasses={{
            base: "px-3 rounded-large data-[selected=true]:!bg-foreground",
            title: "group-data-[selected=true]:text-default-50",
          }}
          items={items}
        />

        <Spacer y={8} />

        <SidebarFooter isCollapsed={isCollapsed} onToggle={onToggle} />
      </div>
    </SidebarDrawer>
  );
}
