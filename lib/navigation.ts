export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];