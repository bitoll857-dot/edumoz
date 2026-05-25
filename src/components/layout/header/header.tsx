import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import AccessibilityButton from "~/components/accessibility/AccessibilityButton";
import AccessibilityModal from "~/components/accessibility/AccessibilityModal";
import MobileMenu from "~/components/layout/header/MobileMenu";
import NavLink from "~/components/layout/header/NavLink";
import UserAvatar from "~/components/layout/header/UserAvatar";
import UserSidebar from "./UserSidebar";
import { navLinks } from "~/data/links";
import {
  applyAccessibilityPreferences,
  getAccessibilityPreferences,
} from "~/utils/accessibility-storage";

import { currentUser } from "~/data/user";

export const Header = component$(() => {
  const isMenuOpen = useSignal(false);
  const isAccessibilityOpen = useSignal(false);
  const isLoggedIn = useSignal(true);
  const userSidebar = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    applyAccessibilityPreferences(getAccessibilityPreferences());
  });

  return (
    <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          class="flex items-center gap-3 text-xl font-bold text-edumoz-blue"
          href="/"
          aria-label="EduMoz pagina inicial"
        >
          <span class="grid size-10 place-items-center rounded-full bg-edumoz-blue text-sm font-bold text-white">
            EM
          </span>
          <span>EduMoz</span>
        </a>

        <nav
          class="hidden items-center gap-5 text-sm font-medium md:flex"
          aria-label="Navegacao principal"
        >
          {navLinks.map((item) => (
            <NavLink href={item.href} key={item.href} label={item.label} />
          ))}
        </nav>

        <div class="flex items-center gap-2">
          <div class="hidden md:block">
            <AccessibilityButton
              onClick$={() => {
                isAccessibilityOpen.value = true;
              }}
            />
          </div>

          
          <button
              type="button"
              aria-label="Abrir painel do usuario"
              class="hidden rounded-full transition-all duration-300 hover:scale-105 lg:flex"
              onClick$={() => {
                userSidebar.value = true;
              }}
            >
              <UserAvatar
                avatarUrl={currentUser?.avatarUrl}
                isAuthenticated={!!currentUser}
                name={currentUser?.name}
              />
            </button>

          <button
            aria-expanded={isMenuOpen.value}
            aria-label={
              isMenuOpen.value
                ? "Fechar menu de navegacao"
                : "Abrir menu de navegacao"
            }
            class="flex size-10 flex-col items-center justify-center gap-1 rounded-md border border-slate-200 text-edumoz-blue md:hidden"
            onClick$={() => {
              isMenuOpen.value = !isMenuOpen.value;
            }}
            type="button"
          >
            <span class="h-0.5 w-5 bg-current"></span>
            <span class="h-0.5 w-5 bg-current"></span>
            <span class="h-0.5 w-5 bg-current"></span>
          </button>
        </div>
      </div>

      {isMenuOpen.value && (
        <MobileMenu
          onOpenAccessibility$={() => {
            isMenuOpen.value = false;
            isAccessibilityOpen.value = true;
          }}
        />
      )}

      {isAccessibilityOpen.value && (
        <AccessibilityModal
          onClose$={() => {
            isAccessibilityOpen.value = false;
          }}
        />
      )}
    </header>
  );
});
