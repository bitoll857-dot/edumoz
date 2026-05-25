import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import type { NavLinkProps } from "~/types/navbar";

export default component$<NavLinkProps>(
  ({ href, label }) => {
    const location = useLocation();
    const pathname = location.url.pathname;
    const isActive =
      href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

    return (
      <a
        href={href}
        aria-current={isActive ? "page" : undefined}
        class={[
          "relative text-slate-700 transition duration-300 hover:text-edumoz-blue",
          isActive &&
            "font-semibold text-edumoz-blue after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-edumoz-yellow",
        ]}
      >
        {label}
      </a>
    );
  }
);
