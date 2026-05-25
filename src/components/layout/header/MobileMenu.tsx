import { component$, type QRL } from "@builder.io/qwik";

import NavLink from "./NavLink";
import { navLinks } from "~/data/links";

type MobileMenuProps = {
  onOpenAccessibility$: QRL<() => void>;
};

export default component$<MobileMenuProps>(({ onOpenAccessibility$ }) => {
  return (
    <div class="absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-lg md:hidden">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
          />
        ))}

        <button
          type="button"
          class="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition duration-300 hover:border-edumoz-blue hover:bg-white hover:text-edumoz-blue"
          onClick$={onOpenAccessibility$}
        >
          <span>Acessibilidade</span>
          <span class="flex size-8 items-center justify-center rounded-md border border-edumoz-blue/30 text-xs font-black text-edumoz-blue">
            A
          </span>
        </button>
      </div>
    </div>
  );
});
