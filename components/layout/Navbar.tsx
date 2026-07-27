import Link from "next/link";

import { navigation } from "@/lib/navigation";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-border/60
        bg-background/75
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-background/60
        shadow-sm
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-full
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* Logo */}

        <Logo />

        {/* Desktop Navigation */}

        <nav
          aria-label="Primary navigation"
          className="
            hidden
            items-center
            gap-10
            lg:flex
          "
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-[15px]
                font-medium
                tracking-tight
                text-muted-foreground
                transition-all
                duration-300
                hover:text-foreground

                after:absolute
                after:-bottom-1.5
                after:left-0
                after:h-[2px]
                after:w-0
                after:rounded-full
                after:bg-primary
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div
          className="
            hidden
            items-center
            gap-4
            lg:flex
          "
        >

          <ThemeToggle />
        </div>

        {/* Mobile */}

        <div
          className="
            flex
            items-center
            lg:hidden
          "
        >
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}