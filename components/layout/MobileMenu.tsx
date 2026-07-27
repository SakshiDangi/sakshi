"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/lib/navigation";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex h-full w-80 flex-col p-0"
      >
        <SheetHeader className="border-b p-6">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                rounded-md
                px-3
                py-2
                text-base
                font-medium
                transition-colors
                hover:bg-muted
                hover:text-primary
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Theme
            </span>

            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}