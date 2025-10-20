"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ManuList } from "./menu";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export function NavbarComponent() {
  const pathname = usePathname();
  const [menu] = useState<MenuItem[]>(ManuList);

  // const updateMenu = (path: string) => {
  //   const newMenu = menu.map((item) => {
  //     if (path === item.path) {
  //       return { ...item, active: true };
  //     }
  //     return { ...item, active: false };
  //   });
  //   setMenu(newMenu);
  // };
  return (
    <Navbar fluid rounded className="w-full">
      <NavbarBrand as={Link} href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/next.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((item, index) => (
          <NavbarLink
            key={index}
            as={Link}
            href={item.path}
            active={item.path === pathname}
          >
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
