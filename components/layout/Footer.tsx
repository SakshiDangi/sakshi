import Link from "next/link";

import { socials } from "@/data";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";

import { socialIcons } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-border/60
        bg-muted/20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
          lg:px-8
        "
      >
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[1.6fr_1fr_1fr]
          "
        >
          {/* Brand */}

          <div className="max-w-xl">
            <h2
              className="
                font-heading
                text-3xl
                font-extrabold
                tracking-tight
                text-foreground
              "
            >
              {siteConfig.name}
            </h2>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              AI Systems • Education Technology • Blockchain Security
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Navigation
            </h3>

            <nav
              className="
                mt-6
                flex
                flex-col
                gap-3
              "
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-base
                    text-muted-foreground
                    transition-colors
                    hover:text-primary
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}

          <div>
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Connect
            </h3>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >
              {socials
                .filter((social) => social.featured)
                .map((social) => {
                  const Icon =
                    socialIcons[
                      social.name as keyof typeof socialIcons
                    ];

                  return (
                    <Link
                      key={social.id}
                      href={social.href}
                      target={
                        social.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        social.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        inline-flex
                        items-center
                        gap-3
                        text-base
                        text-muted-foreground
                        transition-colors
                        hover:text-primary
                      "
                    >
                      <Icon className="size-5" />

                      <span>{social.name}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        <div
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-border/60
            pt-8
            text-sm
            text-muted-foreground
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <p>
            Designed & built with Next.js, TypeScript, Tailwind CSS and
            Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}