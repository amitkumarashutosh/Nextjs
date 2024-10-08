"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative w-full flex items-center justify-center">
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
      >
        <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
        </Link>

        <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Courses">
            </MenuItem>
        </Link>

          <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}
