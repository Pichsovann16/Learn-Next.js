"use client";
import SidebarComponent from "@/components/sidebar/SidebarComponent";
import { useState } from "react";
import React from "react";
import "@/app/globals.css";
import { MenuIcon } from "@/components/icon/FontAwesome";

export default function Adminlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(true);
  return (
    <html>
      <body className="flex none-scroll-bar overflow-y-auto">
        <MenuIcon
          onClick={() => setIsShowSidebar(!isShowSidebar)}
          classname="h-8 w-8 fixed bottom-0 m-4 lg:hidden"
        />
        <aside
          className={`sticky left-0 z-10 h-screen ${
            isShowSidebar && "hidden"
          } lg:block`}
        >
          <SidebarComponent />
        </aside>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
