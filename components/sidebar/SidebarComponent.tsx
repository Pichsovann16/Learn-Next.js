"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import Link from "next/link";
import { MenuList } from "./menu";
import { useState } from "react";

import { IconType } from "react-icons";

type MenuItem = {
  name: string;
  path: string;
  icon: IconType;
};

export default function SidebarComponent() {
  const [menuList] = useState<MenuItem[]>(MenuList);
  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          {menuList.map((item, index) => (
            <SidebarItem
              key={index}
              as={Link}
              href={item.path}
              icon={item.icon}
            >
              {item.name}
            </SidebarItem>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
