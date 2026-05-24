import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="mx-auto max-w-6xl px-5 py-16">
      <h1 class="text-4xl font-bold text-edumoz-blue-dark">Entrar</h1>
      <p class="mt-4 max-w-2xl text-lg text-slate-600">
        Acesso para alunos, pais, professores e escolas.
      </p>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Entrar | EduMoz",
  meta: [
    {
      name: "description",
      content: "Pagina de entrada da plataforma EduMoz.",
    },
  ],
};
