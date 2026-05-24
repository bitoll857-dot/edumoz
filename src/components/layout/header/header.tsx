import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header class="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
      <a
        class="text-xl font-bold text-edumoz-blue"
        href="/"
        aria-label="EduMoz pagina inicial"
      >
        EduMoz
      </a>

      <nav
        class="flex items-center gap-4 text-sm font-medium text-slate-700"
        aria-label="Navegacao principal"
      >
        <a class="hover:text-edumoz-blue" href="/aluno">
          Aluno
        </a>
        <a class="hover:text-edumoz-blue" href="/entrar">
          Entrar
        </a>
        <a
          class="rounded-md bg-edumoz-blue px-4 py-2 text-white hover:bg-edumoz-blue-dark"
          href="/solicitar-acesso"
        >
          Solicitar acesso
        </a>
      </nav>
    </header>
  );
});
