"use client";

import React from "react";
import { usePathname } from "next/navigation";

import SideBar from "@/components/sidebar";
import SettingsComponent from "@/components/settings/container-setting";

export default function Component() {
  const pathname = usePathname();
  const currentPath = pathname.split("/")?.[1];
  // eslint-disable-next-line no-console
  console.log("currentPath: =-->", currentPath);
  // <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />

  return (
    <div className="flex items-stretch gap-4">
      <SideBar />
      <SettingsComponent />
    </div>
  );
}
